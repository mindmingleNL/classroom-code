import NavBar from "@/components/NavBar";
import { ReactNode, useState } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = (props: BaseLayoutProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  return (
    <>
      <NavBar variant={darkMode ? "dark" : "light"} />
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>
      <main className={darkMode ? "main-dark" : "main-light"}>
        {props.children}
      </main>
    </>
  );
};

export default BaseLayout;
