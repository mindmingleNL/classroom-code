import Link from "next/link";
import { ReactNode } from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <footer>
        <span>2023 CopyRight by law in Utrecht!</span>
      </footer>
    </div>
  );
};

export default Layout;
