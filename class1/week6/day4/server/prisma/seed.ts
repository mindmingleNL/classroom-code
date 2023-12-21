import ownerData from "./data/owners.json";
import petData from "./data/pets.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  // Seed every student
  for (let i = 0; i < ownerData.length; i++) {
    const thisOwner = ownerData[i];
    await prisma.owner.create({
      data: thisOwner,
    });
  }

  for (let i = 0; i < petData.length; i++) {
    const thisPet = petData[i];
    await prisma.pet.create({
      data: thisPet,
    });
  }
};

seed();
