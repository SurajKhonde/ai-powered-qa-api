export const logAsk = ({ userId, question, latencyMs, confidence }) => {
  console.log(
    JSON.stringify({
      userId,
      question: question.slice(0, 50),
      latencyMs,
      confidence,
      timestamp: new Date().toISOString(),
    })
  );
};