import { useState, useEffect } from "react";

interface MoodProps {
  startAs: boolean;
}

const Mood = (props: MoodProps) => {
  // let mood = true;

  // useEffect takes two arguments:
  // 1. A function to run when the effect happens
  // 2. An array of values to keep track of (Dependency array)
  //    - If it is empty ([]), it will only run when the component gets born
  // - Every useEffect runs once in the beginning of time
  const [getMood, setMood] = useState<boolean>(props.startAs);

  useEffect(() => {
    console.log("Yummy!");
  }, [getMood]);

  const handleHappy = () => {
    // mood = true
    setMood(true);
    console.log("happy was clicked");
  };

  const handleSad = () => {
    setMood(false);
    console.log("sad was clicked");
  };

  const handleSwitch = () => {
    setMood(!getMood);
    console.log("switch was clicked");
  };

  return (
    <div className="mood-box">
      <h2>{getMood === true ? "🙂" : "😟"}</h2>
      <button onClick={handleHappy}>Happy</button>
      <button onClick={handleSad}>Sad</button>
      <button onClick={handleSwitch}>Switch</button>
    </div>
  );
};

export default Mood;
