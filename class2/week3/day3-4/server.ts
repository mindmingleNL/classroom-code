import express, { json } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import { toData, toToken } from "./auth/jwt";
import { AuthMiddleware, AuthRequest } from "./auth/middleware";
import { compareSync, hashSync } from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// DO NOT FORGET THIS, THIS IS HOW STUDENTS FAIL THE COURSE!!!!!!
app.use(json());
// You only need this when you talk to a frontend!
app.use(cors());
const prisma = new PrismaClient();

app.get("/greeting", (req, res) => {
  const messageFromEnv = process.env.MESSAGE;
  res.send(messageFromEnv);
});

// PLANTS API //

// Only return public plants!
// Dont return the public field
app.get("/plants", async (req, res) => {
  const allThePlants = await prisma.plants.findMany({
    where: { public: true },
    select: {
      id: true,
      kind: true,
      age: false,
      owner: false,
      userId: false,
      public: false,
    },
  });
  res.send(allThePlants);
});

app.get("/plants/:id", async (req, res) => {
  const idOfPlant = Number(req.params.id);

  // CHECK THE URL ROUTE
  if (isNaN(idOfPlant)) {
    res.status(400).send();
    return;
  }

  // const plantToFind = await prisma.plants.findUnique({
  //   where: { id: idOfPlant},
  // });

  // TRY TO FIND THE PLANT
  const plantToFind = await prisma.plants.findFirst({
    where: { id: idOfPlant, public: true },
    select: {
      id: true,
      kind: true,
      age: true,
      owner: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });

  // CHECK IF WE FOUND THE PLANT
  if (plantToFind === null) {
    res.status(404).send();
    return;
  }

  // if (!plantToFind.public) {
  //   res.status(404).send();
  //   return;
  // }

  // RESPOND WITH THE PLANT
  res.send(plantToFind);
  return;
});

app.post("/plants", async (req, res) => {
  const bodyFromRequest = req.body;

  // Data validation
  if (
    "kind" in bodyFromRequest &&
    bodyFromRequest.kind.length > 0 &&
    "age" in bodyFromRequest &&
    "public" in bodyFromRequest &&
    "userId" in bodyFromRequest
  ) {
    try {
      const newPlant = await prisma.plants.create({
        data: bodyFromRequest,
      });
      res.status(201).send(newPlant);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Something went wrong!" });
    }
  } else {
    res.status(400).send({
      message:
        "'kind', 'age', 'public' & 'userId' are required. And 'kind' should be longer than 0 characters!",
    });
  }
});

app.patch("/plants/:id", AuthMiddleware, async (req: AuthRequest, res) => {
  const bodyFromRequest = req.body;
  const idOfPlant = Number(req.params.id);

  // CHECK THE URL ROUTE
  if (isNaN(idOfPlant)) {
    res.status(400).send();
    return;
  }

  if ("id" in bodyFromRequest || Object.keys(bodyFromRequest).length === 0) {
    res.status(400).send();
    return;
  }
  try {
    const plantToUpdate = await prisma.plants.findUnique({
      where: {
        id: idOfPlant,
      },
    });

    if (plantToUpdate === null) {
      res.status(404).send();
      return;
    }

    if (plantToUpdate.userId !== req.userId) {
      res.status(401).send();
      return;
    }

    const updatedPlant = await prisma.plants.update({
      where: {
        id: idOfPlant,
      },
      data: bodyFromRequest,
    });
    res.send(updatedPlant);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong!" });
  }
});

app.delete("/plants/:id", async (req, res) => {
  const idFromReq = Number(req.params.id);

  if (isNaN(idFromReq)) {
    res.status(400).send();
    return;
  }

  const plantToDelete = await prisma.plants.findUnique({
    where: { id: idFromReq },
  });

  if (plantToDelete === null) {
    res.status(404).send();
    return;
  }

  await prisma.plants.delete({
    where: {
      id: idFromReq,
    },
  });
  res.status(200).send({ message: "Plant was deleted!" });
});

// AUTH API //

app.get("/users", async (req, res) => {
  const allTheUsers = await prisma.users.findMany({
    select: {
      id: true,
      username: true,
      password: false,
    },
  });
  res.send(allTheUsers);
});

app.post("/register", async (req, res) => {
  const bodyFromRequest = req.body;

  // Data validation
  if (
    "username" in bodyFromRequest &&
    "password" in bodyFromRequest &&
    bodyFromRequest.password.length > 0 &&
    bodyFromRequest.username.length > 0
    // bodyFromRequest.password.length > 10 &&
    // bodyFromRequest.password.includes("@")
    // Any other password validation here
  ) {
    try {
      const newUser = await prisma.users.create({
        data: {
          ...bodyFromRequest,
          password: hashSync(bodyFromRequest.password, 10),
        },
        select: {
          id: true,
          username: true,
        },
      });
      res.status(201).send(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Something went wrong!" });
    }
  } else {
    res.status(400).send({
      message: "Data validation error!",
    });
  }
});

app.post("/login", async (req, res) => {
  const bodyFromRequest = req.body;

  // Data validation
  if ("username" in bodyFromRequest && "password" in bodyFromRequest) {
    // interesting stuff here
    const userToLogin = await prisma.users.findUnique({
      where: { username: bodyFromRequest.username },
    });

    if (userToLogin === null) {
      res.send({ message: "Username and password combination not found" });
      return;
    }
    if (!compareSync(bodyFromRequest.password, userToLogin.password)) {
      res.send({ message: "Username and password combination not found" });
      return;
    }
    // :)

    const token = toToken({ userId: userToLogin.id });
    res.send({ token: token });
  } else {
    res.status(400).send({
      message: "Data validation error!",
    });
  }
});

app.get("/tokenchecker", async (req, res) => {
  const headers = req.headers;
  if (
    headers["authorization"] && // Is the header there
    headers["authorization"].split(" ")[0] === "Bearer" && // Is the first word (before the space) equal to "Bearer"
    headers["authorization"].split(" ")[1] // Is there a part after the space
  ) {
    const token = headers["authorization"].split(" ")[1];
    try {
      const data = toData(token);
      res.send({ message: "Good job" });
    } catch (error) {
      console.log(error);
      res.status(401).send({ message: "Token missing or invalid" });
      return;
    }
  } else {
    res.send({ message: "Bad job" });
  }
});

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
