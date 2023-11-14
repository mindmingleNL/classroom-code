import { useRouter } from "next/router";

const TVPage = () => {
  const router = useRouter();
  const id = router.query.id;

  //localhost:3000/tvs/1
  // We want to know the id of the tv we are viewing
  // We need to get that from the URL

  // In the real world
  // We would not have all the data ready when coding
  // So we would need to get the data from the backend
  // So then we can get the data of the TV from the back end
  // Based on the ID in URL

  return <h1>Get data from back end with id: {id}</h1>;
};

export default TVPage;
