import Doc from "../models/doc.model.js";

export const retrieveDocs = async (question) => {
  const words = question.toLowerCase().split(" ");

  const docs = await Doc.find();

  const scored = docs.map((doc) => {
    let score = 0;

    for (let word of words) {
      if (
        doc.content.toLowerCase().includes(word) ||
        doc.title.toLowerCase().includes(word) ||
        doc.tags.includes(word)
      ) {
        score++;
      }
    }

    return { doc, score };
  });

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, 3).map((item) => item.doc);
};