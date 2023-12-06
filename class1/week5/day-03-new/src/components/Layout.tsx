import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/protected">Protected</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        <span>2023 CopyRight by law in Utrecht!</span>
      </footer>
    </div>
  );
};

export default Layout;
