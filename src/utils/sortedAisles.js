// Takes a object with aisles as keys
// Returns an array with those aisles sorted into order defined by array of all aisles (aisleOrder)
// Designed to sort aisles into roughly the order they appear at the supermarket

function sortAisles(ingredientsSortedByAisle) {
  // Change the array below to change the order the aisles appear in list
  const aisleOrder = [
    "Produce",
    "Seafood",
    "Meat",
    "Refrigerated",
    "Milk, Eggs, Other Dairy",
    "Cheese",
    "Beverages",
    "Bakery/Bread",
    "Cereal",
    "Nut butters, Jams, and Honey",
    "Baking",
    "Nuts",
    "Spices and Seasonings",
    "Oil, Vinegar, Salad Dressing",
    "Pasta and Rice",
    "Condiments",
    "Canned and Jarred",
    "Ethnic Foods",
    "Health Foods",
    "Gluten Free",
    "Gourmet",
    "Alcoholic Beverages",
    "Other",
  ];

  // Create an object that has aisles as keys and order number as values
  const aisleSorterObject = aisleOrder.reduce((prev, curr, index) => {
    return { ...prev, [curr]: index };
  }, {});

  // Sort the aisle in current list using the aisleSorterObject
  return Object.keys(ingredientsSortedByAisle).sort((a, b) => {
    return aisleSorterObject[a] - aisleSorterObject[b];
  });
}

export default sortAisles;
