import Navbar from "../components/Navbar";
import Greeting from "../components/Greeting";
import GreetingToMark from "../components/GreetingToMark";
export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Welcome to Fruits.com 🍎🍌🍑</h1>
      <p>We sell the best fruits, to your doorstep. To change the world!</p>
      {/* <Greeting gName="Swen" emoji="⭐️" happy={false} amount={10} />
      <Greeting gName="Mark" emoji="⭐️" />
      <Greeting gName="Brandon" emoji="⭐️" />
      <Greeting gName="Nargiz" emoji="⭐️" /> <del></del>
      <Greeting gName="Trang" emoji="⭐️" /> */}
      {/* <GreetingToMark /> */}
    </>
  );
}
