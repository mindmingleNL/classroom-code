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
 * TO DO Complete our API
 * - [X] POST   - Create a new animal
 * - [X] PATCH  - Update an animal
 * - [X] DELETE - Delete an animal
 */

import express from "express";

/** 👇 We need this to get the JSON body from a request */
import { json } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

/** 👇 We need this to get the JSON body from a request */
app.use(json());

const port = 3001;

/**
 * Below here we will define our endpoints.
 */

/**
 * GET - Get all animals
 */
app.get("/animals", async (req, res) => {
  /** We want to get all the data from our db */
  const animals = await prisma.animal.findMany();
  res.send(animals);
});

/**
 * GET - Get specific animal
 */
app.get("/animals/:id", async (req, res) => {
  /** We want to get a specific animal from the db */
  const animalId = parseInt(req.params.id);

  if (isNaN(animalId)) {
    // animalId in URL is not valid!
    res.status(400).send({
      message: "Wrong request bucko! Send me a number as an id"
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
 * POST - Create an animal
 */
app.post("/animals", async (req, res) => {
  const requestBody = req.body;

  /**
   * Check if the request body is complete
   */
  if (
    "name" in requestBody &&
    "kind" in requestBody &&
    "farmId" in requestBody
  ) {
    /** Wrap our await call in a try / catch for safety */
    try {
      /** Create the animal in the database */
      const createdAnimal = await prisma.animal.create({
        data: requestBody
      });

      /** Respond with the created animal */
      res.send(createdAnimal);
    } catch (err) {
      console.log("Something went wrong.");
      /** Respond with an error if something went wrong */
      res.status(500).send("Something went wrong.");
    }
  } else {
    /** Respond with a 400 error if there was a property missing */
    res.status(400).send("Make sure this has a name, kind and a farmId");
  }
});

/**
 * PATCH - Update an animal
 */
app.patch("/animals/:id", async (req, res) => {
  /** We want to get a specific animal from the db */
  const animalId = parseInt(req.params.id);
  const requestBody = req.body;

  if (isNaN(animalId)) {
    // animalId in URL is not valid!
    res.status(400).send({
      message: "Wrong request bucko! Send me a number as an id"
    });
  } else {
    // Run our PATCH for the database
    try {
      const updatedAnimal = await prisma.animal.update({
        where: {
          id: animalId
        },
        data: requestBody
      });

      res.send(updatedAnimal);
    } catch (err) {
      console.log("Something went wrong.");
      /** Respond with an error if something went wrong */
      res.status(500).send("Something went wrong.");
    }
  }
});

/**
 * DELETE - Delete a specific animal
 */
app.delete("/animals/:id", async (req, res) => {
  const animalId = parseInt(req.params.id);

  if (isNaN(animalId)) {
    // animalId in URL is not valid!
    res.status(400).send({
      message: "Wrong request bucko! Send me a number as an id"
    });
  } else {
    try {
      // Do our database query
      const deletedAnimal = await prisma.animal.delete({
        where: {
          id: animalId
        }
      });

      res.send({
        deletedAnimal: deletedAnimal,
        message: "Animal Deleted 😭"
      });
    } catch (error) {
      console.log("Something went wrong.");
      /** Respond with an error if something went wrong */
      res.status(500).send("Something went wrong.");
    }
  }
});

/**
 * Start the server! 🚀
 */
app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});
