import express from "express";

// app is a server
const app = express();

const port = 3001;

// the magic will happen

app.get("/", (req, res) => {
  // Inside this function we can do whatever we want to do
  res.send("Hello from home");
});

app.get("/hello", (req, res) => {
  // Inside this function we can do whatever we want to do
  res.send("Hello from server, this is the route '/hello'");
});

app.listen(port, () => {
  console.log(`Server has started on port: ${port}`);
});
