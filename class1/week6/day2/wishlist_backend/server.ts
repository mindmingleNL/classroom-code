import express from "express";
import { PrismaClient } from "@prisma/client";
import { json } from "express";
import { toData, toToken } from "./auth/jwt";
import { AuthRequest, authMiddleware } from "./auth/middleware";
import cors from "cors";

const app = express();
const port = 3001;

app.use(json());
app.use(cors());

const prisma = new PrismaClient();

app.get("/", async (req, res) => {
    const allItems = await prisma.toy.findMany({
        include: { users: true },
    });
    res.send(allItems);
});

app.post("/register", async (req, res) => {
    const requestBody = req.body;
    if ("username" in requestBody && "password" in requestBody && "age" in requestBody) {
        try {
            await prisma.user.create({
                data: { username: requestBody.username, password: requestBody.password, age: requestBody.age },
            });
            res.status(201).send({ message: "User created!" });
        } catch (error) {
            res.status(500).send({ message: "Something went wrong!" });
        }
    } else {
        res.status(400).send({ message: "'username' and 'password' are required!" });
    }
});

app.post("/login", async (req, res) => {
    const requestBody = req.body;
    if ("username" in requestBody && "password" in requestBody) {
        try {
            const userToLogin = await prisma.user.findFirstOrThrow({
                where: { username: requestBody.username },
            });
            if (userToLogin && userToLogin.password === requestBody.password) {
                const token = toToken({ id: userToLogin.id, username: userToLogin.username });
                res.status(200).send({
                    id: userToLogin.id,
                    username: userToLogin.username,
                    age: userToLogin.age,
                    token: token,
                });
                return;
            }
            res.status(400).send({ message: "Login failed." });
            console.log(requestBody);
        } catch {
            res.status(404).send({ message: "User not found!" });
            console.log(requestBody);
        }
    } else {
        res.status(400).send({ message: "'username' and 'password' are required!" });
        console.log(requestBody);
        return;
    }
});

app.get("/toys", async (req, res) => {
    res.redirect("/");
});

app.post("/wishlist", async (req, res) => {
    const requestBody = req.body;
    if ("id" in requestBody && "username" in requestBody && "age" in requestBody) {
        try {
            const myItems = await prisma.toy.findMany({
                where: { users: { some: { userId: req.body.id } } },
                include: { users: true },
            });
            res.send(myItems);
        } catch {
            res.status(404).send({ message: "User not found!" });
            console.log(requestBody);
        }
    }
});

app.get("/toys/:id", async (req, res) => {
    const idFromUrl = Number(req.params.id);
    if (isNaN(idFromUrl)) {
        res.status(400).send({ message: "Error: incorrect ID." });
        return;
    }
    const findToyById = await prisma.toy.findUnique({
        where: { id: idFromUrl },
        include: { users: true },
    });
    res.send(findToyById);
});

app.get("/login", async (req, res) => {
    const headers = req.headers;
    if (
        headers["authorization"] &&
        headers["authorization"].split(" ")[0] === "Bearer" &&
        headers["authorization"].split(" ")[1]
    ) {
        const token = headers["authorization"].split(" ")[1];
        try {
            const data = toData(token);
        } catch (e) {
            res.status(401).send({ message: "Token missing or invalid" });
            return;
        }
    } else {
        res.status(401).send({ message: "Token missing or invald" });
    }
});

app.get("/me", async (req, res) => {
    const headers = req.headers;

    if (
        headers["authorization"] &&
        headers["authorization"].split(" ")[0] === "Bearer" &&
        headers["authorization"].split(" ")[1]
    ) {
        const token = headers["authorization"].split(" ")[1];
        const data = toData(token);

        const findUser = await prisma.user.findFirstOrThrow({ where: { id: data.id } });
        res.send(findUser);
    }
});

app.post("/wishes", async (req, res) => {
    const requestBody = req.body;
    if ("token" in requestBody && "toyId" in requestBody)
        try {
            const data = toData(req.body.token);
            const findUser = await prisma.user.findFirstOrThrow({ where: { id: data.id } });
            const findToy = await prisma.toy.findFirstOrThrow({ where: { id: req.body.toyId } });
            if (findToy.safeForChildren === false && findUser.age < 18) {
                res.status(403).send({ message: "Sorry, you need to be 18 or older!" });
            }
            try {
                await prisma.wish.create({
                    data: { toyId: requestBody.toyId, userId: findUser.id },
                });
            } catch (error) {
                res.status(500).send({ message: "Failed to create wish in prisma!" });
            }
            res.status(201).send({ message: "Wish created!" });
        } catch (error) {
            res.status(500).send({ message: "Something went wrong!" });
        }
    else {
        res.status(400).send({ message: "Request must contain 'token' and 'toyId'!" });
    }
});

app.delete("/wishes/:id", async (req, res) => {
    const requestBody = req.body;
    if ("token" in requestBody && "toyId" in requestBody)
        try {
            const data = toData(req.body.token);
            const findUser = await prisma.user.findFirstOrThrow({ where: { id: data.id }, include: { toys: true } });
            const findToy = await prisma.toy.findFirstOrThrow({
                where: { id: req.body.toyId },
                include: { users: true },
            });
            const findWish = await prisma.wish.findFirstOrThrow({ where: { userId: findUser.id, toyId: findToy.id } });
            try {
                const deleteWish = await prisma.wish.delete({ where: { id: findWish.id } });
                res.status(201).send({ message: "Wish deleted!" });
            } catch (error) {
                res.status(500).send({ message: "Failed to create wish in prisma!" });
            }
        } catch (error) {
            res.status(500).send({ message: "Something went wrong!" });
        }
    else {
        res.status(400).send({ message: "Request must contain 'token' and 'toyId'!" });
    }
});

app.listen(port, () => {
    console.log(`⚡ Server listening on port: ${port}`);
});
