import { useState, useEffect } from "react";

interface MoodProps {
  startAs: boolean;
}

const Mood = (props: MoodProps) => {
  // let mood = true;
  const [getMood, setMood] = useState<boolean>(props.startAs);

  useEffect(() => {
    console.log(getMood);
    console.log("Something happened!🤓");
  }, []);

  // return <h1>Hello from mood!</h1>

  const handleHappy = () => {
    setMood(true);
    console.log("Happy was clicked");
  };

  const handleSad = () => {
    setMood(false);
    console.log("Sad was clicked");
  };

  const handleSwitch = () => {
    setMood(!getMood);
    console.log("Switch was clicked");
  };

  return (
    <div className="mood-box">
      <h2>{getMood === true ? "🙂" : "😕"}</h2>
      <button onClick={handleHappy}>Happy</button>
      <button onClick={handleSad}>Sad</button>
      <button onClick={handleSwitch}>Switch</button>
    </div>
  );
};

export default Mood;
