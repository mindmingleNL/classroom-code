const exampleOfTryCatch = () => {
  const arrayOfLetters = ["a", "b", "c", "d"];

  for (let i = 0; i < arrayOfLetters.length; i += 1) {
    try {
      console.log("Letter is:", arrayOfLetters[i]);

      if (arrayOfLetters[i] === "b") {
        throw Error("I don't like B");
      }
    } catch (error) {
      console.log("Get a coffee");
      console.log(error);
    }
  }
};

exampleOfTryCatch();
