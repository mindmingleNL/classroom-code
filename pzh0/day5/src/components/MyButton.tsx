// Een component is een functie die HTML terug geeft
// Een component moet altijd met een hoofdletter beginnen
// Een component moet altijd een return statement hebben
// Laten we een knop component maken
interface MyButtonProps {
  buttonText: string;
  mijnFunctie: () => void;
  className?: string;
}

const MyButton = (props: MyButtonProps) => {
  // We willen de tekst van de knop als argument kunnen meegeven
  // In ons geval is props een object wat er zo uitziet:
  // {
  //    buttonText: "een tekst"
  //    mijnFunctie: () => void // Een functie die niks returned
  //    className: "contact-button" | undefined
  // }
  const buttonText = props.buttonText;
  const mijnFunctie = props.mijnFunctie;
  const className = props.className;
  // Dit is geen normale HTML, maar JSX
  return (
    <button
      className={`button ${className ? className : ""}`}
      onClick={mijnFunctie}
    >
      {buttonText}
    </button>
  );
};

export default MyButton;
