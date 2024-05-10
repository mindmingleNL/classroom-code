import cats from "./cats.json";

// Import express
import express from "express";
// Create a server application
const app = express();
// Store the port number in a var
const port = 3001;

app.get("/hello", (req, res) => {
  console.log("Got a request on /hello");
  res.send("Hello from the server, nice to have a client");
});

app.get("/horrible/html", (req, res) => {
  res.send("<html><h1>Hello from HTML</h1><p>I am a paragraph</p></html>");
});

app.get("/cats/all", (req, res) => {
  res.send(cats);
});

app.get("/cats/adult", (req, res) => {
  res.send(
    cats.filter((cat) => {
      return cat.is_adult;
    })
  );
});

// // Attach a function to the route "/"
// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });

// Tell the server to start listening, we provide the port here as the first argument.
// The second argument is a function that runs as soon as the server starts. We use it to log the port number.
app.listen(port, () => console.log(`⚡ Listening on port: ${port}`));
