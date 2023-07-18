import Head from "next/head";
import fruits from "../data/fruits.json";
import FruitItem from "../components/FruitItem";

export interface Fruit {
  name: string;
  isOrganic: boolean;
  price: number;
  taste: string;
}

export default function Home() {
  const renderFruit = (fruit: Fruit) => {
    return <FruitItem fruit={fruit} />;
  };
  return (
    <>
      <Head>
        <title>Fruits.com Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to Fruits.com</h1>
      <ul>
        {fruits
          .filter((fruit: Fruit) => fruit.isOrganic)
          .sort((a: Fruit, b: Fruit) => {
            return b.price - a.price;
          })
          .map(renderFruit)}
      </ul>
    </>
  );
}
