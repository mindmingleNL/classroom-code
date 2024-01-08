import { useState } from "react";
import vergunningen from "./../../data/vergunningen.json";

type Filters = "In behandeling" | "Goedgekeurd" | "Afgewezen" | "All";

const IndexVergunningenPage = () => {
  // useState aanmaken voor de current filter
  // op basis van de current filter filteren we de vergunningen
  const [getFilter, setFilter] = useState<Filters>("All");

  // Status filteren
  const clickHandler1 = () => {
    console.log("Filter In Behandeling");
  };

  const clickHandler2 = () => {
    console.log("Filter Goedgekeurd");
  };

  const clickHandler = (status: Filters) => {
    console.log(`Filter ${status}`);
    // useState gebruiken
    setFilter(status);
  };

  return (
    <div>
      <h1>VERGUNNING</h1>
      <h2>FILTER: {getFilter}</h2>
      <button onClick={() => clickHandler("All")}>Alle Vergunningen</button>
      <button onClick={() => clickHandler("In behandeling")}>
        In Behandeling
      </button>
      <button onClick={() => clickHandler("Goedgekeurd")}>Goedgekeurd</button>
      <button onClick={() => clickHandler("Afgewezen")}>Afgewezen</button>
      <ul>
        {vergunningen
          .filter((vergunning) => {
            // Als we de getFilter met een waarde van "Alle" hebben, wil ik alle vergunningen
            if (getFilter === "All") {
              return true;
            } else {
              const behouden = vergunning.status === getFilter;
              return behouden;
            }
          })
          .map((vergunning) => {
            return (
              <li key={vergunning.id}>
                <p>{vergunning.aanvrager}</p>
                <p>{vergunning.status}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default IndexVergunningenPage;
