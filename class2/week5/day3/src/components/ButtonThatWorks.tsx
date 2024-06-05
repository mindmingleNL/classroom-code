interface ButtonThatWorksProps {
  label: string;
  className?: string;
  onClick: () => void;
}

export const ButtonThatWorks = ({
  label,
  className,
  onClick,
}: ButtonThatWorksProps) => {
  // const showThatItWorks = () => {
  //   alert("It works!");
  // };

  return (
    <>
      <button
        className={`button ${className}`}
        onClick={() => {
          // do something
          // showThatItWorks();
          onClick();
        }}
      >
        {label}
      </button>
    </>
  );
};
