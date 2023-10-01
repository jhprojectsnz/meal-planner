import React from "react";
import "./Ingredient.css";
import { FaCheck } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Ingredient({
  name,
  amount,
  ingredientDisplayStatus,
  setIngredientDisplayStatus,
}) {
  // Called when checkbox is clicked
  function handleCheckboxClick(ingredientName) {
    setIngredientDisplayStatus((prev) => {
      if (prev[ingredientName] != "checked")
        return { ...prev, [ingredientName]: "checked" };
      const objectCopy = { ...prev };
      delete objectCopy[ingredientName];
      return objectCopy;
    });
  }

  // Called when trash icon clicked - adds ingredient to the deleted list
  function removeIngredient(e) {
    setIngredientDisplayStatus((prev) => {
      return { ...prev, [e.target.parentNode.id]: "deleted" };
    });
  }

  return (
    <li className="ingredient" id={name}>
      <div className="ingredient-text">
        <FaCheck
          className={
            ingredientDisplayStatus[name] === "checked"
              ? "checkbox checked"
              : "checkbox"
          }
          onClick={() => handleCheckboxClick(name)}
        />
        <span
          className={
            ingredientDisplayStatus[name] === "checked" ? "checked" : ""
          }
          onClick={handleCheckboxClick}
        >
          {name}
        </span>
        <span className="amounts">{amount}</span>
      </div>
      <div className="delete-btn" onClick={removeIngredient}>
        <RiDeleteBinLine className="delete-icon" />
      </div>
    </li>
  );
}
