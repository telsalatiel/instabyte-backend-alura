import getTodosPosts from "../models/postsModel.js"

export async function listarPosts(req, res) {
  // Define uma rota GET para a URL "/posts". Quando uma requisição GET for feita para essa URL, esta função será executada.
  const posts = await getTodosPosts();
  // Chama a função `getTodosPosts` para obter todos os posts do banco de dados e armazena o resultado na variável `posts`.
  res.status(200).json(posts);
  // Envia uma resposta HTTP com o código de status 200 (OK) e o array de posts no formato JSON. O método `json()` converte o objeto JavaScript em uma string JSON.
}