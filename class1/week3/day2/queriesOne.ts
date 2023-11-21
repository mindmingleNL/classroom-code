import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createNewOwner = async () => {
  // Create a new owner in the prisma database
  const newOwner = await prisma.owner.create({
    data: {
      name: "Aiden",
      age: 29
    }
  });

  console.log("Our new owner:", newOwner);
};

const addPetWithOwner = async () => {
  try {
    const newPet = await prisma.pet.create({
      data: {
        name: "Peluso 🐱",
        kind: "Cat",
        owner: {
          connect: { id: 1 }
        }
      }
    });
    console.log(newPet);
  } catch (error) {
    console.log(error);
  }
};

const findUniquePet = async (idOfPetToBeFound: number) => {
  try {
    // We want to find a unique pet in our prisma database
    const petFound = await prisma.pet.findUnique({
      where: {
        id: idOfPetToBeFound
      },
      include: {
        owner: true // Include the owner relationship
      }
    });
    console.log(petFound);
  } catch (error) {
    console.log(error);
  }
};

findUniquePet(1);
// addPetWithOwner();
