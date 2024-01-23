import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const defaultPetSelect: Prisma.PetSelect = {
  id: true,
  name: true,
  age: true,
};

const query = async () => {
  const newPet = await prisma.pet.update({
    where: {
      id: 1,
    },
    data: {
      Pet_Food: {
        connect: {
          id: 1,
        },
      },
    },
  });

  const petFoodRelation = await prisma.pet_Food.findFirst({
    where: {
      petId: newPet.id,
    },
  });

  if (!petFoodRelation) {
    return;
  }

  await prisma.pet_Food.update({
    where: {
      id: petFoodRelation.id,
    },
    data: {
      rating: 5,
    },
  });

  // const petFound = await prisma.pet.findFirst({
  //   where: {
  //     name: "Fifi",
  //   },
  //   select: {
  //     ...defaultPetSelect,
  //     kind: { select: { name: true } },
  //     owners: { select: { name: true } },
  //   },
  // });
  // console.log(petFound);
  // const newPet = await prisma.pet.create({
  //   data: {
  //     age: 1,
  //     name: "Fifi",
  //     tame: false,
  //     kindId: 1,
  //     owners: {
  //       create: {
  //         name: "Alice",
  //       },
  //       connect: [
  //         {
  //           id: 1,
  //         },
  //         { id: 2 },
  //         { id: 3 },
  //       ],
  //     },
  //   },
  // });
  // await prisma.pet.findMany({ select: { ...defaultPetSelect, kind: true } });
  // const kindsWithPets = await prisma.kind.findMany({
  //   select: { name: true },
  // });
  // console.log(JSON.stringify(kindsWithPets));
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
