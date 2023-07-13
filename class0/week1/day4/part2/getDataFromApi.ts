import axios from "axios";

const getDataFromApi = async () => {
  const response = await axios.get("http://localhost:3001/");
  const data = response.data;
  console.log(data.name);
};

getDataFromApi();
