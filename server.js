import e from "express";

const app = e();
const PORT = 3000;

app.get("/", (req, res) => {
  res.type("text/plain").send("Server del mio blog");
});

app.listen(PORT, () => {
  console.log("Server in ascolto su http://localhost:" + PORT);
});
