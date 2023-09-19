import "./RecipeSummaries.css";
import CloseButton from "../CloseButton/CloseButton";
import defaultImg from "../../assets/default-image.jpg";
import { FaHeart } from "react-icons/fa";

export default function RecipeSummaries({
  recipeData,
  setShowFullRecipe,
  favourites,
  setFavourites,
  setShowDeleteRecipeModal,
}) {
  // Regex below used to remove html elements from recipe summaries
  const recipeSummaryTidyRegex = /<\/*b>/gi;

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
    <section className="recipes">
      <h3 className="major-heading">Recipes</h3>
      {recipeData.map((recipe, index) => {
        // If there is a meal summary take the first sentence and remove html characters, otherwise empty string
        const recipeSummary = recipe.summary
          ? `${recipe.summary
              .split(".")[0]
              .replace(recipeSummaryTidyRegex, "")}.`
          : "";
        return (
          <div className="recipe" key={recipe.id}>
            <CloseButton
              onClickFunction={() => handleDeleteRecipe(recipe.id)}
            />
            <div className="recipe-title-container">
              <span className="recipe-number">{index + 1}</span>
              <h5>{recipe.title}</h5>
            </div>
            <img
              className="recipe-img"
              src={recipe.image || defaultImg}
              alt="recipe serving example"
            />
            <div className="recipe-facts">
              <p>Ready in: {recipe.readyInMinutes} mins</p>
              <p>Servings: {recipe.servings}</p>
            </div>
            <p className="recipe-summary">{recipeSummary}</p>
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
