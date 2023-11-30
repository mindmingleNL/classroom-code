import express from "express";
import { PrismaClient } from "@prisma/client";
import { json } from "express";
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

// Create an express app
const app = express();

// Tell the app to allow json in the request body
app.use(json());

const port = 3001;
// Create a prisma client
const prisma = new PrismaClient();

// Your routes here:
app.get("/kids", async (req, res) => {
  const allTheKids = await prisma.kids.findMany();
  res.send(allTheKids);
});

app.get("/kids/:id", async (req, res) => {
  const idFromUrl = parseInt(req.params.id);
  const allTheKids = await prisma.kids.findUnique({
    where: {
      id: idFromUrl,
    },
  });
  if (!allTheKids) {
    res.status(404).send({ message: "Kid not found" });
  }
  res.send(allTheKids);
});

app.post("/kids", async (req, res) => {
  const requestBody = req.body;
  try {
    const newKid = await prisma.kids.create({
      data: requestBody,
    });
    res.send(newKid);
  } catch (error) {
    if (error instanceof PrismaClientValidationError) {
      res.status(400).send({
        message: "Something went wrong",
        reason: "The data was not valid",
      });
    } else {
      res.status(500).send({ message: "Something went wrong" });
    }
  }
});

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
