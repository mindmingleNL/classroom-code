import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

const makeQuery = async () => {
  try {
    await prisma.car.create({
      data: {
        id: 1,
        brand: "Ferarri",
        gears: 5,
        color: "red",
        price: 500,
      },
    });
  } catch (error) {
    console.log("Something went wrong");
    if (error instanceof PrismaClientKnownRequestError) {
      console.log(error.code);
    }
  }
  //   console.log(newCar);
  //   const allCars = await prisma.car.findMany({
  //     select: {
  //       brand: true,
  //       id: true,
  //     },
  //   });
  //   console.log(allCars);
};

makeQuery();
