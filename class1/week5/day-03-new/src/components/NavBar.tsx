import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navigation-container">
      <span className="logo">⚡️ Logo</span>
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
  );
};

export default NavBar;
