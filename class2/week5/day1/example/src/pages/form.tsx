import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// type Genre = "Rock" | "Pop" | "Electronic";

// interface Artist {
//   name: string;
//   genre: Genre;
//   award: boolean;
//   //   nOfMembers: number;
// }

const ArtistValidator = z
  .object({
    name: z.string().includes("@"),
    description: z.string().min(10),
    genre: z.union([
      z.literal("Rock"),
      z.literal("Pop"),
      z.literal("Electronic"),
    ]),
    award: z.boolean(),
    nOfMembers: z.number().min(2),
  })
  .strict();

type Artist = z.infer<typeof ArtistValidator>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Artist>({
    resolver: zodResolver(ArtistValidator),
  });

  const theBetterHandleFormSubmit = async (data: Artist) => {
    const response = await fetch("http://localhost:3001/artists", {
      body: JSON.stringify({ ...data, memberNames: ["Yoeran"] }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("thing posted");
    } else {
      console.log("problem!");
    }
  };

  return (
    <main className="content">
      <h1>Hello form!</h1>
      <form
        className="artist-form"
        onSubmit={handleSubmit(theBetterHandleFormSubmit)}
      >
        <label htmlFor="artistName">Name</label>
        <input
          className={`${errors.name ? "error-field" : ""}`}
          id="aristsName"
          type="text"
          {...register("name")}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <label htmlFor="description">Description</label>
        <input id="description" type="text" {...register("description")} />
        {errors.description && (
          <p className="error">{errors.description.message}</p>
        )}

        <label htmlFor="genre">Genre</label>
        <select id="genre" {...register("genre")}>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Electronic">Electronic</option>
        </select>

        <label htmlFor="aNumber">A Number</label>
        <input
          type="number"
          id="aNumber"
          {...register("nOfMembers", { valueAsNumber: true })}
        />
        {errors.nOfMembers && (
          <p className="error">{errors.nOfMembers.message}</p>
        )}

        <label htmlFor="award">Award</label>
        <input type="checkbox" id="award" {...register("award")} />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Form;
