import express from "express";
import animals from "./animals.json";
import cors from "cors";
const app = express();

app.use(cors());
const port = 3001;

app.get("/animals", (req, res) => {
  // Getting data from Prisma we can 'trust'
  // prisma.animals.findMany()
  res.send(animals);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
