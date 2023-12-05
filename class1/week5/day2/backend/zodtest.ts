import { z } from "zod";

const input = "s@m.nl";

// creating a schema for strings
const mySchema = z.string().email().min(2).max(6);

// mySchema.parse(input);
// mySchema.parse("5");
// mySchema.parse("swen");
// mySchema.parse(true);

const aAnimal = {
  id: 1,
  name: "",
  kind: "cow",
  age: 4,
  hasBeenFed: false,
  imgUrl: "not a url",
};

const animalSchema = z
  .object({
    id: z.number().int().positive(),
    name: z.string().min(1),
    kind: z.string().optional(),
    age: z.number().positive().int(),
    hasBeenFed: z.boolean(),
    imgUrl: z.string().url(),
  })
  .strict();

const parseResult = animalSchema.safeParse([]);

if (parseResult.success) {
  console.log("We were succesful!");
} else {
  console.log(parseResult.error.flatten());
}
// console.log(parseResult);
