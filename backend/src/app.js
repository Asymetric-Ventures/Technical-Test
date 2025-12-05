import express from 'express';
import appRouter from './index.js'; 

const app = express();

app.use(express.json()); 
app.use('/', appRouter); 

const PORT = process.env.PORT || 3000;
app.listen(PORT);
