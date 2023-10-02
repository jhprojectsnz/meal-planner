import React from "react";
import "./ShoppingList.css";
import { useMemo, useState } from "react";
import Ingredient from "../Ingredient/Ingredient";
import DeletedItems from "../DeletedItems/DeletedItems";
import sortIngredients from "../../utils/sortIngredients";
import sortAisles from "../../utils/sortedAisles";

export default function ShoppingList({
  recipeData,
  setIngredientDisplayStatus,
  ingredientDisplayStatus,
}) {
  const [showDeleted, setShowDeleted] = useState(false);
  const [sortBy, setSortBy] = useState("category");

  // Get sorted lists of ingredients as objects
  const { ingredientsByAisle, ingredientsByRecipe } = useMemo(
    () => sortIngredients(recipeData),
    [recipeData],
  );

  // Called when + icon in deleted list clicked - adds ingredient back to main list
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

  // Should make a separate component or hook for this
  const ingredientsByCategoryElements = useMemo(() => {
    // Sort aisles into roughly the order they are in a supermarket
    const sortedAisles = sortAisles(ingredientsByAisle);

    return sortedAisles.map((aisle) => {
      // Remove any ingredients that have been "deleted"
      const filteredIngredients = Object.keys(ingredientsByAisle[aisle]).filter(
        (ingredient) => {
          return ingredientDisplayStatus[ingredient] === "deleted"
            ? false
            : true;
        },
      );
      if (!filteredIngredients.length) return null;
      return (
        <div className="list-section" key={aisle}>
          <h5 className="list-subheading">{aisle}</h5>
          <ul id={aisle}>
            {filteredIngredients.map((ingredient, index) => {
              const ingredientAmounts = ` (${ingredientsByAisle[aisle][
                ingredient
              ].amount.join(" + ")})`;
              return (
                <Ingredient
                  key={`${ingredientsByAisle[aisle][ingredient].id}-${index}`}
                  name={ingredient}
                  amount={ingredientAmounts}
                  ingredientDisplayStatus={ingredientDisplayStatus}
                  setIngredientDisplayStatus={setIngredientDisplayStatus}
                />
              );
            })}
          </ul>
        </div>
      );
    });
  });

  // Should make a separate component or hook for this
  const ingredientsByRecipeElements = useMemo(() => {
    return Object.keys(ingredientsByRecipe).map((recipe) => {
      // Remove any ingredients that have been "deleted"
      const filteredIngredients = Object.keys(
        ingredientsByRecipe[recipe],
      ).filter((ingredient) => {
        return ingredientDisplayStatus[ingredient] === "deleted" ? false : true;
      });
      if (!filteredIngredients.length) return null;
      return (
        <div className="list-section" key={recipe}>
          <h5 className="list-subheading">{recipe}</h5>
          <ul id={recipe}>
            {filteredIngredients.map((ingredient, index) => {
              const ingredientAmounts = ` (${ingredientsByRecipe[recipe][
                ingredient
              ].amount.join(" + ")})`;
              return (
                <Ingredient
                  key={`${ingredientsByRecipe[recipe][ingredient].id}-${index}`}
                  name={ingredient}
                  amount={ingredientAmounts}
                  ingredientDisplayStatus={ingredientDisplayStatus}
                  setIngredientDisplayStatus={setIngredientDisplayStatus}
                />
              );
            })}
          </ul>
        </div>
      );
    });
  });

  return (
    <div className="shopping-list">
      <h3 className="major-heading">Shopping List</h3>
      {!showDeleted && (
        <>
          <div className="sort-options">
            <span>Sort by:</span>
            <button
              className={
                sortBy === "category" ? "sort-btn selected" : "sort-btn"
              }
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
          {sortBy === "category" && ingredientsByCategoryElements}
          {sortBy === "recipe" && ingredientsByRecipeElements}
        </>
      )}
      {showDeleted && (
        <div className="list-section">
          <h5 className="list-subheading">Deleted Items</h5>
          <ul>
            <DeletedItems
              ingredientDisplayStatus={ingredientDisplayStatus}
              addIngredient={addIngredient}
            />
          </ul>
          <p className="deleted-ingredient-text">
            Press + to return item to main list
          </p>
        </div>
      )}
      <button className="btn list-bottom-button" onClick={toggleShowDeleted}>
        {showDeleted ? "Go back" : "Deleted items"}
      </button>
    </div>
  );
}
