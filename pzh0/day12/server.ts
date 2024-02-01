import express, { NextFunction, Request, Response, json } from "express";
import { PrismaClient } from "prisma/prisma-client";
import { toToken, toData } from "./auth/jwt";
import { JwtPayload } from "jsonwebtoken";
import { AuthMiddleware, AuthRequest } from "./auth/middleware";
const app = express();
const port = 3001;

app.use(json());

const prisma = new PrismaClient();

app.get("/users", async (req, res) => {
  const allUsers = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      profiles: {
        select: {
          city: true,
          hobby: true,
          pets: true,
        },
      },
    },
  });
  res.send(allUsers);
});

// const sayHiMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   console.log("Hi");
//   next();
// };

app.get("/auth/test", AuthMiddleware, async (req, res) => {
  res.send({ message: "succes!" });
});

app.post("/messages", AuthMiddleware, async (req: AuthRequest, res) => {
  if (!req.userId) {
    res.status(500).send({ message: "Something went wrong!" });
    return;
  }

  try {
    const newMessage = await prisma.message.create({
      data: {
        message: req.body.message,
        userId: req.userId,
      },
    });
    res.send({ message: "New message created", result: newMessage });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong!" });
  }
});

app.patch("/profiles/:id", AuthMiddleware, async (req: AuthRequest, res) => {
  const userId = req.userId;

  if (!userId) {
    res.status(500).send({ message: "Something went wrong!" });
  }

  const requestBody = req.body;
  const profileId = parseInt(req.params.id);
  const thisProfile = await prisma.profile.findUnique({
    where: { id: profileId },
  });

  if (!thisProfile) {
    res.status(400).send({ message: "Profile with that Id not found!" });
    return;
  }

  // Authorization!
  if (thisProfile.userId !== userId) {
    res.status(401).send({ message: "You are not the owner of this profile!" });
    return;
  }

  try {
    const newProfile = await prisma.profile.update({
      where: {
        id: profileId,
      },
      data: {
        city: requestBody.city || thisProfile.city,
        hobby: requestBody.hobby || thisProfile.hobby,
        pets: requestBody.pet || thisProfile.pets,
      },
    });
    res
      .status(200)
      .send({ message: "Profile updated sucesfully!", profile: newProfile });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong" });
  }
});

app.post("/auth/login", async (req, res) => {
  const requestBody = req.body;
  if ("username" in requestBody && "password" in requestBody) {
    const userToCheck = await prisma.user.findUnique({
      where: {
        username: requestBody.username,
      },
    });
    if (!userToCheck) {
      res.status(400).send({ message: "Username or password not found" });
      return;
    }
    if (userToCheck.password === requestBody.password) {
      // succes!
      const token = toToken({ userId: userToCheck.id });
      res.status(200).send({ message: "Succes!", token: token });
      return;
    }
    res.status(400).send({ message: "Username or password not found" });
    return;
  }
  res.status(400).send({ message: "'username' and 'password' are required!" });
});

app.post("/auth/register", async (req, res) => {
  const requestBody = req.body;
  if ("username" in requestBody && "password" in requestBody) {
    try {
      const newUser = await prisma.user.create({ data: requestBody });
      //   const newProfile = await prisma.profile.create({
      //     data: {
      //       city: "",
      //       hobby: "",
      //       pets: false,
      //       userId: newUser.id,
      //     },
      //   });

      res.status(201).send({ message: "Registration succesful!" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Something went wrong!" });
    }
  }
  res.status(400).send({ message: "'username' and 'password' are required!" });
});

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
