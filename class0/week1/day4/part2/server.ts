import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.status(418).send();
});

app.listen(3001);
