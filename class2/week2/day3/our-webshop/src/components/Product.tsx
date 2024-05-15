import { useState } from "react";

export interface ProductProps {
  model: string;
  category: "Laptop" | "Smartphone" | "Gaming Console";
  price: number;
  onSale: boolean;
  discount: number | null;
}

export const ProductCard = ({
  model,
  category,
  price,
  onSale,
  discount,
}: ProductProps) => {
  //   let amount: number = 0;
  //   const person = { name: "Yoeran" };
  //   person.name = "Pietje";
  //   console.log(person);

  //   const [getAmount, setAmount] = useState(0);
  const [getCartObject, setCartObject] = useState({ amount: 0 });

  const addToCart = (count: number) => {
    console.log("Add me to cart!", count, model);

    // getCartObject.amount = getCartObject.amount + count;
    const newCartObject = {
      amount: getCartObject.amount + count,
    };

    setCartObject(newCartObject);

    console.log(getCartObject);

    // setAmount(getAmount + count);
    // amount = amount + count;
    // console.log(amount);
  };

  const removeFromCart = (count: number) => {
    // setAmount(getAmount - count);
    // setAmount('zero')
    // If we want to empty directly, we can set the amount to zero
    // setAmount(0);
  };

  // `() => addToCart(1)` is short for:
  //   const addOneToCart = () => {
  //     addToCart(1)
  //   }

  return (
    <li className="product-list__card">
      <h2>{model}</h2>
      <p>Category: {category}</p>
      <p>Get it now for €{price}</p>

      {onSale && discount !== null ? (
        <strong>ON SALE: €{discount}</strong>
      ) : null}

      <p>I want {getCartObject.amount} of this one!</p>

      <button
        className="product-list__buy-button"
        onClick={() => addToCart(1)}
        // onMouseOver={() => console.log("Mouse over!")}
        // onMouseLeave={() => console.log("Mouse left!")}
      >
        Buy 1
      </button>
      <br />

      <button
        className="product-list__buy-button"
        onClick={() => addToCart(10)}
      >
        Buy 10
      </button>

      <br />

      <button
        className="product-list__buy-button"
        onClick={() => removeFromCart(1)}
      >
        Remove one
      </button>
    </li>
  );
};
