import defaultImg from "../../assets/default-image.jpg";
import { BiCheck } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

export default function Favourites({
  favourites,
  setShowFullRecipe,
  setFavourites,
  setRecipeData,
  setShowNewMeal,
  setNewRecipeSource,
}) {
  const replaceRegex = /<\/*b>/gi;

  function addFavouriteToList(recipe) {
    setRecipeData((prev) => {
      // Check if recipe is already in list, if so do not modify list (avoid duplication in recipe list)
      let recipeNotInList =
        prev.filter((item) => item.id === recipe.id).length === 0;
      if (recipeNotInList) return [...prev, recipe];
      return prev;
    });
    setShowNewMeal(false);
  }

  return (
    <>
      <h3 className="major-heading">Favourites</h3>
      {favourites.map((recipe) => {
        const mealSummary = recipe.summary
          ? `${recipe.summary.split(".")[0].replace(replaceRegex, "")}.`
          : "";
        return (
          <div className="meal">
            <h5>{recipe.title}</h5>
            <div className="meal-img-container">
              <img
                key={recipe.id}
                className="meal-img"
                src={recipe.image || defaultImg}
                alt="recipe serving example"
              ></img>
            </div>
            <div className="recipe-facts">
              <p>Ready in: {recipe.readyInMinutes} mins</p>
              <p>Servings: {recipe.servings}</p>
            </div>
            <p className="recipe-summary">{mealSummary}</p>
            <div className="btn-container">
              <button className="btn" onClick={() => setShowFullRecipe(recipe)}>
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
                className="btn confirm"
                onClick={() => addFavouriteToList(recipe)}
              >
                Add to list
                <BiCheck className="btn-icon" />
              </button>
            </div>
          </div>
        );
      })}
      <button className="btn" onClick={() => setNewRecipeSource(false)}>
        Back
      </button>
    </>
  );
}
