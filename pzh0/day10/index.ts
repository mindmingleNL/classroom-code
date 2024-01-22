import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const defaultPetSelect: Prisma.PetSelect = {
  id: true,
  name: true,
  age: true,
};

const query = async () => {
  await prisma.pet.findMany({ select: { ...defaultPetSelect, kind: true } });
  const kindsWithPets = await prisma.kind.findMany({
    select: { name: true },
  });
  console.log(JSON.stringify(kindsWithPets));
  // await prisma.pet.create({
  //   data: {
  //     name: "Samson",
  //     age: 18,
  //     tame: true,
  //     kind: {
  //       connectOrCreate: {
  //         where: {
  //           id: 1,
  //         },
  //         create: {
  //           name: "catdog",
  //         },
  //       },
  //     },
  //   },
  // });
  // const pets = await prisma.pet.findMany({
  //   select: {
  //     id: true,
  //     name: true,
  //     age: true,
  //     tame: true,
  //     kind: {
  //       select: {
  //         name: true,
  //       },
  //     },
  //   },
  //   // include: {
  //   //   kind: {
  //   //     select: {
  //   //       name: true,
  //   //     },
  //   //   },
  //   // },
  // });
  // console.log(pets);
};

query();
