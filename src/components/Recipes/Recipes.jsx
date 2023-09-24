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
      {recipeData.length === 0 || showSuggester ? (
        <RecipeSuggester
          setRecipeData={setRecipeData}
          setShowSuggester={setShowSuggester}
          setShowFullRecipe={setShowFullRecipe}
        />
      ) : (
        <RecipeList
          recipeData={recipeData}
          setRecipeData={setRecipeData}
          showFullRecipe={showFullRecipe}
          setShowFullRecipe={setShowFullRecipe}
          favourites={favourites}
          setFavourites={setFavourites}
          setShowSuggester={setShowSuggester}
        />
      )}
    </>
  );
}
