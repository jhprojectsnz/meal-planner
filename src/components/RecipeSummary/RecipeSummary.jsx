import "./RecipeSummary.css";
import defaultImg from "../../assets/default-image.jpg";

export default function RecipeSummary({ recipe }) {
  // Used to line breaks from recipe summary
  const replaceRegex = /<\/*b>/gi;
  const mealSummary = recipe.summary
    ? `${recipe.summary.split(".")[0].replace(replaceRegex, "")}.`
    : "";
  return (
    <>
      <h5 className="recipe-title">{recipe.title}</h5>
      <div className="recipe-img-container">
        <img
          key={recipe.id}
          className="recipe-img"
          src={recipe.image || defaultImg}
          alt="recipe serving example"
        ></img>
      </div>
      <div className="recipe-facts">
        <p>Ready in: {recipe.readyInMinutes} mins</p>
        <p>Servings: {recipe.servings}</p>
      </div>
      <p className="recipe-summary">{mealSummary}</p>
    </>
  );
}
