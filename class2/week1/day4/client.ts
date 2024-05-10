const getMessage = async () => {
  const response = await fetch("http://localhost:3001/hello");
  const textFromResponse = await response.text();
  console.log(textFromResponse);
};

const showAllTheAdultCats = async () => {
  const catResponse = await fetch("http://localhost:3001/cats/all");
  const catsFromResponse = await catResponse.json();
  console.log(
    catsFromResponse.filter((cat: any) => {
      return cat.is_adult;
    })
  );
};

// console.log("starting");
// getMessage();
// console.log("done");

showAllTheAdultCats();
