import { ChangeEvent, useState } from "react";

const ControlledState = () => {
  const [name, setName] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <h1>Hello {name}!</h1>
      <button onClick={() => setName("CLEARED")}>Clear state</button>
      <label htmlFor="nameField">What is your name?</label>
      <input
        id="nameField"
        type="text"
        value={name}
        placeholder="your name"
        onChange={handleInputChange}
      ></input>
    </>
  );
};

export default ControlledState;
