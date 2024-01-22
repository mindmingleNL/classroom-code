import carData from "./data/cars.json";
import { PrismaClient } from "@prisma/client";
console.log(carData);

const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < carData.length; i++) {
    await prisma.car.create({ data: carData[i] });
  }
  console.log("Cars seeded");
};

seed();
