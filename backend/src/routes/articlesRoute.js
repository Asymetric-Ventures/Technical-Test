import express from 'express';
import controller from '../controllers/ArticleController.js';

const router = express.Router();

router.get('/', (req, res) => controller.getAllArticles(req, res));
router.get('/:id', (req, res) => controller.getArticleById(req, res));
router.post('/generate', (req, res) => controller.createArticle(req, res));


export default router;
