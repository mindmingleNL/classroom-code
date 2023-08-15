import { PrismaClient } from "@prisma/client";
import userData from "./data/users.json";
import itemData from "./data/items.json";
import bidData from "./data/bids.json";
const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < userData.length; i++) {
    await prisma.user.create({ data: userData[i] });
  }

  for (let i = 0; i < itemData.length; i++) {
    await prisma.item.create({ data: itemData[i] });
  }

  for (let i = 0; i < bidData.length; i++) {
    await prisma.bid.create({ data: bidData[i] });
  }
};

seed();
