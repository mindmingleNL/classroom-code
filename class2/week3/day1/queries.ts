import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createProduct = async () => {
  const product = await prisma.product.create({
    data: {
      name: "Playstation",
      price: 1230.46,
    },
  });

  console.log(product);
};

// createProduct();

// Get all products
const readProducts = async () => {
  const products = await prisma.product.findMany({
    where: {
      price: {
        gte: 500,
      },
    },
  });
  console.log(products);
};
// readProducts();

// Find a unique products
const findProduct = async () => {
  const uniqueProduct = await prisma.product.findUnique({
    where: {
      id: 2000,
    },
  });

  const firstProduct = await prisma.product.findFirst({
    where: {
      price: {
        gte: 500,
      },
    },
  });

  console.log("Unique product");
  console.log(uniqueProduct);

  console.log("First product");
  console.log(firstProduct);
};

// findProduct();

const whatAboutFindFirstOrThrow = async () => {
  const product = await prisma.product.findFirstOrThrow({
    where: {
      price: {
        gte: 5000,
      },
    },
  });

  console.log(product);
};
// whatAboutFindFirstOrThrow();

// Update a single product
const updateProduct = async () => {
  const product = await prisma.product.updateMany({
    where: {
      price: {
        lte: 500,
      },
    },
    data: {
      price: 500,
    },
  });

  console.log(product);
};
// updateProduct();

// Delete a product
const deleteProduct = async () => {
  const product = await prisma.product.delete({ where: { id: 2 } });

  console.log(product);
};

// deleteProduct();

// Try/catch errors
const findOneProduct = async (id: number) => {
  //  try {
  //   // we're trying to do something
  //  } catch (error) {
  //   // here we can handle if it goes wrong
  //  }

  try {
    const product = await prisma.product.findUniqueOrThrow({
      where: {
        id: id,
      },
    });

    console.log(product);
  } catch (error) {
    console.log("An error has ocurred!");
  }
};

findOneProduct(999);
