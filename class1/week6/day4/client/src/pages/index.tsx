import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <h1 className="text-2xl font-extrabold">Welcome</h1>
      <p>We should test this site!</p>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmailtrap.io%2Fwp-content%2Fuploads%2F2020%2F06%2Ftesting_meme1.jpg&f=1&nofb=1&ipt=62e8af2b2b2957d3e3bb35be07ca453e6ad85a85f776e23e5c269fca5cac2c97&ipo=images" />
    </main>
  );
}
