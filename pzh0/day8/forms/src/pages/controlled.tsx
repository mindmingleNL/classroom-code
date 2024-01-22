import { useState } from "react";

interface Sandwich {
  bread: optionsFromArr;
  vega: boolean;
  orderFor: string;
}

const breadOptionArr = ["white", "brown", "herb", "cheese", "french"] as const;

type optionsFromArr = (typeof breadOptionArr)[number];

const Controlled = () => {
  const [sandwich, setSandwich] = useState<Sandwich>({
    bread: "cheese",
    vega: false,
    orderFor: "Swen",
  });
  const [name, setName] = useState<string>("Constantijn");

  return (
    <>
      <h1>Your Sandwich</h1>
      <p>Bread: {sandwich.bread}</p>
      {sandwich.vega ? <p>🌱</p> : <p>❌</p>}
      <p>Order for: {sandwich.orderFor}</p>

      <label>Bread</label>
      <select
        id="breadType"
        name="breadType"
        value={sandwich.bread}
        onChange={(e) =>
          setSandwich({
            ...sandwich,
            // bread: e.target.value as Sandwich["bread"],
            bread: e.target.value as optionsFromArr,
          })
        }
      >
        {breadOptionArr.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* <label htmlFor="username">What is your name?</label>
      <input
        onChange={(e) => setName(e.currentTarget.value)}
        value={name}
        id="username"
      />
      <h2>Hello {name}</h2>
      <button onClick={() => setName("Aron")}>Update</button> */}
    </>
  );
};

export default Controlled;
