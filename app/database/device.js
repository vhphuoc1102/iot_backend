const mongoose = require("mongoose");
const DeviceSchema = new mongoose.Schema({
  crop: String,
  mode: Number,
  pump: Number,
  led: Number,
  illuminated_time: Number,
  data: [
    {
      temperature: Number,
      humidity: Number,
      soil: Number,
      night: Number,
      state: {
        ledState: Number,
        pumpState: Number,
      },
      createAt: { type: Date, default: Date.now },
      updateAt: { type: Date, default: Date.now },
    },
  ],
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("devices", DeviceSchema);
