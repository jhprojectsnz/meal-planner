import "./NewMeal.css";
import RecipeSource from "../RecipeSource/RecipeSource";
import Favourites from "../Favourites/Favourites";
import RecipeSuggester from "../RecipeSuggester/RecipeSuggester";
import { useState } from "react";

export default function NewMeal({
  setRecipeData,
  setShowNewMeal,
  setShowFullRecipe,
  favourites,
  setFavourites,
}) {
  const [newRecipeSource, setNewRecipeSource] = useState(false);

  return (
    <>
      {!newRecipeSource && (
        <RecipeSource
          setNewRecipeSource={setNewRecipeSource}
          setShowNewMeal={setShowNewMeal}
        />
      )}
      {newRecipeSource === "suggester" && (
        <RecipeSuggester
          setRecipeData={setRecipeData}
          setShowNewMeal={setShowNewMeal}
          setShowFullRecipe={setShowFullRecipe}
        />
      )}
      {newRecipeSource === "favourites" && (
        <Favourites
          favourites={favourites}
          setFavourites={setFavourites}
          setShowFullRecipe={setShowFullRecipe}
          setRecipeData={setRecipeData}
          setShowNewMeal={setShowNewMeal}
          setNewRecipeSource={setNewRecipeSource}
        />
      )}
    </>
  );
}
