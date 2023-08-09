import { useState } from "react";

interface customButtonProps {
  onButtonClick: () => void;
  mood: string;
  setMood: (mood: string) => void;
}

const CustomButton = (props: customButtonProps) => {
  return (
    <>
      <div>{props.mood}</div>
      <button onClick={props.onButtonClick}>🐥Hello</button>
      <button onClick={() => props.setMood("😢")}>Change Mood</button>
    </>
  );
};

export default CustomButton;
