const mongoose = require("mongoose");
const dbConfig = require("../database/db_config");
const RealTimeDB = require("../database/realtime");
const DeviceDB = require("../database/device");
const CropsBD = require("../database/crops");
const axios = require("axios");
const myFirebase = require("../config/firebaseConfig");

var database = myFirebase.database();

mongoose
  .connect(dbConfig.dbs, {
    useNewUrlParser: true,
  })
  .catch((error) => handleError(error));

setInterval(() => {
  database.ref("/").on("value", async (snapshot) => {
    try {
      let data = JSON.parse(JSON.stringify(snapshot));
      console.log(data);
      let devices = Object.keys(data);
      let value = Object.values(data);
      for (let i = 0; i < devices.length; i++) {
        realtime = {
          humidity: value[i].data.Humidity,
          night: value[i].data.Night,
          temperature: value[i].data.Temp,
          soil: value[i].data.Soil,
          state: {
            ledState: value[i].data.State.LedState,
            pumpState: value[i].data.State.PumpState,
          },
        };
        const result = await RealTimeDB.findOneAndUpdate(
          { crop: devices[i] },
          realtime
        );
        const crop = await CropsBD.findOne({
          name: devices[i],
        });

        lightingTime = crop.lightingTime;
        const device = await DeviceDB.findOne({
          crop: devices[i],
        });
        const deviceData = await DeviceDB.findOneAndUpdate(
          {
            crop: devices[i],
          },
          { $push: { data: realtime } }
        );
        if (deviceData.data.length > 25) {
          await DeviceDB.updateOne(
            { crop: devices[i] },
            { $push: { data: { $each: [], $slice: -5 } } }
          );
        }
        // var now = new Date();
        // var hour = now.getHours();
        // var auto = { light: null, pump: null };
        // if (device.mode === 0) {
        //   if (hour >= 6 && hour < 6 + lightingTime) {
        //     auto = { ...auto, light: 1 };
        //   } else {
        //     auto = { ...auto, light: 0 };
        //   }
        //   if (value[i].data.Soil > 500) {
        //     auto = { ...auto, pump: 1 };
        //   } else {
        //     auto = { ...auto, pump: 0 };
        //   }
        //   const setAuto = await DeviceDB.findOneAndUpdate(
        //     { crop: devices[i] },
        //     auto
        //   );
        // }
        const d = await DeviceDB.findOne({
          crop: devices[i],
        });
        var updates = {};
        updates["/" + devices[i] + "/devices/Led"] = d.led;
        updates["/" + devices[i] + "/devices/Pump"] = d.pump;
        updates["/" + devices[i] + "/mode"] = d.mode;
        database.ref().update(updates);
      }
    } catch (err) {
      console.log(err);
    }
  });
}, 500);

// node --max-old-space-size=8192 ./app/worker/worker.js
