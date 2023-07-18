import VacuumCard from "@/components/VacuumCard";
import vacuums from "@/data/vacuums.json";
import Link from "next/link";
import { useRouter } from "next/router";

const VacuumPage = () => {
  // We create the router
  const router = useRouter();

  // We immediately try to convert the id from the URL to a number with the Number() function
  const idFromUrl = Number(router.query.id);
  // Now we can access the .id property, because our file is called [id].tsx
  // Would we have called it [vacuumNumber].tsx,
  // we would have to use router.query.vacuumNumber

  // We then check if this is a number,
  // with the isNan (is not a number) function
  // If it is NOT a number, we return this <h1>
  if (isNaN(idFromUrl)) {
    return <h1>No valid ID in URL! 🐸</h1>;
  }

  // If we made it this far idFromUrl is a number, hooray! 🎉

  // Now on to find the vacuumFromUrl
  const vacuumFromUrl = vacuums.find((vacuum) => vacuum.id === idFromUrl);

  // If we couldn't find one, we return this <h1>
  if (!vacuumFromUrl) {
    return <h1>Product not found! 🐸</h1>;
  }

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
};

export default VacuumPage;
