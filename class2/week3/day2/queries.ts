import { PrismaClient } from "@prisma/client";
import trains from "./prisma/data/trains.json";

const prisma = new PrismaClient();

const addTrain = async () => {
  const result = await prisma.train.create({
    data: {
      model: "SuperSonicTrain",
      createdAt: new Date(),
      numberOfWagons: 8,
      price: 4000000,
      maintained: undefined,
    },
  });

  console.log(result);
};

// addTrain();

const updateTrain = async (trainId: number) => {
  console.log(`updating train: ${trainId}`);

  try {
    const result = await prisma.train.update({
      where: { id: trainId },
      data: {
        maintained: false,
      },
    });

    console.log(result);
  } catch (error) {
    console.log("error");
  }
};

const run = async () => {
  await updateTrain(6);
  await updateTrain(3);
  await updateTrain(5);
  await updateTrain(1);
};

// run();

const seedWithForLoop = async () => {
  for (let i = 0; i < 100; i++) {
    await prisma.train.create({
      data: {
        model: `Train Number ${i}`,
        createdAt: new Date(),
        numberOfWagons: i,
        price: 1000000 * i,
      },
    });
  }
};

// seedWithForLoop();

const seedFromJson = async () => {
  for (let i = 0; i < trains.length; i++) {
    const train = trains[i];
    await prisma.train.create({
      data: train,
    });
  }
};

seedFromJson();

const deleteTrains = async () => {
  await prisma.train.deleteMany({
    where: { price: { gt: 5000000 } },
  });
};

// deleteTrains();
