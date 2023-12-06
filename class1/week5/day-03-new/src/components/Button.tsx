interface ButtonProps {
  content: string;
}

const Button = ({ content }: ButtonProps) => {
  return <button>{content}</button>;
};

export default Button;
