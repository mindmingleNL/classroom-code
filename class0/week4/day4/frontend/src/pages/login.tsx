import NavigationBar from "@/components/NavigationBar";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [getError, setError] = useState<string | null>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailFromForm = event.currentTarget.mail.value;
    const passwordFromForm = event.currentTarget.password.value;

    if (emailFromForm === undefined || passwordFromForm === undefined) {
      // This means something went wrong
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: emailFromForm,
        password: passwordFromForm,
      });
      setError(null);
      // Store token
      localStorage.setItem("token", response.data.token);
      // Navigate home!
      router.push("/");
    } catch (error) {
      setError("Something went wrong with the request");
    }
  };

  return (
    <>
      <NavigationBar />
      <main>
        <h1>This is the login page</h1>
        <div>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="mail">✉️ Email</label>
            <input type="email" id="mail" name="mail" />

            <label htmlFor="password">🔑 Password</label>
            <input type="password" id="password" name="password" />

            <button type="submit">Log in</button>
          </form>
          {getError && <p className="error-text">{getError}</p>}
        </div>
      </main>
    </>
  );
};

export default Login;
