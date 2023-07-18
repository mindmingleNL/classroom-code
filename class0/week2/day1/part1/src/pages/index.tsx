import Greeting from "@/components/Greeting";

const HomePage = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Greeting name="Max" />
      <Greeting name="Dewi" />
      <Greeting name="Richa" />
    </div>
  );
};

export default HomePage;
