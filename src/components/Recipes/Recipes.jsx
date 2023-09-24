import "./Recipes.css";
import { useState } from "react";
import RecipeList from "../RecipeList/RecipeList";
import RecipeSuggester from "../RecipeSuggester/RecipeSuggester";

export default function Recipes({
  recipeData,
  setRecipeData,
  favourites,
  setFavourites,
  showFullRecipe,
  setShowFullRecipe,
}) {
  const [showSuggester, setShowSuggester] = useState(false);

  return (
    <>
      {!showSuggester && recipeData.length > 0 && (
        <>
          <RecipeList
            recipeData={recipeData}
            setRecipeData={setRecipeData}
            showFullRecipe={showFullRecipe}
            setShowFullRecipe={setShowFullRecipe}
            favourites={favourites}
            setFavourites={setFavourites}
          />
          <button
            className="btn bold-btn"
            onClick={() => setShowSuggester(true)}
          >
            Add Recipe
          </button>
        </>
      )}
      {(recipeData.length === 0 || showSuggester) && (
        <RecipeSuggester
          setRecipeData={setRecipeData}
          setShowSuggester={setShowSuggester}
          setShowFullRecipe={setShowFullRecipe}
        />
      )}
    </>
  );
}
