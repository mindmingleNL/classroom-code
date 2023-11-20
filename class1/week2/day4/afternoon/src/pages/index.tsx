import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Afternoon Lecture</title>
      </Head>
      <main>
        <NavBar />
        <h1>Hello World!</h1>
      </main>
    </>
  );
}
