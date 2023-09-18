import { GiHotMeal } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import "./RecipeSource.css";

export default function RecipeSource({ setNewRecipeSource, setShowNewMeal }) {
  return (
    <>
      <div className="meal">
        <h5>Add recipe from...</h5>
        <section className="recipe-source-container">
          <div
            className="recipe-source"
            onClick={() => setNewRecipeSource("suggester")}
          >
            <GiHotMeal className="recipe-source-icon" />
            <p className="prevent-select">Recipe suggester</p>
          </div>
          <div
            className="recipe-source"
            onClick={() => setNewRecipeSource("favourites")}
          >
            <FaHeart className="recipe-source-icon" />
            <p className="prevent-select">Favourites</p>
          </div>
        </section>
      </div>
      <button className="btn" onClick={() => setShowNewMeal(false)}>
        Back
      </button>
    </>
  );
}
