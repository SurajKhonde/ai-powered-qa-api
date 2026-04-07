import fs from "fs";
import path from "path";

export const getLogs = (req, res, next) => {
  try {
    const logPath = path.resolve("logs/app.log");

    if (!fs.existsSync(logPath)) {
      return res.json({ logs: [] });
    }

    const data = fs.readFileSync(logPath, "utf-8");

    const lines = data.trim().split("\n");

    const logs = lines.map((line) => {
      try {
        return JSON.parse(line);
      } catch {
        return null;
      }
    }).filter(Boolean);

    res.json({
      count: logs.length,
      logs: logs.slice(-50),
    });
  } catch (err) {
    next(err);
  }
};