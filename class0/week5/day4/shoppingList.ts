const shoppingList = ["kleenex", "toiletpaper", "milk", "chips"];

export const addItem = (item: string) => {
  shoppingList.push(item);
  return shoppingList;
};

export const createCheckoutText = (itemValue: number, shippingCost: number) => {
  const checkoutText = `Total: $${itemValue + shippingCost}`;
  return checkoutText;
};
