import express from "express";

import { json } from "express";
import cors from "cors";
const app = express();

app.use(json());
app.use(cors());

const port = 3001;

const allPets = [
  {
    name: "Max",
    species: "Dog",
    breed: "Labrador Retriever",
    age: 3,
    color: "Golden",
    owner: "John",
  },
  {
    name: "Whiskers",
    species: "Cat",
    breed: "Persian",
    age: 5,
    color: "White",
    owner: "Emily",
  },
  {
    name: "Buddy",
    species: "Dog",
    breed: "Golden Retriever",
    age: 2,
    color: "Golden",
    owner: "Michael",
  },
  {
    name: "Fluffy",
    species: "Rabbit",
    breed: "Lionhead",
    age: 1,
    color: "Grey",
    owner: "Sarah",
  },
  {
    name: "Mittens",
    species: "Cat",
    breed: "Maine Coon",
    age: 4,
    color: "Tabby",
    owner: "David",
  },
  {
    name: "Rocky",
    species: "Dog",
    breed: "German Shepherd",
    age: 4,
    color: "Black and Tan",
    owner: "Jessica",
  },
  {
    name: "Nibbles",
    species: "Hamster",
    breed: "Syrian",
    age: 2,
    color: "Brown",
    owner: "Alex",
  },
  {
    name: "Coco",
    species: "Dog",
    breed: "Poodle",
    age: 6,
    color: "White",
    owner: "Samantha",
  },
  {
    name: "Snowball",
    species: "Rabbit",
    breed: "Dutch",
    age: 3,
    color: "White with Black",
    owner: "Kevin",
  },
  {
    name: "Gizmo",
    species: "Guinea Pig",
    breed: "Abyssinian",
    age: 1,
    color: "Tricolor",
    owner: "Michelle",
  },
];

app.get("/pets", (req, res) => {
  res.send(allPets);
});

app.get("/pets/:name", (req, res) => {
  const nameFromReq = req.params.name;
  const specificPet = allPets.find((pet) => pet.name === nameFromReq);
  if (specificPet) {
    res.send(specificPet);
  } else {
    res.status(404).send({ message: "Pet not found" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});
