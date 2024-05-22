import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addTrain = async () => {
  const newTrain = await prisma.train.create({
    data: {
      name: "Polar Express",
      color: "white",
    },
  });

  console.log(newTrain);
};

// addTrain();

const addDeparture = async () => {
  const newDeparture = await prisma.departure.create({
    data: {
      time: new Date(),
      platform: 7,
    },
  });

  console.log(newDeparture);
};

// addDeparture();

const getDeparture = async () => {
  const departure = await prisma.departure.findUnique({
    where: {
      id: 1,
    },
    include: {
      train: true,
    },
  });

  //   const train = await prisma.train.findUnique({
  //     where: { id: departure?.trainId },
  //   });

  console.log(departure);
};

// getDeparture();

const fillId = async () => {
  const w = await prisma.departure.update({
    where: { id: 1 },
    // data: { trainId: 1 },
    data: { train: { connect: { id: 1 } } },
    // data: { train: { disconnect: { id: 1 } } },
  });

  console.log(w);
};

// fillId();

const getTrainDepartures = async () => {
  const data = await prisma.train.findUnique({
    where: { id: 1 },
    include: {
      departures: true,
    },
  });

  console.log(data);
};

// getTrainDepartures();
