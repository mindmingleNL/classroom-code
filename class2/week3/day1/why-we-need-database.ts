interface Product {
  id: number;
  name: string;
  price: number;
}

const product: Product = {
  id: 1,
  name: "iPhone 15",
  price: 500,
};

const shoppingCart: Product[] = [];

shoppingCart.push(product);

console.log(shoppingCart);

// SELECT * FROM products
// UPDATE name='New NAME' FROM products WHERE id=1
