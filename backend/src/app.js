import express from 'express';
import appRouter from './index.js'; 
import cors from "cors"

const app = express();

app.use(express.json()); 
app.use(cors())
app.use('/', appRouter); 

const PORT = process.env.BACKEND_PORT || 5000;

console.log("Backend is running on port:", PORT);
app.listen(PORT);
