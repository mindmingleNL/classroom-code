// let result: any = null;

// const getWebsite = async () => {
//   const response = await fetch("https://www.mindmingle.nl");

//   result = await response.text();
// };

// getWebsite();
// setTimeout(() => console.log(result), 10000);

// fetch("https://www.mindmingle.nl").then((response) => {
//   response.text().then((text) => console.log(text));
// });

const callServer = async () => {
  const response = await fetch("http://127.0.0.1:3000/students");
  const data = await response.json();
  console.log(data);
  console.log(data[1]);
};

callServer();
