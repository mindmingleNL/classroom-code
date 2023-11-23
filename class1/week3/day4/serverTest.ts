import express, { NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { toToken } from "./auth/jwt";
import { authMiddleware, AuthRequest } from "./auth/middleware";

const prisma = new PrismaClient();
const app = express();
const port = 3001;

app.use(express.json());

app.post("/register", async (req, res) => {
  const requestBody = req.body;
  if (
    "age" in requestBody &&
    "username" in requestBody &&
    "password" in requestBody
  ) {
    try {
      await prisma.user.create({
        data: requestBody
      });
      res.status(201).send({ message: "User created!" });
    } catch (error) {
      // If we get an error, send back HTTP 500 (Server Error)
      res.status(500).send({ message: "Something went wrong!" });
    }
  } else {
    // If we are missing fields, send back a HTTP 400
    res
      .status(400)
      .send({ message: "'username', 'password' and 'age' are required!" });
  }
});

app.post("/login", async (req, res) => {
  const requestBody = req.body;
  if ("username" in requestBody && "password" in requestBody) {
    try {
      // First find the user
      const userToLogin = await prisma.user.findUnique({
        where: {
          username: requestBody.username
        }
      });
      if (userToLogin && userToLogin.password === requestBody.password) {
        const token = toToken({ userId: userToLogin.id });
        res.status(200).send({ token: token });
        return;
      }
      // If we didn't find the user or the password doesn't match, send back an error message
      res.status(400).send({ message: "Login failed" });
    } catch (error) {
      // If we get an error, send back HTTP 500 (Server Error)
      res.status(500).send({ message: "Something went wrong!" });
    }
  } else {
    // If we are missing fields, send back a HTTP 400
    res
      .status(400)
      .send({ message: "'username' and 'password' are required!" });
  }
});

app.post("/tweet", async (req, res) => {
  const { text, userId } = req.body;

  try {
    const newTweet = await prisma.post.create({
      data: {
        text: text,
        userId: userId
      }
    });

    res.status(201).json(newTweet);
  } catch (error) {
    console.log(error);
    // In a real-world scenario, you should handle specific errors and return appropriate status codes.
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/users", authMiddleware, async (req: AuthRequest, res) => {
  // Assuming verification was successful, retrieve all users from the database.
  // Select only specific fields (id, username, age) to send in the response.
  const allUsers = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      age: true
    }
  });

  // Send the list of users as the response.
  res.send(allUsers);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
