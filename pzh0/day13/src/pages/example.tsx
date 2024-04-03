import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  return (
    <div>
      <nav className="py-6 px-20">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-5xl text-orange-500">
              🦁 PZH
            </Link>
          </li>

          <li>
            <Link href="/inloggen">Inloggen</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const DNABalk = () => {
  return (
    <img
      src="https://lta.zuid-holland.nl/static/agenda/images/DNA%20Balk.b9fad63589eb.png"
      className="absolute right-0 -z-10"
    />
  );
};

const ExamplePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Als je naar md gaat wil je de state altijd op open zetten

  return (
    <div className="">
      <Navigation />
      <DNABalk />
      <div className="flex flex-col md:flex-row px-8 gap-12">
        <div className="md:w-2/5 pr-24 md:pr-0">
          <div>
            <span className="text-sm font-light text-blue-900">
              Omgevingsbeleid
            </span>
            <h2 className="text-xl font-semibold text-blue-900  relative z-20">
              Lange Termijn Agenda
            </h2>
            <span className="bg-red-100 text-red-700 text-sm px-4 py-2 rounded relative z-10 mt-1 inline-block">
              Vastgesteld door PS
            </span>
          </div>

          <button
            className="md:hidden w-full mt-8 border-t border-b py-2 pl-2 hover:bg-slate-200 cursor-pointer text-center font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            Open Menu: {isOpen ? "open" : "dicht"}
          </button>

          <div className={isOpen ? "" : "hidden md:block"}>
            <nav className="mt-8">
              <ul>
                <li className="border-t border-b py-2 pl-2 hover:bg-slate-200 cursor-pointer">
                  Inleiding
                </li>
              </ul>
            </nav>
            <span className="mt-6 mb-2 inline-block font-bold">
              Categorieën
            </span>
            <nav>
              <ul>
                <li className="border-t py-2 pl-2 hover:bg-slate-200 cursor-pointer">
                  Verkenningen
                </li>
                <li className="border-t py-2 pl-2 hover:bg-slate-200 cursor-pointer border-b">
                  Startnotities
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="md:w-3/5 pr-24">
          <h1 className="text-5xl text-blue-900 font-semibold mb-4">
            2. Startnotities
          </h1>
          <p className="text-slate-800">
            Een startnotitie wordt opgesteld als beleidsaanpassingen gewenst
            zijn. Een startnotitie beschrijft in ieder geval: a) de reden waarom
            een beleidsaanpassing nodig is (wat is het probleem), b) de
            reikwijdte waarbinnen naar beleidsopties gezocht gaat worden, c) op
            welke wijze participatie vorm krijgt en d) de planning voor
            oplevering van de ontwerp-beleidsaanpassing(en). Startnotities
            worden waar mogelijk gelijktijdig aangeboden aan Provinciale Staten
            voor bespreking. Daarna start het traject van daadwerkelijke
            beleidsaanpassing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
