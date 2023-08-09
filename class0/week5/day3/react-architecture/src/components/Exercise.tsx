import { ReactNode } from "react";

interface ExerciseProps {
  children: ReactNode;
}
const Exercise = (props: ExerciseProps) => {
  return (
    <div className="exercise">
      <h1>🛠️ Exercise</h1>
      {props.children}
      <button>Share</button>
    </div>
  );
};

export default Exercise;
