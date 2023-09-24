import "./RecipeList.css";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import CloseButton from "../CloseButton/CloseButton";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import RecipeSummary from "../RecipeSummary/RecipeSummary";

export default function RecipeList({
  recipeData,
  setRecipeData,
  setShowFullRecipe,
  favourites,
  setFavourites,
  setShowSuggester,
}) {
  const [recipeToDeleteId, setRecipeToDeleteId] = useState(0);

  function handleFavouritesClick(recipe) {
    setFavourites((prevFavourites) => {
      // Check if clicked recipe is currently a favourite
      const isCurrentFavourite = prevFavourites.some(
        (fav) => fav.id === recipe.id
      );
      // Add or remove recipe from favourites accordingly
      return isCurrentFavourite
        ? prevFavourites.filter((fav) => fav.id !== recipe.id)
        : [...prevFavourites, recipe];
    });
  }

  function handleRemoveRecipe() {
    setRecipeData((prev) => {
      return [...prev].filter(
        (recipe) => parseInt(recipeToDeleteId) !== recipe.id
      );
    });
    setRecipeToDeleteId(0);
  }

  return (
    <section className="recipe-list">
      <h3 className="major-heading">Recipes</h3>
      {recipeData.map((recipe) => {
        return (
          <div className="recipe" key={recipe.id}>
            <CloseButton
              onClickFunction={() => setRecipeToDeleteId(recipe.id)}
            />
            <RecipeSummary recipe={recipe} />
            <div className="recipe-list-btn-container">
              <button
                className="btn"
                onClick={() => handleFavouritesClick(recipe)}
              >
                Favourites
                <FaHeart
                  className={
                    favourites.some((fav) => fav.id === recipe.id)
                      ? "fav-icon fav-selected"
                      : "fav-icon"
                  }
                />
              </button>
              <button className="btn" onClick={() => setShowFullRecipe(recipe)}>
                Full recipe
              </button>
            </div>
          </div>
        );
      })}
      <button
        className="btn add-recipe-btn"
        onClick={() => setShowSuggester(true)}
      >
        New Recipe
      </button>
      {recipeToDeleteId > 0 && (
        <ConfirmModal
          setRecipeToDeleteId={setRecipeToDeleteId}
          removeRecipe={handleRemoveRecipe}
        />
      )}
    </section>
  );
}
