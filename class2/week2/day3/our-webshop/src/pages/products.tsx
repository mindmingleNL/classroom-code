import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  onSale: boolean;
  discount: number | null;
}

export default function ProductPage() {
  const [getAmount, setAmount] = useState(0);
  const [getProducts, setProducts] = useState<Product[]>([]);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/api/products");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    console.log("This will be just a one-off");
    getData();
  }, []);

  useEffect(() => {
    console.log("when happens", getProducts);
  }, [getProducts]);

  useEffect(() => {
    console.log("This will show when we update the count");
  }, [getAmount]);

  const increment = () => {
    setAmount(getAmount + 1);
  };

  return (
    <main>
      Hello from products!
      {getProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
        </div>
      ))}
      <hr />
      <p>
        Amount: {getAmount}
        <br />
        <button onClick={increment}>Click me</button>
        <button onClick={getData}>Give me data!</button>
      </p>
    </main>
  );
}
