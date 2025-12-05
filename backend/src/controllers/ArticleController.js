import { listArticles, getArticle, generateArticle } from '../services/articleJob.js';

class ArticleController {

    getAllArticles(req, res) {
        try {
            const articles = listArticles();
            res.json(articles);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error listing articles' });
        }
    }

    getArticleById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const article = getArticle(id);
            if (!article) return res.status(404).json({ error: 'Article not found' });
            res.json(article);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error retrieving article' });
        }
    }

    async createArticle(req, res) {
        try {
            const { title, content } = req.body || {};
            const article = await generateArticle(
                title || `Article ${new Date().toISOString()}`,
                content || "content"
            );
            res.status(201).json(article);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error generating article' });
        }
    }
}

export default new ArticleController();
