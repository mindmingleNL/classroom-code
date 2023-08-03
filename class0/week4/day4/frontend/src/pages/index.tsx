import NavigationBar from "@/components/NavigationBar";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const getMe = async (token: string) => {
      const response = await axios.get("http://localhost:3001/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Here you have acces to the data
      console.log(response.data);
    };

    const token = localStorage.getItem("token");
    if (token === null) {
      return;
    }
    getMe(token);
  });
  return (
    <>
      <NavigationBar />
      <main>
        <h1>This is my homepage</h1>
        <ul>
          <li>
            ✅ We want to create a form that sends a POST request to /login
          </li>
          <li>✅We want to save the token we get back from that request</li>
          <li>✅Use that token to make a GET request to /me</li>
        </ul>
      </main>
    </>
  );
}
