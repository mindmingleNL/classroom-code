import animals from "./../animals.json";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < animals.length; i += 1) {
    const currentAnimal = animals[i];
    // Prisma query to create the animal
    await prisma.animal.create({
      data: currentAnimal
    });
  }
};

seed();
