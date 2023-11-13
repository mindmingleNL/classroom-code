const Navigation = () => {
  let count = 10;
  return `<!-- <div>
    <a href="/">Home</a>
    <a href="/about.html">About</a>
    <a href="/products.html">Products</a>
    <button onClick=${() => (count = count + 1)}>Increase</button>
    <a href="/new.html">New</a>
    the count is: ${count}
    </div> -->`;
};
