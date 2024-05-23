import plantsData from "./seeddata/plants.json";
import usersData from "./seeddata/users.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  // Seed every user
  console.log("Seeding Users...");
  for (let i = 0; i < usersData.length; i++) {
    const thisUser = usersData[i];
    await prisma.users.create({
      data: thisUser,
    });
  }

  // Seed every plant
  console.log("Seeding Plants...");
  for (let i = 0; i < plantsData.length; i++) {
    const thisPlant = plantsData[i];
    await prisma.plants.create({
      data: thisPlant,
    });
  }

  console.log("Done!");
};

seed();
