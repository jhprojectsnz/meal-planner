import CloseButton from "./closebutton";
import defaultImg from "../assets/default-image.jpg";
import { FaHeart } from "react-icons/fa";

export default function RecipeSummaries({
  recipeData,
  showFullRecipe,
  setShowFullRecipe,
  handleCloseRecipe,
  setFavourites,
  favourites,
}) {
  const mealSummaryTidyRegex = /<\/*b>/gi;
  const favouritesIdlist = favourites.map((favourite) => favourite.id);

  function addToFavourites(recipe) {
    if (!favouritesIdlist.includes(recipe.id)) {
      setFavourites((prev) => [...prev, recipe]);
    } else {
      setFavourites((prev) => {
        return prev.filter((fav) => fav.id !== recipe.id);
      });
    }
  }

  return (
    <section className={showFullRecipe.id ? "hidden" : "recipes"}>
      <h3 className="major-heading">Recipes</h3>
      {recipeData.map((meal, index) => {
        //if there is a meal summary take the first sentence and remove html characters, otherwise empty string
        const mealSummary = meal.summary
          ? `${meal.summary.split(".")[0].replace(mealSummaryTidyRegex, "")}.`
          : "";
        return (
          <div className="recipe" id={meal.id} key={meal.id} data-index={index}>
            {/* <button className='close-recipe' onClick={handleCloseMeal}>x</button> */}
            <CloseButton onClickFunction={handleCloseRecipe} />
            <div className="recipe-title">
              <span className="recipe-number">{index + 1}</span>
              <h5>{meal.title}</h5>
            </div>
            <img
              className="recipe-img"
              src={meal.image || defaultImg}
              alt="recipe serving example"
            ></img>
            <div className="recipe-facts">
              <p>Ready in: {meal.readyInMinutes} mins</p>
              <p>Servings: {meal.servings}</p>
            </div>
            <p className="recipe-summary">{mealSummary}</p>
            <div className="btn-container" data-index={index}>
              <button className="btn" onClick={() => addToFavourites(meal)}>
                Favourites
                <FaHeart
                  className={
                    favouritesIdlist.includes(meal.id)
                      ? "fav-icon fav-selected"
                      : "fav-icon"
                  }
                />
              </button>
              <button className="btn" onClick={() => setShowFullRecipe(meal)}>
                Full recipe
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
