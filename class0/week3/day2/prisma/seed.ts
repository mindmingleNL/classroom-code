import candyData from "./data/candies.json";
import userData from "./data/users.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < candyData.length; i += 1) {
    await prisma.candy.create({ data: candyData[i] });
  }

  for (let i = 0; i < userData.length; i += 1) {
    await prisma.user.create({ data: userData[i] });
  }
};

seed();
