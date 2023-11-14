import laptops from "./../data/laptops.json";
// 👆 We don't need to add a type to our imported JSON, in Next.js this is done automatically

interface ProductCardProps {
  title: string;
  price: number;
  sale: number | null;
}

function ProductCard({ title, price, sale }: ProductCardProps) {
  // If sale is a number, we want to display the discounted price
  // If sale is null, we dont want to do anything

  // text-decoration: line-through to make text strikethrough

  // let saleIndicator;
  // if (sale === null) {
  //   saleIndicator = <span>🚫</span>;
  // } else {
  //   saleIndicator = <span>✅ Sale: ${sale}</span>;
  // }

  console.log("Hello World!"); // Expression - It works!
  // console.log(if (sale === null) {
  //   return <span>🚫</span>;
  // } else {
  //   return <span>✅ Sale: ${sale}</span>;
  // }) // Statement, doesn't work!

  const condition = false;
  console.log(condition ? "$2.00" : "$10.00");

  return (
    <li className="product-card">
      <h2>{title}</h2>
      <p>The price is ${price}</p>
      <p>
        {/* We can't use statements like this in our React code 😭 */}
        {/* {
          if (sale === null) {
            return <span>🚫</span>;
          } else {
            return <span>✅ Sale: ${sale}</span>;
          }
        } */}

        {/* We can however use a ternary operator, which is like a little if else statement.
            The syntax for a ternary operator:
            condition ? exprIfTrue : exprIfFalse
        
            In our case, sale can be 'null', which is a false value
            Documentation on values that are considered false: 
            https://developer.mozilla.org/en-US/docs/Glossary/Falsy    
        */}

        {sale ? <span>✅ Sale: ${sale}</span> : <span>🚫</span>}

        {/* Also valid options would be: */}
        {/* {typeof sale === "number" ? <span>✅ Sale: ${sale}</span> : <span>🚫</span>} */}
        {/* {sale !== null ? <span>✅ Sale: ${sale}</span> : <span>🚫</span>} */}
      </p>
      <button>Buy</button>
    </li>
  );
}

export default function Home() {
  return (
    <>
      <main>
        <h1>Coolblue</h1>
        <ul>
          {/* 
           We want to create this ProductCard component for every item in the laptops array
           We can use `.map()`
           */}
          {/* We want to filter on laptops below $900 */}
          {/* We want to sort the laptops from lowest to highest */}
          {laptops
            .filter((laptop) => laptop.price < 900)
            .sort((laptopA, laptopB) => laptopA.price - laptopB.price) // Ascending
            // .sort((laptopA, laptopB) => laptopB.price - laptopA.price) // Descending
            .map((laptop) => (
              <ProductCard
                key={laptop.id}
                title={laptop.title}
                price={laptop.price}
                sale={laptop.sale}
              />
            ))}
        </ul>
      </main>
    </>
  );
}
