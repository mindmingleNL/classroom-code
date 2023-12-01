import Link from "next/link";
import React, { useState, useEffect } from "react";

interface User {
  id: number;
  username: string;
  age: number;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    // Retrieve the JWT token from localStorage and set it in the component's state
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
      fetchUsers(storedToken);
    }
  }, []);

  const fetchUsers = async (jwtToken: string) => {
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Include the JWT token in the Authorization header
          Authorization: `Bearer ${jwtToken}`
        }
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        setUsers(jsonResponse);
      } else {
        console.log("Could not fetch users:", response.status);
      }
    } catch (error) {
      console.error("An error occurred while fetching users:", error);
      // Handle network error here (e.g., display error message to the user)
    }
  };

  return (
    <div>
      <h2>Users List</h2>
      {token ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - age: {user.age}
            </li>
          ))}
        </ul>
      ) : (
        <p>
          Please <Link href="/login">log in</Link> to view the users list.
        </p>
      )}
    </div>
  );
};

export default UsersPage;
