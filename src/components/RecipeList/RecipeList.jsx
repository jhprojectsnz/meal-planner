import "./RecipeList.css";
import CloseButton from "../CloseButton/CloseButton";
import { FaHeart } from "react-icons/fa";
import RecipeSummary from "../RecipeSummary/RecipeSummary";

export default function RecipeList({
  recipeData,
  setShowFullRecipe,
  favourites,
  setFavourites,
  setShowDeleteRecipeModal,
}) {
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

  function handleDeleteRecipe(recipeId) {
    setShowDeleteRecipeModal(recipeId);
  }

  return (
    <section className="recipe-list">
      <h3 className="major-heading">Recipes</h3>
      {recipeData.map((recipe) => {
        return (
          <div className="recipe" key={recipe.id}>
            <CloseButton
              onClickFunction={() => handleDeleteRecipe(recipe.id)}
            />
            <RecipeSummary recipe={recipe} />
            <div className="btn-container">
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
    </section>
  );
}
