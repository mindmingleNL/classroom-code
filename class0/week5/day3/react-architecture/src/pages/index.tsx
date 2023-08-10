import Article from "@/components/Article";
import CustomButton from "@/components/CustomButton";
import Exercise from "@/components/Exercise";
import ExerciseList from "@/components/ExerciseList";
import BaseLayout from "@/components/BaseLayout";
import WithSayHi from "@/components/WithSayHi";
import { useState } from "react";

export default function Home() {
  const [mood, setMood] = useState<string>("😁");
  const handleCustomClick = () => console.log("Moooeeee🐄");
  return (
    <BaseLayout>
      <h1>Hello, React Architecture!</h1>
      <p>{mood}</p>
      <CustomButton
        onButtonClick={handleCustomClick}
        mood={mood}
        setMood={setMood}
      />

      <div>
        <Article variant="important">
          <h1>Something happened!</h1>
          <p>Somewhere today, something has happened</p>
          <img src="https://picsum.photos/200" alt="Something" />
        </Article>

        <Article variant="normal">
          <h1>Nothing happened</h1>
          <p>Nowhere today, nothing has happened</p>
        </Article>

        <Article variant="old">
          <h1>Nothing happened</h1>
          <p>Nowhere today, nothing has happened</p>
        </Article>

        <ExerciseList />
      </div>
    </BaseLayout>
  );
}
