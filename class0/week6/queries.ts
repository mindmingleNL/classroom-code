import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const runQueries = async () => {
  const allBids = await prisma.bid.findMany({
    select: {
      id: true,
      amount: true,
      user: {
        select: {
          id: true,
          username: true,
        },
      },
      item: true,
    },
  });
  console.log(allBids);
};

runQueries();
