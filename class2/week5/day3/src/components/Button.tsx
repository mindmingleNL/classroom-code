import { useState } from "react";

interface ButtonProps {
  label: string;
  className?: string;
}

export const Button = ({ label, className }: ButtonProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={`button ${className}`}
      onClick={() => setClicked(!clicked)}
    >
      {label}
    </button>
  );
};
