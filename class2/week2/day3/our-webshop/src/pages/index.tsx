import laptops from "../data/laptops.json";

interface ProductProps {
  model: string;
  category: "Laptop" | "Smartphone" | "Gaming Console";
  price: number;
  onSale: boolean;
  discount: number | null;
}

const Product = ({
  model,
  category,
  price,
  onSale,
  discount,
}: ProductProps) => {
  return (
    <li className="product-list__card">
      <h2>{model}</h2>
      <p>Category: {category}</p>
      <p>Get it now for €{price}</p>

      {onSale && discount !== null ? (
        <strong>ON SALE: €{discount}</strong>
      ) : null}

      <button className="product-list__buy-button">Buy</button>
    </li>
  );
};

export default function Home() {
  return (
    <main>
      <h1>Our Webshop</h1>

      <ul className="product-list">
        {laptops
          .filter((laptop) => laptop.price > 500)
          .sort((a, b) => a.price - b.price)
          .map((laptop) => (
            <Product
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
