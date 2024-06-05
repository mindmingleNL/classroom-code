import { useState } from "react";

interface BetterButtonProps {
  label: string;
  variant: "primary" | "secondary" | "tertiary";
}

export const BetterButton = ({ label, variant }: BetterButtonProps) => {
  const [clicked, setClicked] = useState(false);

  // Setting the classname based on what is variant
  let className = "";
  if (variant === "secondary") {
    className = "button--outlined";
  } else if (variant === "tertiary") {
    className = "button--tertiary";
  }

  // This is the same, but using switch/case
  // switch (variant) {
  //   case "primary":
  //     className = "";
  //   case "secondary":
  //     className = "button--outlined";
  //   case "tertiary":
  //     className = "button--tertiary";
  // }

  // This is a more advanced way
  // const variantClassNames = {
  //   primary: "",
  //   secondary: "button--outlined",
  //   tertiary: "button--tertiary",
  // };
  // console.log("Variant:", variant);
  // console.log("Classname: ", variantClassNames.primary);
  // console.log("Classname: ", variantClassNames["primary"]);

  // console.log("Classname: ", variantClassNames[variant]);
  // console.log("Classname: ", variantClassNames["secondary"]);
  // console.log("-----");

  return (
    <button
      className={`button ${className}`}
      // className={`button ${variant === "primary" ? "" : "button--outlined"}`}
      onClick={() => setClicked(!clicked)}
    >
      {label}
    </button>
  );
};
