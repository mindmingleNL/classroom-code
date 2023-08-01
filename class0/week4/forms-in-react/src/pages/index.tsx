import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // We create an async function that will make the axios request for us
    const postFriend = async (name: string, age: number, best: boolean) => {
      await axios.post("http://localhost:3001/friends", {
        name: name,
        age: age,
        isBest: best,
      });
    };
    // Prevent the default browser behaviour
    event.preventDefault();

    // Get out the values
    const friendName = event.currentTarget.friendName.value;
    const friendAge = event.currentTarget.friendAge.value;
    // IMPORTANT: checkbox == checked
    const friendBest = event.currentTarget.friendBest.checked;
    const favoriteDrink = event.currentTarget.favoriteDrink.value;
    // Call your functions
    console.log(favoriteDrink);
    // postFriend(friendName, friendAge, friendBest);
  };
  const [getUserName, setUserName] = useState<string>("Hello");

  const handleChange = (event: any) => {
    setUserName(event.currentTarget.value);
  };
  return (
    <>
      <main className={`${inter.className}`}>
        <h1>Welcome {getUserName}</h1>
        <h2>Add a friend</h2>

        <label htmlFor="your-name">What is your name?</label>
        <input
          id="your-name"
          type="text"
          value={getUserName}
          onChange={handleChange}
        ></input>

        <br />
        <br />
        <br />
        <form onSubmit={handleFormSubmit} className="main-container">
          <label htmlFor="friend-name">What is the name of your friend?</label>
          <input
            id="friend-name"
            type="text"
            name="friendName"
            placeholder="Friend name"
          ></input>

          <label htmlFor="friend-age">Age</label>
          <input
            id="friend-age"
            type="number"
            min="0"
            max="100"
            name="friendAge"
          ></input>

          <label htmlFor="friend-best">Is this your best friend?</label>
          <input id="friend-best" type="checkbox" name="friendBest"></input>

          <label htmlFor="favorite-drink">Favorite drink</label>
          <select id="favorite-drink" name="favoriteDrink">
            <option>🍺 Beer</option>
            <option>🍵 Tea</option>
            <option>☕️ Coffee</option>
          </select>
          <button type="submit">Add friend!</button>
        </form>
      </main>
    </>
  );
}
