import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main>Hello {process.env["NEXT_PUBLIC_API_URL"]}</main>;
}
