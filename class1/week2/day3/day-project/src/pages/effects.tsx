import { useState, useEffect } from "react";

const EffectsPage = () => {
  const [getCount, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Hello from inside the useEffect");
  }, []);

  useEffect(() => {
    console.log("Hello from inside the second useEffect, count has changed!");
  }, [getCount]);

  console.log("Hello Effects!");
  return (
    <div>
      <p>Count is: {getCount}</p>
      <button onClick={() => setCount(getCount + 1)}>+</button>
    </div>
  );
};

export default EffectsPage;
