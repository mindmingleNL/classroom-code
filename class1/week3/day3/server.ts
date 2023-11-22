import express from "express";
import { PrismaClient } from "@prisma/client";
import { json } from "express";

const app = express();
const port = 3001;

app.use(json());

const prisma = new PrismaClient();

app.get("/owners", async (req, res) => {
  const allOwners = await prisma.owner.findMany();
  res.send(allOwners);
});

app.get("/pets", async (req, res) => {
  const allPets = await prisma.pet.findMany({
    select: {
      id: true,
      name: true,
      kind: true,
      ownerId: true,
    },
  });
  res.send(allPets);
});

app.get("/pets/:id", async (req, res) => {
  const idFromParams = req.params.id;
  const idAsNumber = Number(idFromParams);
  if (isNaN(idAsNumber)) {
    res.status(400).send({ message: "id should be a number" });
    return; //empty return means that we are done
  }
  const onePet = await prisma.pet.findUnique({
    where: { id: idAsNumber },
    include: {
      foods: true,
      owner: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!onePet) {
    res.status(404).send({ message: "Could not find that pet" });
    return;
  }

  res.send(onePet);
});

app.post("/pets", async (req, res) => {
  const requestBody = req.body;
  try {
    await prisma.pet.create({
      data: requestBody,
    });
    res.status(201).send({ message: "Pet created!" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
});

app.patch("/pets/:id", async (req, res) => {
  const idFromParams = req.params.id;
  const idAsNumber = Number(idFromParams);
  if (isNaN(idAsNumber)) {
    res.status(400).send({ message: "id should be a number" });
    return; //empty return means that we are done
  }

  const requestBody = req.body;
  try {
    await prisma.pet.update({
      where: {
        id: idAsNumber,
      },
      data: requestBody,
    });
    res.send({ message: "Pet updated!" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
});

app.delete("/pets/:id", async (req, res) => {
  const idFromParams = req.params.id;
  const idAsNumber = Number(idFromParams);
  if (isNaN(idAsNumber)) {
    res.status(400).send({ message: "id should be a number" });
    return; //empty return means that we are done
  }
  try {
    await prisma.pet.delete({
      where: {
        id: idAsNumber,
      },
    });
    res.send({ message: "Pet deleted :(" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
});
// Old code

//   const targetPet = pets.find((pet) => pet.id === idAsNumber);

//   if (targetPet === undefined) {
//     res.status(404).send({ message: "Could not find that pet" });
//     return;
//   }

//   res.send(targetPet);

//   //   res.send(pets[0]);
// });

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
