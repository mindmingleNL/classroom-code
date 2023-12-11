import MyButton from "@/components/MyButton";

function Home() {
  const helloWorldFunction = () => console.log("Hello World");
  return (
    <main>
      <h1>Hello World!</h1>
      {/* Hello World weergeven */}
      <MyButton buttonText="Hello World" mijnFunctie={helloWorldFunction} />
      {/* Click to login */}
      <MyButton buttonText="Login" mijnFunctie={() => console.log("Login!")} />
      {/* Click to go to contact */}
      <MyButton
        buttonText="Contact"
        mijnFunctie={() => console.log("Naar de contact pagina")}
      />
    </main>
  );
}

export default Home;
