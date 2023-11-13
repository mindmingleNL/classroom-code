import { Greeter } from "@/components/Greeter";

const About = () => {
  return (
    <div>
      <p>Welcome to about!</p>
      <Greeter target="Aiden" happy={100}></Greeter>
    </div>
  );
};

export default About;
