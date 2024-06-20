import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";
import { ShoppingCart } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} grid place-items-center bg-orange-200 w-screen h-screen`}
    >
      <div className="bg-red-500 flex bg-slate-50 rounded-md mx-8 overflow-hidden">
        <Image
          className="w-80"
          src="https://picsum.photos/300/400"
          width={300}
          height={400}
          alt="perfume"
        />
        <div className="w-80 px-8 py-4 flex flex-col gap-4">
          <h2 className="uppercase tracking-[0.3rem] text-slate-500">
            Perfume
          </h2>
          <h1 className={`text-4xl font-extrabold ${playfair.className}`}>
            Gabrielle Essence Eau De Parfum
          </h1>

          <p className="text-slate-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio nam
            laboriosam ducimus consequatur sequi obcaecati dolore culpa deleniti
            quia maiores.
          </p>
          <div className="flex gap-2">
            <p className={`text-3xl text-green-700 ${playfair.className}`}>
              €149.99
            </p>
            <p className="line-through text-slate-500 text-sm">€169.99</p>
          </div>
          <button className="bg-green-700 px-6 py-4 rounded-lg text-white flex gap-2">
            <ShoppingCart className="" /> Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
