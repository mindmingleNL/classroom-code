// A REACT COMPONENT IS A FUNCTION
// THAT RETURNS HTML/JSX

// DRY: Don't Repeat Yourself
// WET: Write Everything Twice

// {target: "Artem"}

interface GreeterProps {
  target: string;
  happy: number;
}

const Greeter = (props: GreeterProps) => {
  return (
    <div className="greeter">
      <h2>Hello {props.target}</h2>
      <p>happy: {props.happy}</p>
      <button>Hello!</button>
    </div>
  );
};

// const Greeter2 = ({ target, happy }: GreeterProps) => {
//   return (
//     <div className="greeter">
//       <h2>Hello {target}</h2>
//       <p>happy: {happy}</p>
//       <button>Hello!</button>
//     </div>
//   );
// };

export default function Home() {
  return (
    <div>
      <a href="/home">Home</a>
      <h1>Hello React</h1>
      <Greeter target="Artem" happy={100} />

      <Greeter happy={100} target="Shruti"></Greeter>

      <Greeter happy={100} target="Tannaz"></Greeter>

      <Greeter happy={23} target="Marisha"></Greeter>
      <Greeter happy={10} target="Alena" />
      <Greeter happy={0} target="Swen" />
    </div>
  );
}
