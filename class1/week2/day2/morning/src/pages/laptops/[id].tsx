import laptops from "./../../data/laptops.json";
import { useRouter } from "next/router";

const LaptopPage = () => {
  const router = useRouter();
  // http://localhost:3000/laptops/2
  // In the example above, id will be "2"
  const id = router.query.id;

  if (typeof id !== "string") {
    return <div>Invalid URL!</div>;
  }

  // Data validation: Ensure the 'id' is a number
  const cowId = parseInt(id);
  if (isNaN(cowId)) {
    // Handle the error, perhaps show a not found message or redirect
    return <p>Cow not found!</p>;
  }

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

import { useRouter } from "next/router";

function CowProfile() {
  const router = useRouter();
  const { id } = router.query;

  // Data validation: Ensure the 'id' is a number
  const cowId = parseInt(id, 10);
  if (isNaN(cowId)) {
    // Handle the error, perhaps show a not found message or redirect
    return <p>Cow not found!</p>;
  }

  // Now 'cowId' is ready and we are sure it is a number
  // We can then use it, for example to find an animal in an array
  // Let's say we have this array of cows
  const cows = [
    { id: 1, name: "Bessie" },
    { id: 2, name: "MooMoo" },
    { id: 10, name: "Buttercup" }
    // ... more cows
  ];

  // We can then find the cow with the matching 'id'
  const cow = cows.find((cow) => cow.id === cowId);

  // If we couldn't find the cow, show a not found message
  if (!cow) {
    return <p>Cow not found!</p>;
  }

  // If we found the cow, render the profile
  return (
    <div>
      <h1>Cow Profile</h1>
      <p>Welcome to the profile of {cow.name}!</p>
    </div>
  );
}

export default CowProfile;
