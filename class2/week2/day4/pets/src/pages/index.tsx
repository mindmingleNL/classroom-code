// Battleplan
// - Goal: There should be a button that cycles the favorite animal and updates the website to show that
//  Steps:
//   - create a button x
//   - create state x
//     - state holds active animal x
//   - show the favorite animal x
//   - toggle between animals
//     - onClick
//       - change the active animal

import PetIcon from "@/components/PetIcon";
import { useState } from "react";
import { animalKind } from "@/components/PetIcon";

export default function Home() {
  // const animalOptions = ["dog", "cat", "duck", "monkey", "snake"];
  // const [getFavorite, setFavorite] = useState<number>(0); //this represents the current index
  // setFavorite(getFavorite + 1 === animalOption.length ? 0 : getFavorite + 1 )

  const [getFavorite, setFavorite] = useState<animalKind>("duck");
  return (
    <>
      <h1>Welcome to Pets.com</h1>
      <PetIcon favorite={getFavorite} />
      <h2>The place to manage and track your pets</h2>
      <button
        onClick={() => {
          if (getFavorite === "dog") {
            setFavorite("duck");
          }
          if (getFavorite === "duck") {
            setFavorite("cat");
          }
          if (getFavorite === "cat") {
            setFavorite("monkey");
          }
          if (getFavorite === "monkey") {
            setFavorite("snake");
          }
          if (getFavorite === "snake") {
            setFavorite("dog");
          }
        }}
      >
        Change favorite animal
      </button>
      <p>sdpojdas ksdjiadj nfoufnesaid posdajdw hflkasdfh flsdfhf</p>
      <PetIcon favorite={getFavorite} />
    </>
  );
}
