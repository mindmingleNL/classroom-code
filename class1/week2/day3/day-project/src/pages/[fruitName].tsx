import { useRouter } from "next/router";
import { fruits } from "@/data/fruits";

const FruitNamePage = () => {
  const router = useRouter();

  const fruitNameFromURL = router.query.fruitName;

  const fruitThatIFound = fruits.find(
    (fruit) => fruit.name === fruitNameFromURL
  );

  if (fruitThatIFound === undefined) {
    return <p>FRUIT NOT FOUND!😡</p>;
  } else {
    return (
      <div>
        <p>Hello welcome to {fruitThatIFound.name} page</p>
        <p>My color is {fruitThatIFound.color}</p>
      </div>
    );
  }
};

export default FruitNamePage;
