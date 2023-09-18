import { useState } from "react";
import "./Recipes.css";
import RecipeModal from "../RecipeModal/RecipeModal";
import NewMeal from "../NewMeal/NewMeal";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import Intro from "../Intro/Intro";
import RecipeSummaries from "../RecipeSummaries/RecipeSummaries";

export default function Recipes({
  recipeData,
  setRecipeData,
  favourites,
  setFavourites,
}) {
  const [showFullRecipe, setShowFullRecipe] = useState({});
  const [confirmModalIndex, setConfirmModalIndex] = useState(-1);
  const [showNewMeal, setShowNewMeal] = useState(false);

  function handleCloseRecipe(e) {
    setConfirmModalIndex(e.target.parentNode.dataset.index);
  }

  function addRecipe() {
    setShowNewMeal(true);
  }

  function removeRecipe() {
    setRecipeData((prev) => {
      return [...prev].filter((meal, index) => {
        return parseInt(confirmModalIndex) !== index;
      });
    });
    setConfirmModalIndex(-1);
  }

  return (
    <>
      {!showNewMeal && recipeData.length === 0 && <Intro />}
      {!showNewMeal && recipeData.length > 0 && (
        <RecipeSummaries
          recipeData={recipeData}
          showFullRecipe={showFullRecipe}
          setShowFullRecipe={setShowFullRecipe}
          handleCloseRecipe={handleCloseRecipe}
          setFavourites={setFavourites}
          favourites={favourites}
        />
      )}
      {!showNewMeal && !showFullRecipe.id && (
        <button className="bold-btn" onClick={addRecipe}>
          Add Recipe
        </button>
      )}
      {showNewMeal && (
        <NewMeal
          setRecipeData={setRecipeData}
          setShowNewMeal={setShowNewMeal}
          showFullRecipe={showFullRecipe}
          setShowFullRecipe={setShowFullRecipe}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      )}
      {showFullRecipe.id && (
        <RecipeModal
          showFullRecipe={showFullRecipe}
          setShowFullRecipe={setShowFullRecipe}
        />
      )}
      {confirmModalIndex >= 0 && (
        <ConfirmModal
          setConfirmModalIndex={setConfirmModalIndex}
          removeRecipe={removeRecipe}
        />
      )}
    </>
  );
}