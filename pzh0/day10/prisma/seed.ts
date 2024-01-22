import petData from "./data/pets.json";
import kindData from "./data/kinds.json";
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

  console.log("Seeding done");
};

seed();
