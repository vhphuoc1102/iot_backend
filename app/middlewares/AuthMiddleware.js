const jwtHelper = require("../helpers/jwt_helper");
const UserDB = require("../database/users");
// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const Constants = require("../common/Constants");

module.exports = {
  classname: "AuthMiddleware",
  isAuth: async (req, res, next) => {
    const tokenFromClient =
      req.body.token || req.query.token || req.headers["x-access-token"];

    if (tokenFromClient) {
      try {
        // Thực hiện giải mã token xem có hợp lệ hay không?
        const decoded = await jwtHelper.verifyToken(
          tokenFromClient,
          Constants.ACCESS_TOKEN_SECRET
        );

        let user_id = decoded.data;

        var getInfoUser = await UserDB.findById(user_id);

        if (!getInfoUser) {
          return res.status(200).send({
            status: 403,
            message: "You need login",
          });
        }
        req.jwtDecoded = decoded.data;
        next();
      } catch (error) {
        return res.status(200).json({
          status: 403,
          message: "Unauthorized.",
        });
      }
    } else {
      // Không tìm thấy token trong request
      return res.status(200).send({
        status: 403,
        message: "No token provided.",
      });
    }
  },
};
