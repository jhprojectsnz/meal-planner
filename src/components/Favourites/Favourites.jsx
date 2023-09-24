import "./Favourites.css";
import { BiCheck } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
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
        (listRecipe) => listRecipe.id === recipe.id
      );
      return recipeInList ? prevList : [...prevList, recipe];
    });
  }

  // Create array that has the ids of recipes currently in the list
  const currentRecipesIds = useMemo(() =>
    recipeData.map((recipe) => recipe.id)
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
                  className="btn"
                  onClick={() => setShowFullRecipe(recipe)}
                >
                  Full recipe
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    setFavourites((prev) =>
                      prev.filter((fav) => fav.id !== recipe.id)
                    )
                  }
                >
                  Favourites
                  <FaHeart className="fav-icon fav-selected" />
                </button>
              </div>
              <div className="btn-container">
                <button
                  className="btn fav-btn-confirm"
                  onClick={() => addRecipeToList(recipe)}
                >
                  {recipeInList ? "Added " : "Add to list"}
                  {recipeInList && <BiCheck className="fav-btn-icon" />}
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
