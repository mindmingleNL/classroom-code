import express from "express";

import { json } from "express";
import cors from "cors";
// Create an express app
const app = express();

// Tell the app to allow json in the request body
app.use(json());

// Tell the app to allow any request
app.use(cors());

const port = 3001;
// Create a prisma client

// Database
let people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 20 },
  { name: "Arthur", age: 30 },
  { name: "Gary", age: 28 },
  { name: "Aiden", age: 28 },
];

// Your routes here:
app.get("/", (req, res) => {
  res.send(people);
});

app.post("/", (req, res) => {
  console.log("Got a post request!");
  // console.log(req.body);
  people = [...people, req.body];
  res.send({ message: "POST RECEIVED!" });
});
app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
