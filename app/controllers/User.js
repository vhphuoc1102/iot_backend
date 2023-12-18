const { validationResult, check } = require("express-validator");
var md5 = require("md5");
const Constants = require("../common/Constants");
const jwtHelper = require("../helpers/jwt_helper");
const UserDB = require("../database/users");
const { use } = require("../routes");

module.exports = {
  
  signup: async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let error = errors.errors;
        return res.status(200).send({ status: 500, error });
      }
      var name = req.body.name;
      var email = req.body.email;
      var password = req.body.password;
      
      checkExistEmail = await UserDB.findOne({ email: email });
      if (checkExistEmail) {
        return res
          .status(200)
          .send({ status: 500, msg: "Email already exists " });
      }
      data = {
        name: name,
        email: email,
        password: md5(password),

      };
      const result = await new UserDB(data).save();

      if (result.status == 500) {
        return res.status(200).send({ result });
      } else {
        return res.status(200).send({ status: 200, result });
      }
    } catch (error) {
      return res.status(200).send({ status: 200, error });
    }
  },
  login: async (req, res, next) => {
    try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let error = errors.errors;
      return res.status(200).send({ status: 500, error });
    }
    var email = req.body.email;
    var password = md5(req.body.password);

    result = await UserDB.findOne({ email: email, password: password });
    if (result != null) {
      let accessToken = await jwtHelper.generateToken(
        result._id,
        Constants.ACCESS_TOKEN_SECRET,
        Constants.ACCESS_TOKEN_LIFE_RESET_PASSWORD
      );
      let refreshToken = await jwtHelper.generateToken(
        result._id,
        Constants.REFRESH_TOKEN_SECRET,
        Constants.REFRESH_TOKEN_LIFE
      );
      return res.status(200).send({
        status: 200,
        msg: "login success",
        user: result,
        access_token: accessToken,
      });
    } else {
      return res.status(200).send({ status: 500, msg: "Login fail" });
    }
    } catch (error) {
      return res.status(200).send({ status: 500, error });
    }
  },
};
