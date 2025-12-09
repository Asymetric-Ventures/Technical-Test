import axios from "axios";

const backendIP = process.env.IP || 'localhost';
const backendPort = process.env.BACKEND_PORT || 5000;

console.log("Backend IP:", backendIP);
console.log("Backend Port:", backendPort);

export const api = axios.create({
  baseURL: `http://${backendIP}:${backendPort}`,

});

export const getArticles= ()=>api.get("/articles");

export const getArticleById= (id)=>api.get(`/articles/${id}`)

export const createArticles= ()=>api.post("/articles")