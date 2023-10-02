function sortIngredients(recipesList) {
  const ingredientsByAisle = {};
  const ingredientsByRecipe = {};

  recipesList.forEach((recipe) => {
    // Create a new object for this recipe
    ingredientsByRecipe[recipe.title] = {};
    // Loop through each ingredient of the current recipt
    recipe.extendedIngredients.forEach((ingredient) => {
      // Organise data required for each ingredient
      const ingredientName = ingredient.name;
      const ingredientId = ingredient.id;
      const ingredientQuantity = ingredient.unit
        ? `${ingredient.amount} ${ingredient.unit}`
        : ingredient.amount;

      const ingredientData = {
        id: ingredientId,
        name: ingredientName,
        amount: [ingredientQuantity],
      };

      // Sorting by recipe
      // If ingredient already in recipe object - add amount to ingredient
      if (ingredientName in ingredientsByRecipe[recipe.title]) {
        ingredientsByRecipe[recipe.title][ingredientName].amount.push(
          ingredientQuantity,
        );
        // Otherwise add ingredient
      } else {
        ingredientsByRecipe[recipe.title][ingredientName] = ingredientData;
      }

      // Sorting by aisle
      // ingredient.aisle may include multiple "aisles" divided by a semicolon - take the first aisle listed
      const aisle =
        ingredient.aisle && ingredient.aisle != "?"
          ? ingredient.aisle.split(";")[0]
          : "Other";

      // Aisle and ingredient already in object - add amount to ingredient
      if (
        aisle in ingredientsByAisle &&
        ingredientName in ingredientsByAisle[aisle]
      ) {
        ingredientsByAisle[aisle][ingredientName].amount.push(
          ingredientQuantity,
        );
        // Aisle in object (but ingredient is not) - add ingredient to asile
      } else if (aisle in ingredientsByAisle) {
        ingredientsByAisle[aisle][ingredientName] = ingredientData;
      } // Aisle not in object - add aisle with ingredient inside
      else {
        ingredientsByAisle[aisle] = {
          [ingredientName]: ingredientData,
        };
      }
    });
  });
  return { ingredientsByAisle, ingredientsByRecipe };
}

export default sortIngredients;
