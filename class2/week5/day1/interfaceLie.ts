import { ZodError, z } from "zod";

// type Genre = "Rock" | "Pop" | "Electronic";

// interface Artist {
//   id: number;
//   name: string;
//   genre: Genre;
//   award: boolean;
//   memberNames: string[];
// }

const artistValidator = z
  .object({
    id: z.number().positive(),
    name: z.string().min(1),
    genre: z.union([
      z.literal("Rock"),
      z.literal("Pop"),
      z.literal("Electronic"),
    ]),
    award: z.boolean(),
    memberNames: z.array(z.string()).min(1),
  })
  .strict();

const artistPostValidator = artistValidator.omit({ id: true });
type Artist = z.infer<typeof artistValidator>;

let artists: Artist[] = [];

const newArtist = {
  id: 1,
  name: "A band",
  genre: "Electronic",
  award: false,
  memberNames: ["Elivs Presley", "Eric Clapton", "Jimi Hendrix"],
};

const result = artistPostValidator.safeParse(newArtist);
if (result.success) {
  console.log("Jeey!");
  console.log(result);
  artists.push(result.data);
} else {
  console.log(result.error.flatten());
}

// With parse BADDDD
// try {
//   babiesFirstValidator.parse(1);
// } catch (error) {
//   if (error instanceof ZodError) {
//     console.log(error.issues[0].message);
//   }
// }

// interface Artist {
//   id: boolean;
//   name: string;
//   genre: Genre;
//   award: boolean;
//   memberNames: string[];
// }

// let artists: Artist[] = [];

// const getArtists = async () => {
//   const response = await fetch(
//     "https://reader.mindmingle.nl/api/exercises/react-challenge/artists"
//   );
//   const data = await response.json();
//   // Normally: useState
//   artists = data;

//   console.log(artists);
//   console.log(artists[0].id);
// };

// getArtists();
// // const newArtists: Artist = {
// //   id: true,
// //   name: "A band",
// //   genre: "Electronic",
// //   award: false,
// //   memberNames: ["Elivs Presley", "Eric Clapton", "Jimi Hendrix"],
// // };
