import { useEffect, useState } from "react";

type Genre = "Rock" | "Pop" | "Electronic";

interface Artist {
  id: number;
  name: string;
  genre: Genre;
  award: boolean;
  memberNames: string[];
}

export default function Home() {
  const [artists, setArtists] = useState<Artist[]>([]);
  useEffect(() => {
    const getArtists = async () => {
      const response = await fetch(
        "https://reader.mindmingle.nl/api/exercises/react-challenge/artists"
      );
      const data = await response.json();

      setArtists(data);
    };

    getArtists();
  }, []);
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
