import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Article from '../models/Article.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_PATH = path.join(__dirname, '../data/articles.json');


class ArticleRepository {

    getAll() {
        const data = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
        return data.map(a => new Article(a));
    }

    getById(id) {
        const data = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
        const item = data.find(a => a.id === id);
        return item ? new Article(item) : null;
    }

    add(article) {
        const data = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
        const newArticle = new Article({
            id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
            ...article
        });
        data.push(newArticle);
        fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
        return newArticle;
    }
}

export default new ArticleRepository();
