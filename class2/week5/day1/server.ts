import express from "express";
import { json } from "express";
import cors from "cors";
import { z } from "zod";

const app = express();

app.use(json());
app.use(cors());

const port = 3001;

const artistValidator = z
  .object({
    id: z.number().positive(),
    name: z.string(),
    genre: z.union([
      z.literal("Rock"),
      z.literal("Pop"),
      z.literal("Electronic"),
    ]),
    award: z.boolean(),
    memberNames: z.array(z.string()).min(1),
  })
  .strict();

// const artistPostValidator = artistValidator.omit({ id: true });

type Artist = z.infer<typeof artistValidator>;

// Fake db
let artistsDB: Artist[] = [];

app.get("/artists", (req, res) => {
  res.send(artistsDB);
});

app.post("/artists", (req, res) => {
  const bodyFromReq = req.body;

  // Or use artistPostValidator
  const validated = artistValidator.omit({ id: true }).safeParse(bodyFromReq);
  if (validated.success) {
    // Normally: prisma.artist.create
    artistsDB.push({ ...validated.data, id: artistsDB.length + 1 });
    res.status(201).send({ message: "Jeey!" });
  } else {
    res.status(400).send(validated.error.flatten());
  }
});

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
