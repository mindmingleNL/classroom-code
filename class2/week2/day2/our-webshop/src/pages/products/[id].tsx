import products from "../../data/laptops.json";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  console.log(router.query);

  const id = Number(router.query.id);

  if (isNaN(id)) {
    return <p>Oops its a string</p>;
  }

  const product = products.find((product) => product.id === id);

  if (product === undefined) {
    return <p>We dont have that product!</p>;
  }

  return (
    <main>
      <h1>Product Page for product {product?.name}</h1>
    </main>
  );
}
