import React from "react";
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
  setContentDisplayed,
}) {
  const [showSuggester, setShowSuggester] = useState(false);

  function handleSuggesterClose() {
    if (recipeData.length < 1) {
      setContentDisplayed("home");
    } else {
      setShowSuggester(false);
    }
  }

  return (
    <>
      {recipeData.length === 0 || showSuggester ? (
        <RecipeSuggester
          setRecipeData={setRecipeData}
          setShowSuggester={setShowSuggester}
          setShowFullRecipe={setShowFullRecipe}
          handleSuggesterClose={handleSuggesterClose}
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
