import { PrismaClient } from "@prisma/client";
import categories from "./data/categories.json";
import products from "./data/products.json";

const prisma = new PrismaClient();

// Here we can run our queries
// We want to import our categories.json and our products.json
// For each one of these items, create a database entry

const seedProducts = () => {
  // products is an array of objects.
  // For each object in the array, we want to create this db record
  products.forEach(async (product) => {
    await prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        category: product.category
      }
    });
  });
};

seedProducts();
