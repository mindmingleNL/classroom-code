import kidsData from "./data/kids.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  // Seed every student
  for (let i = 0; i < kidsData.length; i++) {
    const thisKid = kidsData[i];
    await prisma.kids.create({
      data: thisKid,
    });
  }
};

seed();
