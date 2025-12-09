import { pipeline } from '@xenova/transformers';

export async function generateArticleAi() {
const generator = await pipeline(
  "text-generation",
  "Xenova/pythia-160m"
);


const prompt = `
Write a random article as a JSON object with these keys:
id (integer), title (string), content (string), date (ISO string).
Example:
{
  "id": 123,
  "title": "Sample",
  "content": "Some text",
  "date": "2025-12-08T22:00:00Z"
}
Your output:
`;

  const output = await generator(prompt, { max_new_tokens: 128 });

  const text = output[0].generated_text;
    console.log("JSON match from model output:", text);


  const jsonMatch = text.match(/\{[\s\S]*\}/);
    console.log("JSON match from model output:", jsonMatch);

  if (!jsonMatch) {
    throw new Error("Model did not return valid JSON.");
  }

  const article = JSON.parse(jsonMatch[0]);

  if (!article.id) {
    article.id = Math.floor(Math.random() * 1000000);
  }

  if (!article.date) {
    article.date = new Date().toISOString();
  }

  return article;
}