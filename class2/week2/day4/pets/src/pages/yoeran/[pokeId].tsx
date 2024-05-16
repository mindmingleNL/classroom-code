import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// We want to get our data from an API that lives on  https://pokeapi.co/ depending on the id in the URL we want to get a different pokemon https://pokeapi.co/api/v2/pokemon/5
// - We need to make an http request x
//   - At the page load
// - We need to store the result of that request somewhere x
//   - useState x
// - We need to show the pokemon in the JSX x
//   - While its loading, we should not show the pokemon

const BarPage = () => {
  const router = useRouter();
  const [getPokeData, setPokeData] = useState(null);

  useEffect(() => {
    // Get the number from the router, it will be a string
    const idOfPokemonAsStr = router.query.pokeId;
    // Turn the string into a number
    const idOfPokemonAsNmbr = Number(idOfPokemonAsStr);

    // Check if the string was really a number
    if (isNaN(idOfPokemonAsNmbr)) {
      console.log("GOT A NAN FOR ID");
      // Stop if it is not
      return;
    }

    // Make GET request to API
    const getPokemonFromApi = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${idOfPokemonAsNmbr}`
      );
      // Turn it into json
      const json = await response.json();
      // Save the data in a useState
      setPokeData(json);
    };

    // Call the function
    getPokemonFromApi();
    // Rerun all of this code when the router updates/changes (because it starts out empty)
  }, [router]);

  if (getPokeData === null) {
    return (
      <>
        <p>Loading ...</p>
      </>
    );
  }

  return (
    <>
      <h1>Dynamic Bar</h1>

      <p>{getPokeData.name}</p>
      <p>This pokemon {getPokeData.height} high</p>
      <img
        src={
          getPokeData.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        }
        alt="pokemon"
      />
    </>
  );
};

export default BarPage;
