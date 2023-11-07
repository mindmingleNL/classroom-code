const removeFromArrayById = (
  oldArray: number[],
  idToRemove: number
): number[] => {
  // Create an empty array for the filtered items
  const newArray: number[] = [];

  // Loop over all the items
  for (let i = 0; i < oldArray.length; i++) {
    const currentItem = oldArray[i];
    // Check if the item is not the one we want to remove
    if (idToRemove !== currentItem) {
      newArray.push(currentItem);
    }
  }

  return newArray;
};
