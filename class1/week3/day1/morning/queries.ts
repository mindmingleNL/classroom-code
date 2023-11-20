import { PrismaClient } from "@prisma/client";
// interface Product {
//   name: string;
//   price: number;
//   id: number;
// }

// const product = {
//   name: "Big Plasma TV",
//   price: 499.99, // Float
//   id: 0 // Integer
// };

// const shoppingCart: Product[] = [];

// Add something to my shopping cart
// shoppingCart.push(product);
// console.log(shoppingCart);

// Prisma Queries
// C - Create
// R - Read
// U - Update
// D - Delete
// Documentation:
// https://www.prisma.io/docs/concepts/components/prisma-client/crud#read
const prisma = new PrismaClient();

// const user = await prisma.user.create({
//   data: {
//     email: "elsa@prisma.io",
//     name: "Elsa Prisma"
//   }
// });

// We could create an endpoint in Express
// With a HTTP method of POST
// for the route '/create-product'
const createProduct = async () => {
  const newProduct = await prisma.product.create({
    data: {
      name: "Macbook 2023",
      price: 299
    }
  });
};

// We could create an endpoint in Express
// With a HTTP method of GET
// for the route '/product/1'
const findProduct = async (id: number) => {
  const product = await prisma.product.findUnique({
    where: {
      id: id
    }
  });

  console.log(product);
};

// createProduct();
findProduct(55);
