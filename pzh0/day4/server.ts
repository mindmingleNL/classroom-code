import express from "express";

const app = express();

const port = 3000;

app.get("/hoi", (req, res) => {
  const namen = ["Danny", "Max", "Adil", "Tijmen", "Constantijn"];
  const keuze = namen[Math.round(Math.random() * namen.length)];
  res.send(`<body><h1>Hoi</h1><p>Welkom op mijn website ${keuze}</p></body>`);
});

app.get("/", (req, res) => {
  res.send("Hai!");
});

app.get("/students", (req, res) => {
  // res.send(["Danny", "Max", "Adil", "Tijmen", "Constantijn"]);

  res.send({ age: 12 });
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
