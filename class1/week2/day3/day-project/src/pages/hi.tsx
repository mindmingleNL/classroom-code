const HiPage = () => {
  const sayHi = (name: string) => {
    console.log(`Hi ${name}!`);
  };

  return (
    <div>
      <button onClick={() => sayHi("Swen")}>Click me!👆</button>
    </div>
  );
};

export default HiPage;
