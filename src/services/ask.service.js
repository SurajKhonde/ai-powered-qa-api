import client from "../config/llm.js";
import { retrieveDocs } from "./retrieval.service.js";


export const askQuestion = async (question) => {
  const docs = await retrieveDocs(question);

  const context = docs.map(
    (d, i) => `Doc ${i + 1}: ${d.content}`
  ).join("\n");

  const prompt = `
You must answer ONLY from the given context.

Context:
${context}

Question:
${question}

Rules:
- If answer not in context, say: "I don't have enough information from the provided documents."
- Return JSON ONLY in this format:
{
  "answer": "...",
  "sources": ["doc_id"],
  "confidence": "high" | "medium" | "low"
}
`;

  const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: "You are a strict assistant." },
      { role: "user", content: prompt },
    ],
    temperature: 0,
  });

  return response.choices[0].message.content;
};