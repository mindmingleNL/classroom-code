import UserData from "./data/users.json";
import ProfileData from "./data/profiles.json";
import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < UserData.length; i++) {
    await prisma.user.create({ data: UserData[i] });
  }

  for (let i = 0; i < ProfileData.length; i++) {
    await prisma.profile.create({
      data: ProfileData[i],
    });
  }
};

seed();
