import "./Recipes.css";
import { useState } from "react";
import NewMeal from "../NewMeal/NewMeal";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import RecipeList from "../RecipeList/RecipeList";

export default function Recipes({
  recipeData,
  setRecipeData,
  favourites,
  setFavourites,
  showFullRecipe,
  setShowFullRecipe,
}) {
  const [showDeleteRecipeModal, setShowDeleteRecipeModal] = useState(0);
  const [showNewMeal, setShowNewMeal] = useState(false);

  function handleAddRecipe() {
    setShowNewMeal(true);
  }

  function handleRemoveRecipe() {
    setRecipeData((prev) => {
      return [...prev].filter(
        (recipe) => parseInt(showDeleteRecipeModal) !== recipe.id
      );
    });
    setShowDeleteRecipeModal(0);
  }

  return (
    <>
      {!showNewMeal && recipeData.length > 0 && (
        <>
          <RecipeList
            recipeData={recipeData}
            showFullRecipe={showFullRecipe}
            setShowFullRecipe={setShowFullRecipe}
            favourites={favourites}
            setFavourites={setFavourites}
            setShowDeleteRecipeModal={setShowDeleteRecipeModal}
          />
          <button className="btn bold-btn" onClick={handleAddRecipe}>
            Add Recipe
          </button>
        </>
      )}
      {(recipeData.length === 0 || showNewMeal) && (
        <NewMeal
          setRecipeData={setRecipeData}
          setShowNewMeal={setShowNewMeal}
          setShowFullRecipe={setShowFullRecipe}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      )}
      {showDeleteRecipeModal > 0 && (
        <ConfirmModal
          setShowDeleteRecipeModal={setShowDeleteRecipeModal}
          removeRecipe={handleRemoveRecipe}
        />
      )}
    </>
  );
}
