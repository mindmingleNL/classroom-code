interface GreetingProps {
  name: string;
  timeOfDay: string;
}

const Greeting = (props: GreetingProps) => {
  return (
    <h1>
      Hello {props.timeOfDay}! {props.name}
    </h1>
  );
};

export default function Home() {
  return (
    <div>
      <h1 className="my-greeting">Hello world!</h1>
      <Greeting name="Winnie" timeOfDay="Morning" />
      <Greeting name="Max" timeOfDay="Evening" />
    </div>
  );
}
