import express from "express";

const menu = [
  {
    name: "Pepperoni Pizza",
    ingredients: ["Pepperoni", "Cheese", "Tomato Sauce"],
    caloricCount: 600,
    vegetarian: false,
    spiceLevel: "Mild"
  },
  {
    name: "Margherita Pizza",
    ingredients: ["Basil", "Cheese", "Tomato Sauce"],
    caloricCount: 500,
    vegetarian: true,
    spiceLevel: "Mild"
  },
  {
    name: "BBQ Chicken Pizza",
    ingredients: ["Chicken", "BBQ Sauce", "Cheese", "Onions"],
    caloricCount: 700,
    vegetarian: false,
    spiceLevel: "Medium"
  },
  {
    name: "Hawaiian Pizza",
    ingredients: ["Ham", "Pineapple", "Cheese", "Tomato Sauce"],
    caloricCount: 550,
    vegetarian: false,
    spiceLevel: "Mild"
  },
  {
    name: "Veggie Pizza",
    ingredients: [
      "Bell Peppers",
      "Onions",
      "Mushrooms",
      "Cheese",
      "Tomato Sauce"
    ],
    caloricCount: 500,
    vegetarian: true,
    spiceLevel: "Mild"
  },
  {
    name: "Buffalo Chicken Pizza",
    ingredients: ["Chicken", "Buffalo Sauce", "Cheese", "Celery"],
    caloricCount: 650,
    vegetarian: false,
    spiceLevel: "Spicy"
  },
  {
    name: "Meat Lover's Pizza",
    ingredients: ["Pepperoni", "Sausage", "Bacon", "Cheese", "Tomato Sauce"],
    caloricCount: 800,
    vegetarian: false,
    spiceLevel: "Medium"
  },
  {
    name: "Four Cheese Pizza",
    ingredients: [
      "Mozzarella Cheese",
      "Cheddar Cheese",
      "Parmesan Cheese",
      "Blue Cheese"
    ],
    caloricCount: 600,
    vegetarian: true,
    spiceLevel: "Mild"
  },
  {
    name: "Seafood Pizza",
    ingredients: ["Shrimp", "Clams", "Mussels", "Cheese", "Tomato Sauce"],
    caloricCount: 700,
    vegetarian: false,
    spiceLevel: "Mild"
  },
  {
    name: "Greek Pizza",
    ingredients: ["Feta Cheese", "Olives", "Tomato", "Onions"],
    caloricCount: 520,
    vegetarian: true,
    spiceLevel: "Mild"
  }
];

// app is a server
const app = express();
const port = 3001;

// Our Route
app.get("/one", (req, res) => {
  // Inside this function we can do whatever we want to do
  res.send("Hello from home");
});

// Let's add a JSON object
app.get("/pizzas", (req, res) => {
  // Inside this function we can do whatever we want to do
  res.send(menu);
});

app.get("/pizzas/pineapple", (req, res) => {
  // We want to filter out all the pizza's with pineapple
  const pineapplePizzas = menu.filter(
    (pizza) => pizza.ingredients.includes("Pineapple") // This evaluates to a boolean
  );
  res.send(pineapplePizzas);
});

// Explicit Return Callback Function for .filter()
app.get("/pizzas/low-calories-vegetarian", (req, res) => {
  // We iterate through and filter all the pizza's
  const lowCalorieVeggiePizzas = menu.filter((pizza) => {
    // 'pizza' is the current pizza in the iteration

    // Check if the caloric count is below 600 calories
    const isLowCalories = pizza.caloricCount < 600;
    // And we want to check if the pizza is vegetarian
    const isVegetarian = pizza.vegetarian;

    if (isLowCalories && isVegetarian) {
      // We want to keep it
      // So we need to return a truthy value, which is a 'true' boolean
      return true;
    } else {
      return false;
    }
  });

  res.send(lowCalorieVeggiePizzas);
});

// Implicit Return Callback Function
app.get("/pizzas/low-calories-vegetarian-2", (req, res) => {
  // We iterate through and filter all the pizza's
  // We want to check if the pizza is vegetarian && if the pizza is below 600 in calories
  const lowCalorieVeggiePizzas = menu.filter(
    (pizza) => pizza.vegetarian && pizza.caloricCount < 600
  );

  res.send(lowCalorieVeggiePizzas);
});

app.listen(port, () => {
  console.log(`Server has started on port: ${port}`);
});
