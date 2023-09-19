import { useMemo, useState } from "react";
import "./ShoppingList.css";
import Ingredient from "../Ingredient/Ingredient";
import DeletedItems from "../DeletedItems/DeletedItems";

export default function ShoppingList({
  recipeData,
  setIngredientDisplayStatus,
  ingredientDisplayStatus,
}) {
  function sortIngredientsByCategory(allRecipes) {
    // Create shopping list object to be populated with "aisles" and "ingredients"
    const shoppingList = {};

    allRecipes.forEach((recipe) => {
      recipe.extendedIngredients.forEach((ingredient) => {
        // Find aisle of ingredient, if not available set to "Other"
        let aisle = ingredient.aisle ? ingredient.aisle.split(";")[0] : "Other";
        if (aisle === "?") aisle = "Other";

        // Data required to make ingredient object
        const ingredientName = ingredient.name;
        const ingredientId = ingredient.id;
        const ingredientAmount = Math.round(ingredient.amount * 100) / 100;
        const ingredientQuantity =
          `${ingredientAmount} ${ingredient.unit}`.trim();

        if (aisle in shoppingList && ingredientName in shoppingList[aisle]) {
          // Aisle and ingredient already in shopping list - add amount to ingredient
          shoppingList[aisle][ingredientName].amount.push(ingredientQuantity);
        } else if (aisle in shoppingList) {
          // Aisle in shopping list (but ingredient is not) - add ingredient to asile
          shoppingList[aisle][ingredientName] = {
            id: ingredientId,
            name: ingredientName,
            amount: [ingredientQuantity],
          };
        } else {
          // Aisle not in shopping list - add aisle with ingredient inside
          shoppingList[aisle] = {
            [ingredientName]: {
              id: ingredientId,
              name: ingredientName,
              amount: [ingredientQuantity],
            },
          };
        }
      });
    });
    return shoppingList;
  }

  function sortIngredientsByRecipe(data) {
    const sortedList = [];
    data.forEach((recipe) => {
      let ingredients = [];
      recipe.extendedIngredients.forEach((ingredient) => {
        const ingredientName = ingredient.name;
        const ingredientId = ingredient.id;
        const ingredientAmount = Math.round(ingredient.amount * 100) / 100;
        const ingredientQuantity =
          `${ingredientAmount} ${ingredient.unit}`.trim();
        let newIngredient = {
          id: ingredientId,
          name: ingredientName,
          amount: [ingredientQuantity],
        };
        ingredients.push(newIngredient);
      });
      sortedList.push({ [recipe.title]: ingredients });
    });
    return sortedList;
  }

  const IngredientsByRecipeData = useMemo(
    () => sortIngredientsByRecipe(recipeData),
    [recipeData]
  );
  const ingredientsByCategoryData = useMemo(
    () => sortIngredientsByCategory(recipeData),
    [recipeData]
  );
  const [showDeleted, setShowDeleted] = useState(false);
  const [sortBy, setSortBy] = useState("category");
  const categoryOrderObject = useMemo(() => {
    // Change the array below to change the order the categories appear in list
    const categoryOrder = [
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
    return categoryOrder.reduce((prev, curr, index) => {
      return { ...prev, [curr]: index };
    }, {});
  }, []);

  function removeIngredient(e) {
    setIngredientDisplayStatus((prev) => {
      return { ...prev, [e.target.parentNode.id]: "deleted" };
    });
  }

  function addIngredient(e) {
    setIngredientDisplayStatus((prev) => {
      const objectCopy = { ...prev };
      delete objectCopy[e.target.id];
      return objectCopy;
    });
  }

  function toggleShowDeleted() {
    setShowDeleted((prev) => !prev);
  }

  const ingredientsByCategoryElements = Object.keys(ingredientsByCategoryData)
    .sort((a, b) => {
      return categoryOrderObject[a] - categoryOrderObject[b];
    })
    .map((aisle) => {
      const filteredIngredients = Object.keys(
        ingredientsByCategoryData[aisle]
      ).filter((ingredient) => {
        return ingredientDisplayStatus[ingredient] === "deleted" ? false : true;
      });
      if (!filteredIngredients.length) return <div></div>;
      return (
        <div className="list-section" key={aisle}>
          <h5 className="list-subheading">{aisle}</h5>
          <ul id={aisle}>
            {filteredIngredients.map((ingredient) => {
              return (
                <Ingredient
                  id={ingredientsByCategoryData[aisle][ingredient].id}
                  name={ingredient}
                  amount={` (${ingredientsByCategoryData[aisle][
                    ingredient
                  ].amount.join(" + ")})`}
                  removeIngredient={removeIngredient}
                  ingredientDisplayStatus={ingredientDisplayStatus}
                  setIngredientDisplayStatus={setIngredientDisplayStatus}
                />
              );
            })}
          </ul>
        </div>
      );
    });

  const IngredientsByRecipeElements = IngredientsByRecipeData.map((recipe) => {
    let recipeTitle = Object.keys(recipe)[0];
    return (
      <div className="list-section">
        <h5 className="list-subheading">{recipeTitle}</h5>
        <ul>
          {recipe[recipeTitle].map((ingredient) => {
            return ingredientDisplayStatus[ingredient.name] === "deleted" ? (
              <></>
            ) : (
              <Ingredient
                id={ingredient.id}
                name={ingredient.name}
                amount={ingredient.amount}
                removeIngredient={removeIngredient}
                ingredientDisplayStatus={ingredientDisplayStatus}
                setIngredientDisplayStatus={setIngredientDisplayStatus}
              />
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <div className="shopping-list">
      <h3 className="major-heading">Shopping List</h3>
      {!showDeleted && (
        <div className="sort-options">
          <span>Sort by:</span>
          <button
            className={sortBy === "category" ? "sort-btn selected" : "sort-btn"}
            onClick={() => setSortBy("category")}
          >
            Category
          </button>
          <button
            className={sortBy === "recipe" ? "sort-btn selected" : "sort-btn"}
            onClick={() => setSortBy("recipe")}
          >
            Recipe
          </button>
        </div>
      )}
      {!showDeleted && sortBy === "category" && ingredientsByCategoryElements}
      {!showDeleted && sortBy === "recipe" && IngredientsByRecipeElements}
      {showDeleted && (
        <div className="list-section">
          <h5 className="list-subheading">Deleted Items</h5>
          <ul>
            <DeletedItems
              ingredientDisplayStatus={ingredientDisplayStatus}
              setIngredientDisplayStatus={setIngredientDisplayStatus}
              addIngredient={addIngredient}
            />
          </ul>
          <p>Press + to return item to main list</p>
        </div>
      )}
      <div className="btn-container">
        <button className="btn" onClick={toggleShowDeleted}>
          {showDeleted ? "Go back" : "Deleted items"}
        </button>
      </div>
    </div>
  );
}
