import express from "express";
import { json } from "express";

const app = express();
app.use(json());

const animals = [
  {
    id: 1,
    name: "Gerrie",
    kind: "cow"
  },
  {
    id: 2,
    name: "Herman",
    kind: "pig"
  }
];

app.get("/animals", (req, res) => {
  res.send(animals);
});

/**
 * GET SINGLE ANIMAL
 */
app.get("/animals/:id", (req, res) => {
  const idFromRequest = Number(req.params.id);

  if (isNaN(idFromRequest)) {
    res.status(400).send({
      message: "The id should be a number"
    });
  } else {
    /**
     * Where you would use Prisma
     */
    const animalFromDatabase = animals.find(
      (animal) => animal.id === idFromRequest
    );
    /**
     * Stop here
     */

    if (animalFromDatabase) {
      res.send(animalFromDatabase);
    } else {
      res.status(404).send({
        message: "Animal not found"
      });
    }
  }
});

/**
 * DELETE ANIMAL
 */
app.delete("/animals/:id", (req, res) => {
  const idFromRequest = Number(req.params.id);

  if (isNaN(idFromRequest)) {
    res.status(400).send({
      message: "The id should be a number"
    });
  } else {
    /**
     * Where you would use Prisma
     */
    // DELETE ANIMAL FROM DATABASE
    /**
     * Stop here
     */

    res.send({
      message: "ANIMAL Removed"
    });
  }
});

// PATCH - Update
app.patch("/animals/:id", (req, res) => {
  const body = req.body;
  const idFromRequest = Number(req.params.id);

  if (isNaN(idFromRequest)) {
    res.status(400).send({
      message: "The id should be a number"
    });
  } else {
    /**
     * Prisma code here
     */
  }
});

// POST - Create
app.post("/animals", (req, res) => {
  const body = req.body;
  console.log(body);
  console.log("name" in body);

  if ("name" in body && "kind" in body && "age" in body) {
    // OUR BODY IS COMPLETE

    /**
     * WRITE OUR PRISMA CODE TO CREATE THAT ANIMAL
     */

    res.send({});
  } else {
    // WE ARE MISSING SOME VALUES IN THE BODY
    res.status(400).send({
      message: "We are missing something, we need a name, kind and age"
    });
  }
});

const port = 3001;

app.listen(port, () => {
  console.log(`Is running on port ${port}`);
});
