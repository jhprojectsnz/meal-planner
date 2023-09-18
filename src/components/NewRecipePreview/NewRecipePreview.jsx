import defaultImg from "../../assets/default-image.jpg";
import { BiRefresh, BiCheck } from "react-icons/bi";

export default function NewRecipePreview({
  currentNewRecipe,
  recipeType,
  setShowFullRecipe,
  setShowNewMeal,
  setRecipeData,
  getSingleMealData,
}) {
  //if there is a meal summary take the first sentence and remove html characters, otherwise empty string
  const replaceRegex = /<\/*b>/gi;
  const mealSummary = currentNewRecipe.summary
    ? `${currentNewRecipe.summary.split(".")[0].replace(replaceRegex, "")}.`
    : "";

  function confirmNewRecipe() {
    setRecipeData((prev) => [...prev, currentNewRecipe]);
    setShowNewMeal(false);
  }

  return (
    <>
      <h5>{currentNewRecipe.title}</h5>
      <div className="meal-img-container">
        <img
          key={currentNewRecipe.id}
          className="meal-img"
          src={currentNewRecipe.image || defaultImg}
          alt="recipe serving example"
        ></img>
      </div>
      <div className="recipe-facts">
        <p>Recipe Type: {recipeType}</p>
        <p>Ready in: {currentNewRecipe.readyInMinutes} mins</p>
        <p>Servings: {currentNewRecipe.servings}</p>
      </div>
      <p className="recipe-summary">{mealSummary}</p>
      <button
        className="btn"
        onClick={() => setShowFullRecipe(currentNewRecipe)}
      >
        Full recipe
      </button>
      <div className="btn-container">
        <button className="btn confirm" onClick={confirmNewRecipe}>
          Add to list
          <BiCheck className="btn-icon" />
        </button>
        <button className="btn reject" onClick={getSingleMealData}>
          Swap
          <BiRefresh className="btn-icon" />
        </button>
      </div>
    </>
  );
}
