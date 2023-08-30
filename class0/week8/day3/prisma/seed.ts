import { PrismaClient } from "@prisma/client";
import users from "./data/users.json";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < users.length; i++) {
    await prisma.user.create({
      data: {
        username: users[i].username,
        password: bcrypt.hashSync(users[i].password, 10),
      },
    });
  }
};

seed();
