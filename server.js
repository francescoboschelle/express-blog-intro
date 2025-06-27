import e from "express";

const app = e();
const PORT = 3000;

const posts = [
  {
    title: "Ciambellone",
    content: "Ricetta ciambellone",
    image: `http://localhost:${PORT}/images/ciambellone.jpeg`,
    tags: ["ciambellone", "dolce", "ricetta"],
  },
  {
    title: "Cracker Barbabietola",
    content: "Ricetta cracker barbabietola",
    image: `http://localhost:${PORT}/images/cracker_barbabietola.jpeg`,
    tags: ["cracker", "barbabietola", "salato", "ricetta"],
  },
  {
    title: "Pane Fritto Dolce",
    content: "Ricetta pane fritto dolce",
    image: `http://localhost:${PORT}/images/pane_fritto_dolce.jpeg`,
    tags: ["pane", "fritto", "dolce", "ricetta"],
  },
  {
    title: "Pasta Barbabietola",
    content: "Ricetta pasta barbabietola",
    image: `http://localhost:${PORT}/images/pasta_barbabietola.jpeg`,
    tags: ["pasta", "barbabietola", "ricetta"],
  },
  {
    title: "Torta Paesana",
    content: "Ricetta torta paesana",
    image: `http://localhost:${PORT}/images/torta_paesana.jpeg`,
    tags: ["torta", "paesana", "dolce", "ricetta"],
  },
];

app.use(e.static("public"));

app.get("/", (req, res) => {
  res.type("text/plain").send("Server del mio blog");
});

app.get("/api/posts", (req, res) => {
  res.type("application/json").send(JSON.stringify(posts));
});

app.listen(PORT, () => {
  console.log("Server in ascolto su http://localhost:" + PORT);
});
