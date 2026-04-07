import logger from "../utils/logger.js";

export const requestLogger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;

    logger.info({
      type: "REQUEST",
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      durationMs: duration,
      userId: req.user?.id || null,
    });
  });

  next();
};