import React, { useState, ReactNode } from "react";

interface ToggleContentProps {
  title: string;
  children: ReactNode;
}

const ToggleContent = ({ title, children }: ToggleContentProps) => {
  const [isShown, setIsShown] = useState(false);

  const toggleContent = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="toggle-container">
      <button type="button" className="toggle-section" onClick={toggleContent}>
        {isShown ? "Hide" : "Show"} {title}
      </button>
      {isShown && <div>{children}</div>}
    </div>
  );
};

export default ToggleContent;
