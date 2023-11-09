const makeRequest = async () => {
  const response = await fetch("http://127.0.0.1:3001/hello");
  const dataFromResponse = await response.text();
  console.log(dataFromResponse);
};

makeRequest();
console.log("hello from client!");
