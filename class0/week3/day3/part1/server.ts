/**
 * ⚔️ Battle Plan
 *
 * C    Create  POST
 * R    Read    GET
 * U    Update  PATCH
 * D    Delete  DELETE
 *
 * TO DO Server
 * - [X] Initialise Express
 * - [X] Start our Server
 *
 * TO DO Animals
 * - [X] GET    Read all the animals
 * - [X] GET    Read a specific animal
 *
 */

import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
const port = 3001;

/**
 * Create some functionality for our server
 * to receive a request to GET all the animals
 *
 * We do that by creating an 'endpoint'
 */

app.get("/animals", async (req, res) => {
  /** We want to get all the data from our db */
  const animals = await prisma.animal.findMany();
  res.send(animals);
});

/** Endpoint for GET a specific animal */
/** We need the ID of the animal want to return */
app.get("/animals/:id", async (req, res) => {
  /** We want to get a specific animal from the db */
  const animalId = parseInt(req.params.id);

  if (isNaN(animalId)) {
    // animalId in URL is not valid!
    res.status(400).send({
      message: "Wrong request idiot! Send me a number as an id"
    });
  } else {
    // It is valid, hooray!
    // Find the animal in the database with prisma
    const animalFromDatabase = await prisma.animal.findUnique({
      where: {
        id: animalId
      }
    });

    if (animalFromDatabase === null) {
      res.status(404).send(`Can't find animal with id ${animalId}`);
    } else {
      res.send(animalFromDatabase);
    }
  }
});

/**
 * THIS STARTS THE SERVER
 */
app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});
