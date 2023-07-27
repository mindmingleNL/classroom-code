import express, { json } from "express";
import { PrismaClient } from "@prisma/client";
import { toToken, toData } from "./auth/jwt";
import { AuthMiddleware } from "./auth/middleware";
const app = express();
const port = 3001;
app.use(json());

const prisma = new PrismaClient();

app.get("/users", AuthMiddleware, async (req, res) => {
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

app.get("/post", async (req, res) => {
  try {
    const allPosts = await prisma.post.findMany();
    res.send(allPosts);
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
      if (userToLogin && userToLogin.password === requestBody.password) {
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

app.get("/whoami", AuthMiddleware, async (req, res) => {
  res.send({ message: "You are logged in!" });
});

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
