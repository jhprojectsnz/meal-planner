import React from "react";

export default function DeletedItems({
  ingredientDisplayStatus,
  addIngredient,
}) {
  return Object.keys(ingredientDisplayStatus).map((ingredient) =>
    ingredientDisplayStatus[ingredient] === "deleted" ? (
      <li className="ingredient" key={`deleted-${ingredient}`}>
        {ingredient}
        <button id={ingredient} className="add-btn" onClick={addIngredient}>
          +
        </button>
      </li>
    ) : null,
  );
}
