import express from "express";
import { PrismaClient } from "@prisma/client";
import { json } from "express";
import { toToken } from "./auth/jwt";
import cors from "cors";
// Create an express app
const app = express();

// Tell the app to allow json in the request body
app.use(json());
app.use(cors());

const port = 3001;
// Create a prisma client
const prisma = new PrismaClient();

app.post("/register", async (req, res) => {
  const requestBody = req.body;
  if ("username" in requestBody && "password" in requestBody) {
    try {
      await prisma.owner.create({
        data: requestBody,
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
      const userToLogin = await prisma.owner.findFirst({
        where: {
          username: requestBody.username,
        },
      });

      if (userToLogin && userToLogin.password === requestBody.password) {
        const token = toToken({ userId: userToLogin.id });
        res.status(200).send({ token: token });

        return;
      } else {
        // If we didn't find the user or the password doesn't match, send back an error message
        res.status(400).send({ message: "Login failed" });
      }
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

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
