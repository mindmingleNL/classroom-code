import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/router";

// Define the Zod schema for the form data
const feedbackSchema = z.object({
  userId: z.number().int(),
  message: z.string().min(100).max(400)
});

// Infer the types from the Zod schema
type FormData = z.infer<typeof feedbackSchema>;

const Create = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(feedbackSchema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would handle the form submission, e.g., post to an API
    // After successful creation, you might want to redirect the user
    router.push("/");
  };

  return (
    <div>
      <h1>Submit some feedback</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="userId">User ID:</label>
          <input id="userId" type="number" {...register("userId")} />
          {errors.userId && <p>{errors.userId.message}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" {...register("message")} />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button type="submit">Create Feedback</button>
      </form>
    </div>
  );
};

export default Create;
