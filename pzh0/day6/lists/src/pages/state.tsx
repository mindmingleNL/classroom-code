import { useState } from "react";

const StatePage = () => {
  const [getCounter, setCounter] = useState<number>(5);

  const increase = () => {
    setCounter(getCounter + 1);
  };

  const decrease = () => {
    setCounter(getCounter - 1);
  };

  return (
    <>
      <h1>State</h1>
      <p>Counter is {getCounter}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={() => setCounter(0)}>reset</button>
    </>
  );
};

export default StatePage;
