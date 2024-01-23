import petData from "./data/pets.json";
import kindData from "./data/kinds.json";
import ownerData from "./data/owners.json";
import foodData from "./data/foods.json";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  console.log("Seeding kinds");
  for (let i = 0; i < kindData.length; i++) {
    await prisma.kind.create({ data: kindData[i] });
  }

  console.log("Seeding pets");
  for (let i = 0; i < petData.length; i++) {
    await prisma.pet.create({ data: petData[i] });
  }

  console.log("Seeding owners");
  for (let i = 0; i < ownerData.length; i++) {
    await prisma.owner.create({ data: ownerData[i] });
  }

  console.log("Seeding foods");
  for (let i = 0; i < foodData.length; i++) {
    await prisma.food.create({ data: foodData[i] });
  }

  console.log("Seeding done");
};

seed();
