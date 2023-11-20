import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function addSongLike() {
  // Assuming the song with id 1 and user with id 1 exist
  await prisma.song.update({
    where: {
      id: 1
    },
    data: {
      likedBy: {
        connect: { id: 1 }
      }
    }
  });
}

async function queryLikes() {
  const userWithLikes = await prisma.user.findUnique({
    where: {
      id: 1
    },
    include: {
      likes: true
    }
  });
}

addSongLike();
queryLikes();
