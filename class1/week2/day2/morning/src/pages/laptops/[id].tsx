import laptops from "./../../data/laptops.json";
import { useRouter } from "next/router";

const LaptopPage = () => {
  const router = useRouter();
  // http://localhost:3000/laptops/2
  // In the example above, id will be "2"
  const id = router.query.id;

  // We have the id of the laptop we want to display
  // We also have the array of all the laptops
  // So we need to find the laptop with that id

  return (
    <div>
      <h1>Title of the laptop</h1>
      <p>Price: $...</p>
    </div>
  );
};

export default LaptopPage;
