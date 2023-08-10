import Link from "next/link";

type NavBarVariant = "light" | "dark";

interface NavBarProps {
  variant: NavBarVariant;
}

const NavBar = (props: NavBarProps) => {
  const styleOptions: Record<NavBarVariant, string> = {
    light: "light",
    dark: "dark",
  };

  return (
    <nav className={`navbar ${styleOptions[props.variant]}`}>
      <Link href="/">Home</Link>
      <Link href="/two">Two</Link>
    </nav>
  );
};

export default NavBar;
