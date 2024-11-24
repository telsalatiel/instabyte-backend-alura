import express from "express";
// Importa o framework Express.js para criar a aplicação web. Ele fornece as funcionalidades básicas para criar um servidor HTTP e lidar com requisições e respostas.
import routes from "./src/routes/postsRoutes.js";

const app = express();
// Cria uma instância do Express, que será o ponto central da nossa aplicação. Essa instância será utilizada para definir as rotas e as funcionalidades do servidor.
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
  console.log("Servidor escutando...");
});
// Inicia o servidor na porta 3000. Quando o servidor estiver pronto para receber requisições, a mensagem "Servidor escutando..." será exibida no console.
