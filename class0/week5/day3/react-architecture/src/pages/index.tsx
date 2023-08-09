import Article from "@/components/Article";
import Exercise from "@/components/Exercise";
import ExerciseList from "@/components/ExerciseList";
import WithSayHi from "@/components/WithSayHi";

export default function Home() {
  return (
    <>
      <h1>Hello, React Architecture!</h1>
      <div>
        <Article>
          <h1>Something happened!</h1>
          <p>Somewhere today, something has happened</p>
          <img src="https://picsum.photos/200" alt="Something" />
        </Article>

        <Article>
          <h1>Nothing happened</h1>
          <p>Nowhere today, nothing has happened</p>
        </Article>

        <ExerciseList />
      </div>
    </>
  );
}
