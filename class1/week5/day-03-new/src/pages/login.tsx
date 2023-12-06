import { useForm } from "react-hook-form";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z.string(),
  password: z.string().min(5).max(50)
});

// Infer the TypeScript type for the form from the Zod Schema
type LoginFormInputs = z.infer<typeof schema>;

// interface LoginFormInputs {
//   username: string;
//   password: string;
// }

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema)
  });

  const handleLogin = (data: LoginFormInputs) => {
    console.log(data); // You would send this data to your authentication service
    const token = "fake-token"; // This would normally come from the server
    localStorage.setItem("token", token);
    router.push("/protected");
  };

  console.log(errors);

  return (
    <Layout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" {...register("username")} />
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: true
            })}
          />
          {errors.password && (
            <span className="error-msg">{errors.password.message}</span>
          )}
        </div>
        <button type="submit">Click here to login</button>
      </form>
    </Layout>
  );
};

export default Login;
