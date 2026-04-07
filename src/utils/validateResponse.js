import { z } from "zod";

const schema = z.object({
  answer: z.string(),
  sources: z.array(z.string()),
  confidence: z.enum(["high", "medium", "low"]),
});

export const validateLLMResponse = (data) => {
  return schema.parse(data);
};