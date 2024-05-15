import { useState } from "react";
import { ProductCard, ProductProps } from "../components/Product";
import laptops from "../data/laptops.json";

export default function Home() {
  const [getProducts, setProducts] = useState([
    "laptop",
    "smartphone",
    "tv",
    "DJI",
    "gaming console",
  ]);

  // 1. make a function to add tablet
  const addProduct = (product: string) => {
    // 2. add tablet to array
    const allProducts = [...getProducts, product];
    setProducts(allProducts);
  };

  return (
    <main>
      <h1>Our Webshop</h1>
      {/* 4. display */}
      <p>I want a couple of products: {getProducts.join(", ")}</p>

      {/* 3. make the button use the function */}
      <button onClick={() => addProduct("tablet")}>Add tablet</button>

      <hr />

      <ul className="product-list">
        {laptops
          .filter((laptop) => laptop.price > 500)
          .sort((a, b) => a.price - b.price)
          .map((laptop) => (
            <ProductCard
              key={laptop.name}
              model={laptop.name}
              category={laptop.category as ProductProps["category"]}
              price={laptop.price}
              onSale={laptop.onSale}
              discount={laptop.discount}
            />
          ))}
      </ul>
    </main>
  );
}
