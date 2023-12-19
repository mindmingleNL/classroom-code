import users from "./data/users.json";
import toys from "./data/toys.json";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
    for (let i = 0; i < toys.length; i++) {
        const newToy = toys[i];
        await prisma.toy.create({
            data: newToy,
        });
    }

    for (let i = 0; i < users.length; i++) {
        const newUser = users[i];
        await prisma.user.create({
            data: newUser,
        });
    }
};

// I'm really sorry for the code below ¯\_(ツ)_/¯

const createInitialConnections = async () => {
    const connect01 = await prisma.user.update({
        where: { id: 1 },
        data: { toys: { create: { toy: { connect: { id: 6 } } } } },
    });
    const connect02 = await prisma.user.update({
        where: { id: 1 },
        data: { toys: { create: { toy: { connect: { id: 21 } } } } },
    });
    const connect03 = await prisma.user.update({
        where: { id: 1 },
        data: { toys: { create: { toy: { connect: { id: 23 } } } } },
    });
    const connect04 = await prisma.user.update({
        where: { id: 2 },
        data: { toys: { create: { toy: { connect: { id: 6 } } } } },
    });
    const connect05 = await prisma.user.update({
        where: { id: 2 },
        data: { toys: { create: { toy: { connect: { id: 16 } } } } },
    });
    const connect06 = await prisma.user.update({
        where: { id: 2 },
        data: { toys: { create: { toy: { connect: { id: 20 } } } } },
    });
    const connect07 = await prisma.user.update({
        where: { id: 3 },
        data: { toys: { create: { toy: { connect: { id: 1 } } } } },
    });
    const connect08 = await prisma.user.update({
        where: { id: 3 },
        data: { toys: { create: { toy: { connect: { id: 2 } } } } },
    });
    const connect09 = await prisma.user.update({
        where: { id: 3 },
        data: { toys: { create: { toy: { connect: { id: 7 } } } } },
    });
    const connect10 = await prisma.user.update({
        where: { id: 3 },
        data: { toys: { create: { toy: { connect: { id: 8 } } } } },
    });
    const connect11 = await prisma.user.update({
        where: { id: 3 },
        data: { toys: { create: { toy: { connect: { id: 17 } } } } },
    });
    const connect12 = await prisma.user.update({
        where: { id: 3 },
        data: { toys: { create: { toy: { connect: { id: 22 } } } } },
    });
    const connect13 = await prisma.user.update({
        where: { id: 4 },
        data: { toys: { create: { toy: { connect: { id: 3 } } } } },
    });
    const connect14 = await prisma.user.update({
        where: { id: 4 },
        data: { toys: { create: { toy: { connect: { id: 8 } } } } },
    });
    const connect15 = await prisma.user.update({
        where: { id: 5 },
        data: { toys: { create: { toy: { connect: { id: 2 } } } } },
    });
    const connect16 = await prisma.user.update({
        where: { id: 5 },
        data: { toys: { create: { toy: { connect: { id: 3 } } } } },
    });
    const connect17 = await prisma.user.update({
        where: { id: 5 },
        data: { toys: { create: { toy: { connect: { id: 14 } } } } },
    });
    const connect18 = await prisma.user.update({
        where: { id: 5 },
        data: { toys: { create: { toy: { connect: { id: 23 } } } } },
    });
    const connect19 = await prisma.user.update({
        where: { id: 6 },
        data: { toys: { create: { toy: { connect: { id: 3 } } } } },
    });
    const connect20 = await prisma.user.update({
        where: { id: 6 },
        data: { toys: { create: { toy: { connect: { id: 5 } } } } },
    });
    const connect21 = await prisma.user.update({
        where: { id: 6 },
        data: { toys: { create: { toy: { connect: { id: 7 } } } } },
    });
    const connect22 = await prisma.user.update({
        where: { id: 6 },
        data: { toys: { create: { toy: { connect: { id: 12 } } } } },
    });
    const connect23 = await prisma.user.update({
        where: { id: 7 },
        data: { toys: { create: { toy: { connect: { id: 6 } } } } },
    });
    const connect24 = await prisma.user.update({
        where: { id: 7 },
        data: { toys: { create: { toy: { connect: { id: 18 } } } } },
    });
    const connect25 = await prisma.user.update({
        where: { id: 7 },
        data: { toys: { create: { toy: { connect: { id: 23 } } } } },
    });
    const connect26 = await prisma.user.update({
        where: { id: 8 },
        data: { toys: { create: { toy: { connect: { id: 1 } } } } },
    });
    const connect27 = await prisma.user.update({
        where: { id: 8 },
        data: { toys: { create: { toy: { connect: { id: 4 } } } } },
    });
    const connect28 = await prisma.user.update({
        where: { id: 8 },
        data: { toys: { create: { toy: { connect: { id: 17 } } } } },
    });
    const connect29 = await prisma.user.update({
        where: { id: 9 },
        data: { toys: { create: { toy: { connect: { id: 1 } } } } },
    });
    const connect30 = await prisma.user.update({
        where: { id: 9 },
        data: { toys: { create: { toy: { connect: { id: 5 } } } } },
    });
    const connect31 = await prisma.user.update({
        where: { id: 9 },
        data: { toys: { create: { toy: { connect: { id: 19 } } } } },
    });
    const connect32 = await prisma.user.update({
        where: { id: 9 },
        data: { toys: { create: { toy: { connect: { id: 22 } } } } },
    });
    const connect33 = await prisma.user.update({
        where: { id: 10 },
        data: { toys: { create: { toy: { connect: { id: 9 } } } } },
    });
    const connect34 = await prisma.user.update({
        where: { id: 10 },
        data: { toys: { create: { toy: { connect: { id: 11 } } } } },
    });
    const connect35 = await prisma.user.update({
        where: { id: 10 },
        data: { toys: { create: { toy: { connect: { id: 15 } } } } },
    });
    const connect36 = await prisma.user.update({
        where: { id: 10 },
        data: { toys: { create: { toy: { connect: { id: 23 } } } } },
    });
    const connect37 = await prisma.user.update({
        where: { id: 11 },
        data: { toys: { create: { toy: { connect: { id: 1 } } } } },
    });
    const connect38 = await prisma.user.update({
        where: { id: 11 },
        data: { toys: { create: { toy: { connect: { id: 10 } } } } },
    });
    const connect39 = await prisma.user.update({
        where: { id: 11 },
        data: { toys: { create: { toy: { connect: { id: 13 } } } } },
    });
};

const allTogetherNow = async () => {
    try {
        await seed();
        await createInitialConnections();
    } catch (error) {
        console.log(error);
    }
};

allTogetherNow();
