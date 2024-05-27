import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPet = async () => {
  await prisma.pet.create({
    data: {
      kind: "cat",
      name: "Garfield",
    },
  });
};

const createFood = async () => {
  await prisma.food.create({
    data: {
      type: "Royal Canine",
    },
  });
};

const connectPetToFood = async () => {
  await prisma.pet.update({
    where: { id: 1 },
    data: {
      foods: {
        connect: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      },
    },
  });
};

// createPet();
// createFood();
connectPetToFood();
