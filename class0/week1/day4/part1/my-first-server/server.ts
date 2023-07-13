import express from "express";

const app = express();
const port = 3001;

// We are going to write 'routes'

app.get("/hello", (request, response) => {
  response.send("<h1>Hello world!</h1>");
});

app.get("/dog", (request, response) => {
  response.send("Woof woof");
});

app.listen(port, () => {
  console.log(`Server started, listening on port ${port}`);
});
