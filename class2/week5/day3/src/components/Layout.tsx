import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      {/* <h1 style={{ marginTop: "90px" }}>{title}</h1> */}
      {children}
      <Footer />
    </>
  );
};
