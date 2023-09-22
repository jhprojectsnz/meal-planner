import "./Favourites.css";
import { BiCheck } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import RecipeSummary from "../RecipeSummary/RecipeSummary";

export default function Favourites({
  favourites,
  setShowFullRecipe,
  setFavourites,
  setRecipeData,
  setShowNewMeal,
  setNewRecipeSource,
}) {
  function addRecipeToList(recipe) {
    setRecipeData((prevList) => {
      // Check if recipe is already in list, if so do not modify list (avoid duplication in recipe list)
      let recipeInList = prevList.some(
        (listRecipe) => listRecipe.id === recipe.id
      );
      return recipeInList ? prevList : [...prevList, recipe];
    });
    setShowNewMeal(false);
  }

  return (
    <>
      <h3 className="major-heading">Favourites</h3>
      {favourites.length > 0 ? (
        favourites.map((recipe) => {
          return (
            <div className="favourite">
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
                  Add to list
                  <BiCheck className="fav-btn-icon" />
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No favourites</p>
      )}
      {setNewRecipeSource && (
        <button className="btn" onClick={() => setNewRecipeSource(false)}>
          Back
        </button>
      )}
    </>
  );
}
