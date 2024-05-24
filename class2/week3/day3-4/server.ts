import express, { json } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
const app = express();
const port = 3001;

// DO NOT FORGET THIS, THIS IS HOW STUDENTS FAIL THE COURSE!!!!!!
app.use(json());
// You only need this when you talk to a frontend!
app.use(cors());
const prisma = new PrismaClient();

// Only return public plants!
// Dont return the public field
app.get("/plants", async (req, res) => {
  const allThePlants = await prisma.plants.findMany({
    where: { public: true },
    select: {
      id: true,
      kind: true,
      age: false,
      owner: false,
      userId: false,
      public: false,
    },
  });
  res.send(allThePlants);
});

app.get("/plants/:id", async (req, res) => {
  const idOfPlant = Number(req.params.id);

  // CHECK THE URL ROUTE
  if (isNaN(idOfPlant)) {
    res.status(400).send();
    return;
  }

  // const plantToFind = await prisma.plants.findUnique({
  //   where: { id: idOfPlant},
  // });

  // TRY TO FIND THE PLANT
  const plantToFind = await prisma.plants.findFirst({
    where: { id: idOfPlant, public: true },
    select: {
      id: true,
      kind: true,
      age: true,
      owner: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });

  // CHECK IF WE FOUND THE PLANT
  if (plantToFind === null) {
    res.status(404).send();
    return;
  }

  // if (!plantToFind.public) {
  //   res.status(404).send();
  //   return;
  // }

  // RESPOND WITH THE PLANT
  res.send(plantToFind);
  return;
});

app.get("/users", async (req, res) => {
  const allTheUsers = await prisma.users.findMany({
    select: {
      id: true,
      username: true,
      password: false,
    },
  });
  res.send(allTheUsers);
});

app.post("/plants", async (req, res) => {
  const bodyFromRequest = req.body;

  // Data validation
  if (
    "kind" in bodyFromRequest &&
    bodyFromRequest.kind.length > 0 &&
    "age" in bodyFromRequest &&
    "public" in bodyFromRequest &&
    "userId" in bodyFromRequest
  ) {
    try {
      const newPlant = await prisma.plants.create({
        data: bodyFromRequest,
      });
      res.status(201).send(newPlant);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Something went wrong!" });
    }
  } else {
    res.status(400).send({
      message:
        "'kind', 'age', 'public' & 'userId' are required. And 'kind' should be longer than 0 characters!",
    });
  }
});

app.patch("/plants/:id", async (req, res) => {
  const bodyFromRequest = req.body;
  const idOfPlant = Number(req.params.id);

  // CHECK THE URL ROUTE
  if (isNaN(idOfPlant)) {
    res.status(400).send();
    return;
  }

  if ("id" in bodyFromRequest || Object.keys(bodyFromRequest).length === 0) {
    res.status(400).send();
    return;
  }
  try {
    const updatedPlant = await prisma.plants.update({
      where: {
        id: idOfPlant,
      },
      data: bodyFromRequest,
    });
    res.send(updatedPlant);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong!" });
  }
});

app.delete("/plants/:id", async (req, res) => {
  const idFromReq = Number(req.params.id);

  if (isNaN(idFromReq)) {
    res.status(400).send();
    return;
  }

  const plantToDelete = await prisma.plants.findUnique({
    where: { id: idFromReq },
  });

  if (plantToDelete === null) {
    res.status(404).send();
    return;
  }

  await prisma.plants.delete({
    where: {
      id: idFromReq,
    },
  });
  res.status(200).send({ message: "Plant was deleted!" });
});

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
