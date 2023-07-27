import userData from "./data/users.json";
import postData from "./data/posts.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  console.log("seeding users");
  for (let i = 0; i < userData.length; i += 1) {
    await prisma.user.create({
      data: userData[i],
    });
  }
  console.log("seeding posts");
  for (let i = 0; i < postData.length; i += 1) {
    await prisma.post.create({
      data: postData[i],
    });
  }
};

seed();
