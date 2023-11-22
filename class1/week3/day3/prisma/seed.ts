import petData from "./data/pets.json";
import ownerData from "./data/owners.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  // Seed every owner
  for (let i = 0; i < ownerData.length; i++) {
    const thisOwner = ownerData[i];
    await prisma.owner.create({
      data: thisOwner,
    });
  }

  // Seed every pet
  for (let i = 0; i < petData.length; i++) {
    const thisPet = petData[i];
    await prisma.pet.create({
      data: thisPet,
    });
  }
};

seed();
