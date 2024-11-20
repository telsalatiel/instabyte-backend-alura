import express from "express";

const posts = [
  {
    descricao: "Uma foto teste",
    imagem: "https://placecaats.com/millie/300/150",
    id: 1
  },
  {
    descricao: "Paisagem deslumbrante",
    imagem: "https://placecaats.com/nature/800/600",
    id: 2
  },
  {
    descricao: "Cachorro fofo",
    imagem: "https://placecaats.com/animals/400/300",
    id: 3
  },
  {
    descricao: "Comida deliciosa",
    imagem: "https://placecaats.com/food/600/400",
    id: 4
  },
  { 
    descricao: "Cidade vibrante",
    imagem: "https://placecaats.com/city/1200/800",
    id: 5
  },
  {
    descricao: "Gráfico interessante",
    imagem: "https://placecaats.com/data/500/400",
    id: 6
  }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});


app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
};

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});

app.get('/livro', (req, res) => {
  const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954
  };

  res.status(200).json(livro);
});
