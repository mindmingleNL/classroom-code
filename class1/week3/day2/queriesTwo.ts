import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function addSongLike() {
  // Assuming the song with id 1 and user with id 1 exist
  try {
    const updatedSong = await prisma.song.update({
      where: {
        id: 1
      },
      data: {
        likedByUser: {
          connect: { id: 1 }
        }
      }
    });
    console.log(updatedSong);
  } catch (err) {
    console.log(err);
  }
}

// addSongLike();

async function queryLikes() {
  const userWithLikes = await prisma.user.findUnique({
    where: {
      id: 1
    },
    include: {
      likes: true
    }
  });
  console.log(userWithLikes);
}

async function querySong() {
  const song = await prisma.song.findUnique({
    where: {
      id: 1
    },
    include: {
      likedByUser: true
    }
  });
  console.log(song);
}

// addSongLike();
// queryLikes();
querySong();
