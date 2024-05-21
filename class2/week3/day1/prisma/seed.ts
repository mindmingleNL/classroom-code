import { PrismaClient } from "@prisma/client";
import productData from "./data/products.json";

// 1. import data
// 2. create function
// 3. for every student add data to the database
// final goal: seed data

const prisma = new PrismaClient();

const addData = async () => {
  for (let i = 0; i < productData.length; i++) {
    // const { name, price } = productData[i];
    try {
      await prisma.product.create({
        data: {
          ...productData[i],
          hasBeenSold: true,
        },
        //   data: productData[i],
      });
    } catch (error) {
      console.log(`${productData[i].name} is not added!`);
    }
  }
};

addData();
