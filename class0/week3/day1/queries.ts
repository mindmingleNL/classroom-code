import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const runQueries = async () => {
  const newTree = await prisma.tree.create({
    data: {
      name: "oak",
      height: 15,
      age: 40,
      img: "",
    },
  });
  console.log(newTree);
  //   const aTree = await prisma.tree.findMany({
  //     where: {
  //       height: 10,
  //     },
  //   });
  //   console.log(aTree);
};

runQueries();
