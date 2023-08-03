import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const [token, setToken] = useState<null | string>(null);
  useEffect(() => {
    const tokenFromLS = localStorage.getItem("token");
    if (tokenFromLS) {
      setToken(tokenFromLS);
    }
  }, []);

  const handleClick = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  return (
    <div className="nav-bar">
      <Link href={"/"}>Home</Link>
      {token ? (
        <button onClick={handleClick}>Logout</button>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </div>
  );
};

export default NavigationBar;
