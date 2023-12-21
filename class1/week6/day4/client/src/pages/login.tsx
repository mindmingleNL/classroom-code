import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useState } from "react";

const dataFromPresentFormValidator = z.object({
  username: z.string().min(5),
  password: z.string().min(5),
});

type DataFromPresentForm = z.infer<typeof dataFromPresentFormValidator>;

const Login = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = (data: DataFromPresentForm) => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:3001/login", {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });
      if (response.ok) {
        const responseJson = await response.json();
        setToken(responseJson.token);
      }
    };

    fetchData();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataFromPresentForm>({
    resolver: zodResolver(dataFromPresentFormValidator),
  });

  return (
    <>
      {token && (
        <p id="success" className="text-green-600 font-extrabold">
          There is a token! {token}
        </p>
      )}
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(handleLogin)}
      >
        <label htmlFor="username">username</label>
        <input
          className="border-black border rounded"
          type="text"
          id="username"
          {...register("username")}
        />
        {errors.username && <p>{errors.username.message}</p>}
        <label htmlFor="password">password</label>
        <input
          className="border-black border rounded"
          type="text"
          id="password"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button id="login-button">Login</button>
      </form>
    </>
  );
};
export default Login;
