import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
  app.use(express.json());
  // Habilita o middleware `express.json()`. Esse middleware permite que a aplicação entenda as requisições HTTP que possuem um corpo no formato JSON. É essencial para lidar com dados enviados em formato JSON, como os dados de um formulário.
  app.get("/posts", listarPosts);
};

export default routes;

