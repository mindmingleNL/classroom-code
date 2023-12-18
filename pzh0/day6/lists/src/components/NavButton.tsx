import { useRouter } from "next/router";

const NavButton = ({ title, href }: { title: string; href: string }) => {
  const router = useRouter();
  if (router.asPath !== href) {
    return <a href={href}>{title}</a>;
  } else {
    return <p>We zijn er al!</p>;
  }
};

export default NavButton;
