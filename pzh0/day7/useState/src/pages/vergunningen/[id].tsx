import { useParams } from "next/navigation";
import { useRouter } from "next/router";

// Je wil de parameter uit de URL halen
const IDPage = () => {
  const router = useRouter();
  const { id } = router.query;
  // params is een object: { id: 8 }

  // const params = useParams();
  // console.log(params);

  return (
    <div>
      <h1>Vergunningen {id}</h1>
    </div>
  );
};

export default IDPage;
