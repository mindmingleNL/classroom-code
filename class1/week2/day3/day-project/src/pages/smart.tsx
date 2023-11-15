import { useState } from "react";

const SmartPage = () => {
  //   let count = 0;
  const [count, setCount] = useState(0);
  const [getGreeting, setGreeting] = useState("hi!");
  //   count.get()
  //   count.set(5)
  //   count.set(count.get() + 1)

  const increase = () => {
    setCount(count + 1);
    // count = count + 1;
    // console.log(count);
  };

  const decrease = () => {
    setCount(count - 1);
    // count = count - 1;
    // console.log(count);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p> Count is: {count}</p>
      <button onClick={increase}>🔼</button>
      <button onClick={decrease}>🔽</button>
      <button onClick={reset}>🔄</button>
      <br />
      <br />
      <br />
      <p>{getGreeting}</p>
      <button
        onClick={() => {
          setGreeting("hoi");
        }}
      >
        Hoi
      </button>
      <button
        onClick={() => {
          setGreeting("ohayo");
        }}
      >
        Ohayo
      </button>
      <button
        onClick={() => {
          setGreeting("privet");
        }}
      >
        Privet
      </button>
      <button
        onClick={() => {
          setGreeting("salam");
        }}
      >
        Salam
      </button>
      <button
        onClick={() => {
          setGreeting("namaste");
        }}
      >
        Namaste
      </button>
      <button
        onClick={() => {
          setGreeting(getGreeting.toUpperCase());
        }}
      >
        SCREAM
      </button>
    </div>
  );
};

export default SmartPage;
