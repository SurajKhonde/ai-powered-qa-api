import logger from "../utils/logger.js";

export const errorHandler = (err, req, res, next) => {
  logger.error({
    type: "ERROR",
    message: err.message,
    url: req.originalUrl,
    method: req.method,
    userId: req.user?.id || null,
  });

  res.status(err.status || 500).json({
    message: err.message || "Something went wrong",
  });
};