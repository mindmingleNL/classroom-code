import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>
        Non nostrud non id velit consequat. Anim pariatur ea cupidatat sit.
        Fugiat ea commodo ad ea officia culpa id voluptate dolore velit. Tempor
        consectetur exercitation consequat commodo duis est. Occaecat consequat
        proident deserunt tempor proident tempor.
      </p>
      <a
        style={{
          display: "block"
        }}
        href="/"
      >
        HALLO
      </a>
    </div>
  );
}
