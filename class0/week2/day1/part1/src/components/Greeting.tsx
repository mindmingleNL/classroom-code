interface GreetingProps {
  name: string;
}

const Greeting = (props: GreetingProps) => {
  const name = props.name;
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return <h2>Good Morning, {name}! 👋</h2>;
  } else {
    return <h2>Good Afternoon, {name}! 👋</h2>;
  }
};

export default Greeting;
