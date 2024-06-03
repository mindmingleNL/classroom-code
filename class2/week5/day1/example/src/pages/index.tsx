import { useEffect, useState } from "react";
import { ZodError, z } from "zod";

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

const arrayOfArtistValidator = z.array(artistValidator);

type Artist = z.infer<typeof artistValidator>;

export default function Home() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [error, setError] = useState<ZodError | null>(null);
  useEffect(() => {
    const getArtists = async () => {
      const response = await fetch("http://localhost:3001/artists");
      const data = await response.json();

      const validated = arrayOfArtistValidator.safeParse(data);
      if (validated.success) {
        setArtists(validated.data);
      } else {
        setError(validated.error);
        // redirect the user
      }
    };

    getArtists();
  }, []);

  if (error !== null) {
    return (
      <>
        <div>
          <p>The backender fucked up</p>
          {error.issues.map((issue, index) => (
            <p key={index}>{issue.message}</p>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        {artists.map((artist) => {
          return (
            <p key={artist.id}>
              {artist.id} {artist.name}
            </p>
          );
        })}
      </div>
    </>
  );
}
