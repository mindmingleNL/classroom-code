import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const addAnimal = async () => {
//   await prisma.animal.create({
//     data: {
//       name: "Belll",
//       kind: "pig",
//       age: 2,
//       hasBeenFed: false,
//       imgUrl: "https://i.giphy.com/media/h55EUEsTG9224/giphy.webp"
//     },
//   });
// };

const deleteAnimal = async () => {
  try {
    await prisma.animal.delete({
      where: {
        id: 16
      }
    });
  } catch (error) {
    console.log("Error!");
  }
};

const getAnimals = async () => {
  try {
    const animals = await prisma.animal.findMany({
      where: {
        age: {
          gt: 2
        }
      }
    });

    console.log(animals);
  } catch (error) {
    console.log("ERROR");
  }
};

getAnimals();
