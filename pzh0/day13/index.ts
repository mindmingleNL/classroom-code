import { z } from "zod";

const someData = "Hello world!!!";

const stringSchema = z.string().min(8);

const result = stringSchema.safeParse(someData);

// if (result.success === false) {
//   console.log(result.error.issues);
// } else {
//   console.log(result.data);
// }

const songData = {
  id: 7,
  title: "A song",
  duration: 18,
  artist: "The band",
};

const spicySchema = z.union([
  z.literal("Mild"),
  z.literal("Medium"),
  z.literal("Hot"),
]);

const songSchema = z.object({
  id: z.number().int().min(1),
  title: z.string().min(1),
  artist: z.string().min(1),
  duration: z.number().int(),
  spicy: spicySchema,
});

type Spicyness2 = z.infer<typeof spicySchema>;

type Song = z.infer<typeof songSchema>;

const printSong = (song: Song) => {
  return song.title;
};

const patchSongSchema = songSchema.partial();

const songResult = songSchema.safeParse(songData);
if (songResult.success) {
  console.log(songResult.data);
} else {
  console.log(songResult.error.issues);
}
// console.log(songResult);

// FOUT

// interface Pokemon {
//   id: number;
//   is_default: boolean;
//   height: number;
// }

// const getPokemon = async () => {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//   const data: Pokemon = await res.json();
//   console.log(data);
// };

// getPokemon();
