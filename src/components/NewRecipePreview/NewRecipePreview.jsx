import React from "react";
import "./NewRecipePreview.css";
import { BiRefresh, BiCheck } from "react-icons/bi";
import RecipeSummary from "../RecipeSummary/RecipeSummary";

export default function NewRecipePreview({
  currentNewRecipe,
  setShowFullRecipe,
  setShowSuggester,
  setRecipeData,
  getSingleMealData,
}) {
  function confirmNewRecipe() {
    setRecipeData((prev) => [...prev, currentNewRecipe]);
    setShowSuggester(false);
  }

  return (
    <>
      <RecipeSummary recipe={currentNewRecipe} />
      <button
        className="btn"
        onClick={() => setShowFullRecipe(currentNewRecipe)}
      >
        View recipe
      </button>
      <div className="preview-btn-container">
        <button className="btn preview-btn-confirm" onClick={confirmNewRecipe}>
          Select
          <BiCheck className="preview-btn-icon" />
        </button>
        <button className="btn preview-btn-reject" onClick={getSingleMealData}>
          Swap
          <BiRefresh className="preview-btn-icon" />
        </button>
      </div>
    </>
  );
}
