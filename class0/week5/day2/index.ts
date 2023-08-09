import { z } from "zod";

// crust: "Vegan" | "Sourdough" | "Hot dog crust" | "Cheese crust";

const crustValidator = z.union([
  z.literal("Vegan"),
  z.literal("Sourdough"),
  z.literal("Hot dog crust"),
  z.literal("Cheese crust"),
]);

type Crust = z.infer<typeof crustValidator>;

const userName = "@MindMingle";

const userNameValidator = z.string().min(5).startsWith("@");

const userValidator = z
  .object({
    username: userNameValidator,
    password: z.string().min(6),
  })
  .strict();

// userValidator.parse({
//   username: "@Mindmingle",
//   password: "1234567",
//   foo: "blah",
// });

const parsed = userValidator.safeParse({
  username: "Mind",
  password: "123",
});

if (parsed.success === true) {
  console.log("Parsing was a succes");
  console.log(parsed.data);
} else {
  console.log("Parsing failed");
  console.log(parsed.error.flatten());
}

// console.log(parsed);

type User = z.infer<typeof userValidator>;

// const emailValidator = z.string().email();

// emailValidator.parse("marisha@mindmingle.nl");

// type UserName = z.infer<typeof userNameValidator>;

// userNameValidator.parse(userName);

// interface Tweet {
//   userName: string;
//   message: string;
// }
