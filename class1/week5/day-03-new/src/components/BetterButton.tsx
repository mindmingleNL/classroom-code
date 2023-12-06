import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "primary" | "secondary" | "warning";
  onClick?: () => void;
}

const Button = ({ children, variant, onClick }: ButtonProps) => {
  // const onClick = () => window.alert("Clicked");

  // Add a prop to make this button reusable
  // We can then have two different styled buttons
  return (
    <button onClick={onClick} className={`button ${variant}`}>
      {children}
    </button>
  );
};

export default Button;
