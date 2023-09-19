import { GiHotMeal } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import "./RecipeSource.css";

export default function RecipeSource({ setNewRecipeSource }) {
  return (
    <>
      <h5>Add recipe from...</h5>
      <div className="recipe-source-buttons">
        <button
          className="recipe-source-button prevent-select"
          onClick={() => setNewRecipeSource("suggester")}
        >
          <GiHotMeal className="recipe-source-icon" />
          Recipe suggester
        </button>
        <button
          className="recipe-source-button prevent-select"
          onClick={() => setNewRecipeSource("favourites")}
        >
          <FaHeart className="recipe-source-icon" />
          Favourites
        </button>
      </div>
    </>
  );
}
