import React from "react";
import "./Favourites.css";
import { BiCheck, BiTrash } from "react-icons/bi";
import RecipeSummary from "../RecipeSummary/RecipeSummary";
import { useMemo } from "react";

export default function Favourites({
  favourites,
  setFavourites,
  setShowFullRecipe,
  setRecipeData,
  recipeData,
}) {
  function addRecipeToList(recipe) {
    setRecipeData((prevList) => {
      // Check if recipe is already in list, if so do not modify list (avoid duplication in recipe list)
      let recipeInList = prevList.some(
        (listRecipe) => listRecipe.id === recipe.id,
      );
      return recipeInList ? prevList : [...prevList, recipe];
    });
  }

  // Create array that has the ids of recipes currently in the list
  const currentRecipesIds = useMemo(() =>
    recipeData.map((recipe) => recipe.id),
  );

  return (
    <section className="favourites">
      <h3 className="major-heading">Favourites</h3>
      {favourites.length > 0 ? (
        favourites.map((recipe) => {
          const recipeInList = currentRecipesIds.includes(recipe.id);
          return (
            <div className="favourite" key={recipe.id}>
              <RecipeSummary recipe={recipe} />
              <div className="fav-btn-container">
                <button
                  className="btn fav-btn"
                  onClick={() => setShowFullRecipe(recipe)}
                >
                  View recipe
                </button>
                <button
                  className="btn fav-btn"
                  onClick={() =>
                    setFavourites((prev) =>
                      prev.filter((fav) => fav.id !== recipe.id),
                    )
                  }
                >
                  Remove
                  <BiTrash className="fav-remove-icon" />
                </button>
              </div>
              <div className="btn-container">
                <button
                  className={`btn ${recipeInList ? "fav-added" : "fav-add"}`}
                  onClick={() => addRecipeToList(recipe)}
                >
                  {recipeInList ? "Added " : "Add to recipes"}
                  {recipeInList && <BiCheck className="fav-tick-icon" />}
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No favourites</p>
      )}
    </section>
  );
}
