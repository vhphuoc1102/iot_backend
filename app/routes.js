const { body, validationResult, param } = require("express-validator");
const middleWare = require("./middlewares/AuthMiddleware");
const express = require("express");
const router = express.Router();

const user = require("./controllers/User");
const crop = require("./controllers/Crops");
const device = require("./controllers/Device")
const fee = require("./controllers/Fee")
router.post(
  "/v0/signup",
  [
    body("email")
      .isEmail()
      .notEmpty()
      .withMessage("Please enter a valid email."),
    body("password").notEmpty().withMessage("Please enter a valid password."),
  ],
  user.signup
);
// login
router.post(
  "/v0/login",
  [
    body("email")
      .isEmail()
      .notEmpty()
      .withMessage("Please enter a valid email."),
    body("password").notEmpty().withMessage("Please enter a valid password."),
  ],
  user.login
);

router.post(
  "/v0/create_product",  
  crop.createCrop
);
router.get(
  "/v0/get_list_product",
  crop.getAllCrops
)
router.post(
  "/v0/update_product",
  crop.updateCrop
)
router.post(
  "/v0/delete_product",
  crop.deleteCrop
)
router.post(
  "/v0/get_real_time",
  [body("crop").notEmpty().withMessage("No crop")],
  middleWare.isAuth,
  device.getRealTime
)

router.post(
  "/v0/set_auto",
  [body("crop").notEmpty().withMessage("No crop")],
  middleWare.isAuth,
  device.setAuto
)
router.post(
  "/v0/set_manual",
  [body("crop").notEmpty().withMessage("No crop")],
  middleWare.isAuth,
  device.setManual
)
router.post(
  "/v0/set_light",
  [body("crop").notEmpty().withMessage("No crop")],
  middleWare.isAuth,
  device.setLight
)
router.post(
  "/v0/set_pump",
  [body("crop").notEmpty().withMessage("No crop")],
  middleWare.isAuth,
  device.setPump
)
router.post(
  "/v0/get_device_status",
  [body("crop").notEmpty().withMessage("No crop")],
  middleWare.isAuth,
  device.getDeviceStatus
)

router.post(
  "/system/get-list-fee",
  fee.getListFee
)
module.exports = router;
