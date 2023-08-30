import express, { json } from "express";
import { PrismaClient } from "@prisma/client";
import { toToken, toData } from "./auth/jwt";
import { AuthMiddleware, AuthRequest } from "./auth/middleware";
import { z } from "zod";
import bcrypt from "bcrypt";

const app = express();
const port = 3001;
app.use(json());

const prisma = new PrismaClient();

let hash_rounds = 10;
if (process.env["HASH_ROUNDS"]) {
  hash_rounds = parseInt(process.env["HASH_ROUNDS"]);
}

app.get("/users", async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
      },
    });
    res.send(allUsers);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
});

app.post("/login", async (req, res) => {
  const requestBody = req.body;
  if ("username" in requestBody && "password" in requestBody) {
    try {
      const userToLogin = await prisma.user.findFirst({
        where: {
          username: requestBody.username,
        },
      });
      // We check if the found a user and if the password matches the one in the database
      if (
        userToLogin &&
        bcrypt.compareSync(requestBody.password, userToLogin.password)
      ) {
        // The happy path
        res.send({ token: toToken({ userId: userToLogin.id }) });
      } else {
        // The sad path
        res.status(400).send({ message: "Login failed!" });
      }
    } catch (error) {
      res.status(500).send({ message: "Something went wrong!" });
    }
  } else {
    res
      .status(400)
      .send({ message: "'Username' or 'Password' missing from body" });
  }
});

const userValidator = z
  .object({
    username: z.string().min(1),
    password: z.string().min(4),
  })
  .strict();

app.post("/register", async (req, res) => {
  const requestBody = req.body;
  const parsedBody = userValidator.safeParse(requestBody);

  if (!parsedBody.success) {
    res.status(400).send(parsedBody.error.flatten());
  } else {
    try {
      const newuser = await prisma.user.create({
        data: {
          username: parsedBody.data.username,
          password: bcrypt.hashSync(parsedBody.data.password, hash_rounds),
        },
      });

      res.status(201).send({ id: newuser.id, username: newuser.username });
    } catch (error) {
      res.status(500).send({ message: "Something went wrong!" });
    }
  }
});

app.listen(port, () => {
  console.log(process.env["HELLO"]);
  console.log(`⚡ Server listening on port: ${port}`);
});
