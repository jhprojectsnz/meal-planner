import "./Recipes.css";
import { useState } from "react";
import NewMeal from "../NewMeal/NewMeal";
import RecipeList from "../RecipeList/RecipeList";

export default function Recipes({
  recipeData,
  setRecipeData,
  favourites,
  setFavourites,
  showFullRecipe,
  setShowFullRecipe,
}) {
  const [showNewMeal, setShowNewMeal] = useState(false);

  return (
    <>
      {!showNewMeal && recipeData.length > 0 && (
        <>
          <RecipeList
            recipeData={recipeData}
            setRecipeData={setRecipeData}
            showFullRecipe={showFullRecipe}
            setShowFullRecipe={setShowFullRecipe}
            favourites={favourites}
            setFavourites={setFavourites}
          />
          <button className="btn bold-btn" onClick={() => setShowNewMeal(true)}>
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
    </>
  );
}
