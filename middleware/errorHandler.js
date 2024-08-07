// Error Handler
const {constants} = require('../utils/constants')
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.BAD_REQUEST:
      res.json({
        title: "Validation Failed BAD REQUEST",
        message: err.message,
        // stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        // stackTrace: err.stack,
      });
      case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        // stackTrace: err.stack,
      });
      case constants.FORBIDDEN:
      res.json({
        title: "Forbidden Access Denied",
        message: err.message,
        // stackTrace: err.stack,
      });
      
      case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        // stackTrace: err.stack,
      });
    default:
        console.log(err.message)
      break;
  }
};

module.exports = errorHandler;