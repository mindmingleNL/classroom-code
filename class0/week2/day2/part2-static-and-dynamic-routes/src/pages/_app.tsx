import "@/styles/reset.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={russoOne.className}>
      <Component {...pageProps} />
    </main>
  );
}
