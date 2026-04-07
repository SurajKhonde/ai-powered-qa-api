
import rateLimit, { ipKeyGenerator } from "express-rate-limit";

const askLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  keyGenerator: (req) => ipKeyGenerator(req),
});

export default askLimiter;