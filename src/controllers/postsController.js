import {getTodosPosts, criarPost} from "../models/postsModel.js";
import fs from "fs";

export async function listarPosts(req, res) {
  // Define uma rota GET para a URL "/posts". Quando uma requisição GET for feita para essa URL, esta função será executada.
  const posts = await getTodosPosts();
  // Chama a função `getTodosPosts` para obter todos os posts do banco de dados e armazena o resultado na variável `posts`.
  res.status(200).json(posts);
  // Envia uma resposta HTTP com o código de status 200 (OK) e o array de posts no formato JSON. O método `json()` converte o objeto JavaScript em uma string JSON.
}

export async function postarNovoPost(req, res) {
  // Obtém os dados do novo post do corpo da requisição.
  const novoPost = req.body;

  try {
    // Cria um novo post no banco de dados.
    const postCriado = await criarPost(novoPost);

    // Retorna o post criado como resposta JSON com status 200 (sucesso).
    res.status(200).json(postCriado);
  } catch (erro) {
    // Caso ocorra um erro, registra o erro no console e retorna uma resposta com status 500 (erro interno do servidor).
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}

export async function uploadImagem(req, res) {
  // Cria um objeto com os dados do novo post, incluindo o nome original da imagem.
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: ""
  };

  try {
    // Cria um novo post no banco de dados.
    const postCriado = await criarPost(novoPost);

    // Renomeia o arquivo da imagem para incluir o ID do post criado.
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    fs.renameSync(req.file.path, imagemAtualizada);

    // Retorna o post criado como resposta JSON com status 200 (sucesso).
    res.status(200).json(postCriado);
  } catch (erro) {
    // Caso ocorra um erro, registra o erro no console e retorna uma resposta com status 500 (erro interno do servidor).
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}