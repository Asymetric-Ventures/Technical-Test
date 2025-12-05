import { Router } from 'express';
import articleRoute from './routes/articlesRoute.js';

const app = Router();
app.use('/articles', articleRoute);

export default app;
