import cats from "./cats.json";

console.log(
  cats.filter((cat) => {
    return !cat.is_adult;
  })
);
