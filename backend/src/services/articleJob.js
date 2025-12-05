import ArticleRepo from '../repositories/ArticleRepo.js';

export function listArticles() {
    return ArticleRepo.getAll();
}

export function getArticle(id) {
    return ArticleRepo.getById(id);
}

export async function generateArticle(title = "New Article", content = "AI") {
    const newArticle = ArticleRepo.add({
        title,
        content,
        date: new Date().toISOString(),
        isDeleted: false
    });
    return newArticle;
}
