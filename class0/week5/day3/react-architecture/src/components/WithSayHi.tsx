import { ReactNode, useEffect } from "react";

interface WithSayHiProps {
  children: ReactNode;
}

const WithSayHi = (props: WithSayHiProps) => {
  useEffect(() => {
    window.alert("hi");
  }, []);
  return props.children;
};

export default WithSayHi;
