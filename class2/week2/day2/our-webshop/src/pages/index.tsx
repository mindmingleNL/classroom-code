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
  // let onSaleText;
  // if (onSale) {
  //   onSaleText = <strong>ON SALE</strong>;
  // } else {
  //   onSaleText = <small>No sale, sorry</small>;
  // }

  // condition ? positiveResult : negativeResult
  // const onSaleText = onSale ? (
  //   <strong>ON SALE</strong>
  // ) : (
  //   <small>No sale, sorry</small>
  // );

  // Wrong
  // console.log(
  //   if (onSale) {
  //     return '';
  //   }
  // )

  // Valid
  // console.log(
  //   onSale ? <strong>ON SALE</strong> : <small>No sale, sorry</small>
  // )

  return (
    <li className="product-list__card">
      <h2>{model}</h2>
      <p>Category: {category}</p>
      <p>Get it now for €{price}</p>
      {onSale && discount !== null ? (
        <strong>ON SALE: €{discount}</strong>
      ) : null}
      {/* <p>
        On sale:{" "}
        {onSale ? <strong>ON SALE</strong> : <small>No sale, sorry</small>}
      </p> */}
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
          // .sort((laptop1, laptop2) => {
          //   if (laptop1.price > laptop2.price) {
          //     return -1;
          //   } else if (laptop1.price < laptop2.price) {
          //     return 1;
          //   } else {
          //     return 0;
          //   }
          // })

          // Shorter!
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

        {/* <Product model="MacBook Pro 13-inch" category="Laptop" price={1000} />
        <Product model="Dell XPS 15" category="Laptop" price={1200} />
        <Product model="iPhone 13 Pro" category="Smartphone" price={1099} />
        <Product
          model="Samsung Galaxy S22 Ultra"
          category="Smartphone"
          price={1199}
        />
        <Product model="PlayStation 5" category="Gaming Console" price={499} />
        <Product model="Xbox Series X" category="Gaming Console" price={499} /> */}
      </ul>
    </main>
  );
}
