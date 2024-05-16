import { useRouter } from "next/router";

const fakeDb = [
  { id: 1, name: "Brandonmon", type: "fire" },
  { id: 2, name: "Markachu", type: "normal" },
  { id: 3, name: "Trangmon", type: "water" },
  { id: 4, name: "Nargizachu", type: "flying" },
];

const BarPage = () => {
  const router = useRouter();
  console.log(router.query);
  const idOfPokemonAsStr = router.query.pokeId;
  const idOfPokemonAsNmbr = Number(idOfPokemonAsStr);
  // ROUTING IS DONE

  if (isNaN(idOfPokemonAsNmbr)) {
    return <p>You messed up! (id should be a number)</p>;
  }

  const pokemonFound = fakeDb.find(
    (pokemon) => pokemon.id === idOfPokemonAsNmbr
  );

  if (pokemonFound === undefined) {
    return <p>You messed up! (Pokemon not found)</p>;
  }

  return (
    <>
      <h1>Dynamic Bar</h1>
      <p>{pokemonFound.name}</p>
      <p>{pokemonFound.type}</p>
    </>
  );
};

export default BarPage;
