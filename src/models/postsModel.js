import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
// Importa a função `conectarAoBanco` do arquivo `dbConfig.js`. Essa função é responsável por estabelecer a conexão com o banco de dados, utilizando a string de conexão fornecida.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Cria uma conexão com o banco de dados. A string de conexão é obtida da variável de ambiente `STRING_CONEXAO`, que geralmente contém informações como o nome do banco de dados, usuário e senha. O resultado da conexão é armazenado na variável `conexao`.

export async function getTodosPosts() {
  // Função assíncrona para obter todos os posts do banco de dados. A palavra-chave `async` indica que a função pode realizar operações assíncronas, como consultas ao banco de dados.
  const db = conexao.db("imersao-instabyte");
  // Obtém o banco de dados com o nome "imersao-instabytes" a partir da conexão estabelecida.
  const colecao = db.collection("posts");
  // Obtém a coleção "posts" dentro do banco de dados. Uma coleção é similar a uma tabela em um banco de dados relacional, armazenando os documentos (registros).
  return colecao.find().toArray();
  // Executa uma consulta para encontrar todos os documentos na coleção "posts" e retorna os resultados como um array de objetos. O método `toArray()` converte o cursor de resultados em um array.
};

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-instabyte");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-instabyte");
  const colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}
