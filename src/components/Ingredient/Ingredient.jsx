import "./Ingredient.css";
import { FaCheck } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Ingredient({
  id,
  name,
  amount,
  removeIngredient,
  ingredientDisplayStatus,
  setIngredientDisplayStatus,
}) {
  function handleCheckboxClick() {
    setIngredientDisplayStatus((prev) => {
      if (!prev[name]) return { ...prev, [name]: "checked" };
      const objectCopy = { ...prev };
      delete objectCopy[name];
      return objectCopy;
    });
  }

  return (
    <li className="ingredient" key={id} id={name}>
      <div className="ingredient-text">
        <FaCheck
          className={
            ingredientDisplayStatus[name] === "checked"
              ? "checkbox checked"
              : "checkbox"
          }
          onClick={handleCheckboxClick}
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
