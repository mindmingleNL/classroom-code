import axios from "axios";

const makeRequest = async () => {
  // make a GET request
  const response = await axios.get("http://127.0.0.1:3001/dog");
  console.log(response.data);
};

makeRequest();
console.log("I am done!");
