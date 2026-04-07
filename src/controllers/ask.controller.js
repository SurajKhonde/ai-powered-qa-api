import { logAsk } from "../utils/askLogger.js";
import {askQuestion} from "../services/ask.service.js"
import { validateLLMResponse } from "../utils/validateResponse.js";
export const askController = async (req, res, next) => {
  const start = Date.now();
  try {
    const { question } = req.body;

    const raw = await askQuestion(question);
    const parsed = JSON.parse(raw);
    const validated = validateLLMResponse(parsed);

    const latency = Date.now() - start;

    logAsk({
      userId: req.user.id,
      question,
      latencyMs: latency,
      confidence: validated.confidence,
    });

    res.json(validated);
  } catch (err) {
    next(err);
  }
};