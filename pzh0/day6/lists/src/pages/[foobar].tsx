import { useRouter } from "next/router";

const DynaPage = () => {
  const router = useRouter();
  console.log(router);

  const idFromUrl = Number(router.query.foobar);
  return (
    <>
      <h1>pages/id</h1>
      <p>{idFromUrl > 5 ? "Groot getal" : "Klein getal"}</p>
      <p>{idFromUrl === 100 ? "Honderd" : null}</p>
      <p>{idFromUrl === 100 && "Honderd"}</p>
    </>
  );
};

// T && T = T
// T && F = F
// F && X = F

export default DynaPage;
