import "./NewMeal.css";
import RecipeSource from "../RecipeSource/RecipeSource";
import Favourites from "../Favourites/Favourites";
import RecipeSuggester from "../RecipeSuggester/RecipeSuggester";
import { useState } from "react";
import CloseButton from "../CloseButton/CloseButton";

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
      {newRecipeSource !== "favourites" ? (
        <section className="meal">
          <CloseButton onClickFunction={() => setShowNewMeal(false)} />
          {!newRecipeSource && (
            <RecipeSource setNewRecipeSource={setNewRecipeSource} />
          )}
          {newRecipeSource === "suggester" && (
            <RecipeSuggester
              setRecipeData={setRecipeData}
              setShowNewMeal={setShowNewMeal}
              setShowFullRecipe={setShowFullRecipe}
            />
          )}
        </section>
      ) : (
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
