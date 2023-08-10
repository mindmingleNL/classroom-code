import { addItem, createCheckoutText } from "./shoppingList";

test("Check if addItem works correctly", () => {
  const itemToAdd = "Potatoes";
  const shoppingList = addItem(itemToAdd);
  expect(shoppingList).toContain(itemToAdd);
});

describe("Checkout Text", () => {
  test("Check if total amount is correct", () => {
    const totalText = createCheckoutText(20, 5);

    const expectedAmount = `$25`;
    expect(totalText).toMatch(expectedAmount);
  });

  test("Check if total amount is correct", () => {
    const totalText = createCheckoutText(20, 5);
    const expectedAmount = `$25`;
    expect(totalText).toMatch(expectedAmount);
    expect(totalText).not.toMatch("-");
  });
});
