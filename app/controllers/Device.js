const RealTimeDB = require("../database/realtime");
const DeviceDB = require("../database/device");

module.exports = {
  setAuto: async (req, res, next) => {
    try {
      data = {
        mode: 0,
      };
      const result = await DeviceDB.findOneAndUpdate(
        { crop: req.body.crop },
        data
      );
      if (result.status == 500) {
        return res.status(200).send({ result });
      } else {
        return res.status(200).send({ status: 200, result });
      }
    } catch (error) {
      return res.status(200).send({ status: 200, error });
    }
  },
  setManual: async (req, res, next) => {
    try {
      data = {
        mode: 1,
      };
      const result = await DeviceDB.findOneAndUpdate(
        { crop: req.body.crop },
        data
      );
      if (result.status == 500) {
        return res.status(200).send({ result });
      } else {
        return res.status(200).send({ status: 200, result });
      }
    } catch (error) {
      return res.status(200).send({ status: 200, error });
    }
  },
  setPump: async (req, res, next) => {
    try {
      data = {
        pump: req.body.mode,
      };
      const result = await DeviceDB.findOneAndUpdate(
        { crop: req.body.crop, mode: 1 },
        data
      );
      if (result.status == 500) {
        return res.status(200).send({ result });
      } else {
        return res.status(200).send({ status: 200, result });
      }
    } catch (error) {
      return res.status(200).send({ status: 200, error });
    }
  },
  setLight: async (req, res, next) => {
    try {
      data = {
        light: req.body.mode,
      };
      const result = await DeviceDB.findOneAndUpdate(
        { crop: req.body.crop, mode: 1 },
        data
      );
      if (result.status == 500) {
        return res.status(200).send({ result });
      } else {
        return res.status(200).send({ status: 200, result });
      }
    } catch (error) {
      return res.status(200).send({ status: 200, error });
    }
  },
  getRealTime: async (req, res, next) => {
    try {
      const result = await RealTimeDB.findOne({ crop: req.body.crop });
      if (result.status == 500) {
        return res.status(200).send({ result });
      } else {
        return res.status(200).send({ status: 200, result });
      }
    } catch (error) {
      return res.status(200).send({ status: 200, error });
    }
  },
  getDeviceStatus: async (req, res, next) => {
    try {
      const result = await DeviceDB.findOne({ crop: req.body.crop });
      if (result.status == 500) {
        return res.status(200).send({ result });
      } else {
        return res.status(200).send({ status: 200, result });
      }
    } catch (error) {
      return res.status(200).send({ status: 200, error });
    }
  },
};
