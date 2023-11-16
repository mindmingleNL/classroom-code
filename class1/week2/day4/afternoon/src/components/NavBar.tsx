import Link from "next/link";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/farms">Farms</Link>
        </li>
        <li>
          <Link href="/animals">Animals</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
