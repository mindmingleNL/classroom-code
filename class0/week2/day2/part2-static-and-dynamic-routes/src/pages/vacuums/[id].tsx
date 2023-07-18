import VacuumCard from "@/components/VacuumCard";
import vacuums from "@/data/vacuums.json";
import Link from "next/link";
import { useRouter } from "next/router";

const VacuumOne = () => {
  const router = useRouter();
  const { id } = router.query;

  // Check the type of a value
  const idIsOfTypeString = typeof id === "string";

  if (!id || !idIsOfTypeString) {
    return <h1>No ID in URL! 🐸</h1>;
  }

  const idFromUrl = parseInt(id);
  const vacuumFromUrl = vacuums.find((vacuum) => vacuum.id === idFromUrl);

  if (vacuumFromUrl === undefined) {
    return <h1>Product not found! 🐸</h1>;
  } else {
    return (
      <div className="product-page">
        <div>
          <Link className="back-button" href="/">
            👈 Back
          </Link>
          <VacuumCard
            id={vacuumFromUrl.id}
            name={vacuumFromUrl.name}
            reviews={vacuumFromUrl.reviews}
            type={vacuumFromUrl.type}
            suction_power={vacuumFromUrl.suction_power}
            floor_type={vacuumFromUrl.floor_type}
            retail_price={vacuumFromUrl.retail_price}
            availability={vacuumFromUrl.availability}
            pickup={vacuumFromUrl.pickup}
          />
        </div>
      </div>
    );
  }
};

export default VacuumOne;
