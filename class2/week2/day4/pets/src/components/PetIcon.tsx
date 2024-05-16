export type animalKind = "dog" | "cat" | "duck" | "monkey" | "snake";

interface PetIconProps {
  favorite: animalKind;
}

const PetIcon = (props: PetIconProps) => {
  return (
    <span className="pet-icon">
      {props.favorite === "dog"
        ? "🐶"
        : props.favorite === "cat"
        ? "🐱"
        : props.favorite === "duck"
        ? "🦆"
        : props.favorite === "monkey"
        ? "🦍"
        : props.favorite === "snake"
        ? "🐍"
        : "❌"}
    </span>
  );
};

export default PetIcon;
