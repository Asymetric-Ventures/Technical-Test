import ArticleRepo from "../repositories/ArticleRepo.js";
import { generateArticleAi } from "./aiClient.js";
import cron from "node-cron";

export function listArticles() {
  return ArticleRepo.getAll();
}

export function getArticle(id) {
  return ArticleRepo.getById(id);
}

export async function generateArticle() {
  const article = await generateArticleAi();
  const newArticle = ArticleRepo.add({
    id: article.id,
    title: article.title,
    content: article.content,
    date: article.date,
  });

  return newArticle;
}

cron.schedule("0 14 * * *",()=>{
   generateArticle();
})
