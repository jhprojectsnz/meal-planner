function sortIngredients(recipesList) {
  const ingredientsByAisle = {};
  const ingredientsByRecipe = [];

  recipesList.forEach((recipe) => {
    // Create array that will store data for the ingredients for this recipe
    let recipeIngredients = [];
    // Loop through each ingredient of the current recipt
    recipe.extendedIngredients.forEach((ingredient) => {
      // Organise data required to populate ingredient object
      const ingredientName = ingredient.name;
      const ingredientId = ingredient.id;
      const ingredientAmount = parseFloat(ingredient.amount.toFixed(2));
      const ingredientQuantity =
        `${ingredientAmount} ${ingredient.unit}`.trim();

      // For sorting ingredient by recipe
      const newIngredient = {
        id: ingredientId,
        name: ingredientName,
        amount: [ingredientQuantity],
      };
      recipeIngredients.push(newIngredient);

      // For sorting ingredient by aisle
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
          ingredientQuantity
        );
        // Aisle in object (but ingredient is not) - add ingredient to asile
      } else if (aisle in ingredientsByAisle) {
        ingredientsByAisle[aisle][ingredientName] = {
          id: ingredientId,
          name: ingredientName,
          amount: [ingredientQuantity],
        };
      } // Aisle not in object - add aisle with ingredient inside
      else {
        ingredientsByAisle[aisle] = {
          [ingredientName]: {
            id: ingredientId,
            name: ingredientName,
            amount: [ingredientQuantity],
          },
        };
      }
    });
    // Add ingredients for this recipe to sorted array
    ingredientsByRecipe.push({ [recipe.title]: recipeIngredients });
  });
  return [ingredientsByAisle, ingredientsByRecipe];
}

export default sortIngredients;
