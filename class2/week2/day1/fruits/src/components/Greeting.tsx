interface GreetingProps {
  gName: string;
  emoji: string;
  happy: boolean;
  amount: number;
}

const Greeting = (props: GreetingProps) => {
  return (
    <div className="greeting">
      <h1>HELLO {props.gName}</h1>
      <div>{props.emoji}</div>
      {/* {if (happy) {
        return <h2>Happy</h2>
      } else {
        return <h2>Sad</h2>
      }} */}
    </div>
  );
};

export default Greeting;
