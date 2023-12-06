import Layout from "@/components/Layout";
import BetterButton from "@/components/BetterButton";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Log the user in
    const token = "fake-token"; // This would normally come from the server
    localStorage.setItem("token", token);
    router.push("/protected");
  };

  return (
    <Layout>
      <h1>Login</h1>
      <BetterButton onClick={handleLogin} variant="primary">
        Click here to login
      </BetterButton>
    </Layout>
  );
};

export default Login;
