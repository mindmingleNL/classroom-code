import express, { json } from "express";
import { AuthMiddleware, AuthRequest } from "./auth/middleware";
import { toToken } from "./auth/jwt";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
const app = express();
const port = 3001;

const primsa = new PrismaClient();
app.use(cors());
app.use(json());

app.get("/me", AuthMiddleware, (req: AuthRequest, res) => {
  const userId = req.userId;
  if (userId === undefined) {
    res.status(500).send({ message: "Something went wrong!" });
    return;
  }
  res.send({ message: `Hello user with id ${userId}`, userId: userId });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({ message: "Body needs 'email' and 'password'" });
    return;
  }
  const userToLogin = await primsa.user.findFirst({
    where: { email: email },
  });
  if (!userToLogin || userToLogin.password !== password) {
    res.status(400).send({ message: "Login Failed" });
    return;
  }
  const token = toToken({ userId: userToLogin.id });
  res.send({ message: "Login success", token: token });
});

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
