import logger from "./logger.js";

export const logAsk = ({ userId, question, latencyMs, confidence }) => {
  logger.info({
    type: "ASK",
    userId,
    question: question.slice(0, 100),
    latencyMs,
    confidence,
  });
};