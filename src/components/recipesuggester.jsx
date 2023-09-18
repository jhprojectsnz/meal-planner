import MealTypes from "./mealtypes";
import Filters from "./filters";
import { useState, useCallback } from "react";
import NewRecipePreview from "./newrecipepreview";
import CloseButton from "./closebutton";

export default function RecipeSuggester({
  setRecipeData,
  setShowNewMeal,
  setShowFullRecipe,
}) {
  const [showFilters, setShowFilters] = useState(false);
  const [recipeType, setRecipeType] = useState("");
  const [currentNewRecipe, setCurrentNewRecipe] = useState({});
  const [filters, setFilters] = useState([]);

  function handleCloseMeal() {
    setShowNewMeal(false);
  }

  const getSingleMealData = useCallback(() => {
    const filtersURLextension = filters
      .reduce((arr, filter) => {
        return [...arr, filter["URL extension"]];
      }, [])
      .join("&");
    const getRandomRecipe = async () => {
      console.log("fetch");
      const responce = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_API_KEY
        }&query=${recipeType}&${filtersURLextension}&number=1&type=main course&&sort=random&&addRecipeInformation=true&fillIngredients=true`
      );
      const data = await responce.json();
      console.log(data.results[0]);
      let newRecipe = data.results[0];
      setCurrentNewRecipe(newRecipe);
    };
    getRandomRecipe();
    //temp sample fetch for offline
    // setCurrentNewRecipe(data[1])
  }, [recipeType, filters]);

  return (
    <div className="meal">
      {!currentNewRecipe.id && !showFilters && (
        <>
          <CloseButton onClickFunction={handleCloseMeal} />
          <h5>Select Recipe Type</h5>
          <div className="meal-icons prevent-select">
            <MealTypes recipeType={recipeType} setRecipeType={setRecipeType} />
          </div>
          {filters.length > 0 && (
            <p className="filters-list">
              <b>Filters:</b>
              <span className="filters-text">
                {filters.map((filter) => filter.text).join(", ")}
              </span>
            </p>
          )}
          <div className="btn-container">
            <button className="btn" onClick={() => setShowFilters(true)}>
              Filters...
            </button>
            <button className="bold-btn" onClick={getSingleMealData}>
              Get Recipe
            </button>
          </div>
        </>
      )}

      {showFilters && (
        <Filters
          previousFilters={filters}
          setFilters={setFilters}
          setShowFilters={setShowFilters}
        />
      )}

      {currentNewRecipe.id && (
        <NewRecipePreview
          currentNewRecipe={currentNewRecipe}
          setShowFullRecipe={setShowFullRecipe}
          recipeType={recipeType}
          setShowNewMeal={setShowNewMeal}
          setRecipeData={setRecipeData}
          getSingleMealData={getSingleMealData}
        />
      )}
    </div>
  );
}
