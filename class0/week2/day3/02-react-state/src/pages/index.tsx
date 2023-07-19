import { useState } from "react";

const initialState = {
  count: 0
};

const Home = () => {
  // Create a memory for React
  const [countObj, setCountObj] = useState(initialState);
  // const [valueName, functionToChangeValueName] = useState(startingValue)

  // Event Handler -> A function that handles an event
  const handleClick = () => {
    /**
     * THE WRONG WAY: USE THE EXISTING OBJECT 👇
     */
    // countObj.count = countObj.count + 1;
    // setCountObj(countObj);

    /**
     * THE CORRECT WAY: CREATE A NEW OBJECT 👇
     */
    const newCountObj = { ...countObj };
    newCountObj.count = newCountObj.count + 1;
    // Update our state
    setCountObj(newCountObj);
  };

  return (
    <div className="button-container">
      <h1>Homepage</h1>
      <h2>Our count is equal to {countObj.count}</h2>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default Home;
