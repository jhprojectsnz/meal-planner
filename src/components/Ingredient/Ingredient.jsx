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
  function handleClick() {
    setIngredientDisplayStatus((prev) => {
      if (!prev[name]) return { ...prev, [name]: "checked" };
      const objectCopy = { ...prev };
      delete objectCopy[name];
      return objectCopy;
    });
  }

  return (
    <li className="ingredient" key={id} id={name}>
      <FaCheck
        className={
          ingredientDisplayStatus[name] === "checked"
            ? "checkbox checked"
            : "checkbox"
        }
        onClick={handleClick}
      />
      <div className="ingredient-text">
        <span
          className={
            ingredientDisplayStatus[name] === "checked" ? "checked" : ""
          }
          onClick={handleClick}
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
