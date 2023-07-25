import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const runQuery = async () => {
  // const users = await prisma.user.findMany();
  // const candies = await prisma.candy.findMany();
  // console.log(users);
  // console.log(candies);
  try {
    const userThatLikesLollipops = await prisma.user.create({
      data: {
        name: "Paul",
        candyId: 99,
      },
    });
    console.log(userThatLikesLollipops);
  } catch (error) {
    console.log("I've got you fam!");
  }
  // const lisa = await prisma.user.findUnique({
  //   where: {
  //     id: 4,
  //   },
  //   include: {
  //     candy: true,
  //   },
  // });
  // console.log(lisa);

  // const llps = await prisma.candy.findUnique({
  //   where: {
  //     id: 1,
  //   },
  //   include: {
  //     User: true,
  //   },
  // });
  // console.log(llps);
};

runQuery();
