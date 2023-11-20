import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addPetWithOwner = async () => {
  const newPet = await prisma.pet.create({
    data: {
      name: "Peluso 🐱",
      kind: "Cat",
      owner: {
        connect: { id: 1 } // Assuming owner with id 1 exists
      }
    }
  });
  console.log(newPet);
};

addPetWithOwner();
