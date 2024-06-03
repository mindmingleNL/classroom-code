const exampleData = {
  id: 1,
  recipename: "Spaghetti Bolognese",
  instructions:
    "1. Heat a large saucepan over medium heat. Add a tablespoon of olive oil. 2. Add minced garlic and onions, sauté until translucent. 3. Add ground beef and cook until browned. 4. Stir in tomato paste, diced tomatoes, and Italian seasoning. 5. Simmer for 30 minutes. 6. Serve over cooked spaghetti.",
  ingredients:
    "Olive oil, Garlic, Onions, Ground beef, Tomato paste, Diced tomatoes, Italian seasoning, Spaghetti",
  preptime: 45,
  serves: 4,
  imageURL: "https://example.com/spaghetti-bolognese.jpg",
};

const validate = (inputData: any) => {
  const errors = [];
  if (!inputData.id) {
    errors.push("Missing id field!");
    // console.log("Missing id field!");
  }

  if (!inputData.recipename) {
    errors.push("Missing recipename field!");
  }
  if (errors.length > 0) {
    console.log("Not valid!");
    console.log(errors);
  } else {
    console.log("Valid");
  }

  console.log("Done validating");
};

validate(exampleData);
