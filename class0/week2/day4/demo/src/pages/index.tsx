import Head from "next/head";
import Mood from "../components/Mood";
import Farm from "../components/Farm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo day 4</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello world!</h1>

      <Farm />
      {/* <Mood startAs={true} />
      <Mood startAs={false} /> */}
    </>
  );
}
