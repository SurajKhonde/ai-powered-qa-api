import rateLimit from "express-rate-limit";

export const askLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,

  keyGenerator: (req) => req.user?.id,

  standardHeaders: true,
  legacyHeaders: false,

  message: {
    message: "Too many requests, please try again later",
  },
});