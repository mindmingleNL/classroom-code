import { useState } from "react";
const Cats = () => {
  const [cats, setCats] = useState<string>("😺");
  const addCat = () => {
    setCats(cats + "🦁");
  };

  return (
    <div>
      <h1>Hello Cats</h1>
      <p>{cats}</p>
      <button onClick={addCat}>Add cats</button>
    </div>
  );
};

export default Cats;
