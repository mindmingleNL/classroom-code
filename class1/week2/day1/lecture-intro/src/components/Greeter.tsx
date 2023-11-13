interface GreeterProps {
  target: string;
  happy: number;
}

export const Greeter = (props: GreeterProps) => {
  return (
    <div className="greeter">
      <h2>Hello {props.target}</h2>
      <p>happy: {props.happy}</p>
      <button>Hello!</button>
    </div>
  );
};
