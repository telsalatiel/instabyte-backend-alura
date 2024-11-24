import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin:"http://localhost:8000",
  optionsSuccessStatus: 200
}

// Configura o armazenamento dos arquivos enviados.
// Neste caso, os arquivos serão salvos na pasta 'uploads'
// com o nome original.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); 1 
  }
})

// Cria um middleware para lidar com uploads de arquivos.
// O parâmetro 'dest' define o diretório de destino dos arquivos.
// O parâmetro 'storage' configura a estratégia de armazenamento.
const upload = multer({ dest: "./uploads" , storage})
//linux ou mac:
//const upload = multer({ dest: "./uploads"})

// Função que define as rotas da aplicação.
// Recebe como parâmetro a instância do Express.
const routes = (app) => {
  app.use(cors(cors))
  // Habilita o middleware `express.json()`.
  // Esse middleware permite que a aplicação entenda requisições com corpo JSON.
  app.use(express.json());

  // Rota para buscar todos os posts.
  // Chama a função `listarPosts` do controlador.
  app.get("/posts", listarPosts);

  // Rota para criar um novo post.
  // Chama a função `postarNovoPost` do controlador.
  app.post("/posts", postarNovoPost);

  // Rota para fazer upload de uma imagem.
  // O middleware `upload.single('imagem')` trata o arquivo enviado.
  // Chama a função `uploadImagem` do controlador.
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost)
};

export default routes;