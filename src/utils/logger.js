import winston from "winston";
import path from "path";

const logDir = "logs";

const logger = winston.createLogger({
  level: "info",

  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),

  transports: [
    // Console (dev)
    // new winston.transports.Console(),

    //
    new winston.transports.File({
      filename: path.join(logDir, "app.log"),
    }),

    // Only errors
    new winston.transports.File({
      filename: path.join(logDir, "error.log"),
      level: "error",
    }),
  ],
});

export default logger;