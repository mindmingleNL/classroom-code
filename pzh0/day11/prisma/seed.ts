import animals from "./data/animals.json";
import farms from "./data/farms.json";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  /** Seed the Farms */
  for (let i = 0; i < farms.length; i++) {
    const currentFarm = farms[i];

    await prisma.farm.create({
      data: currentFarm
    });
  }

  /** Seed the Animals */
  for (let i = 0; i < animals.length; i++) {
    const currentAnimal = animals[i];

    await prisma.animal.create({
      data: currentAnimal
    });
  }
};

seed();
