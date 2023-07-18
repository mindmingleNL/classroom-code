import vacuums from "@/data/vacuums.json";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="page-home">
      <Image
        className="img-banner"
        src="https://media3.giphy.com/media/NV4cSrRYXXwfUcYnua/giphy.gif"
        alt="Gif of cat animation vacuuming"
        width={480}
        height={270}
      />
      <h1>💨 Welcome To Vacuum Valley 💨</h1>
      <h2>
        Selling vacuums <u>that suck</u> since 1999
      </h2>
      <ul className="vacuum-list">
        {vacuums.map((vacuum) => {
          return (
            <li className="vacuum-link">
              <Link
                href={`vacuums/${vacuum.id}`}
                className="vacuum-link-container box-shadow"
              >
                <span>{vacuum.name}</span>
                <div className="vacuum-link-price">
                  <Image
                    className="dollar-sign"
                    src="https://media1.giphy.com/media/l41YoVcd7UhOWIDBK/giphy.gif"
                    alt="Dollar Sign"
                    width={30}
                    height={30}
                  />
                  <span>{vacuum.sale_price}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
