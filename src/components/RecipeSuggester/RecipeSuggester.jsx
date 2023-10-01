import React from "react";
import "./RecipeSuggester.css";
import { useState, useCallback } from "react";
import MealTypes from "../MealTypes/MealTypes";
import Filters from "../Filters/Filters";
import NewRecipePreview from "../NewRecipePreview/NewRecipePreview";
import CloseButton from "../CloseButton/CloseButton";

export default function RecipeSuggester({
  setRecipeData,
  setShowSuggester,
  setShowFullRecipe,
}) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState([
    {
      id: "quickMeals",
      text: "Quick Meals (<30 mins)",
      "URL extension": "maxReadyTime=20",
      checked: false,
    },
    {
      id: "peanutFree",
      text: "Peanut Free",
      "URL extension": "intolerances=Peanut",
      checked: false,
    },
    {
      id: "glutenFree",
      text: "Gluten Free",
      "URL extension": "diet=Gluten Free",
      checked: false,
    },
    {
      id: "dairyFree",
      text: "Dairy Free",
      "URL extension": "diet=Dairy Free",
      checked: false,
    },
    {
      id: "ketogenic",
      text: "Ketogenic",
      "URL extension": "diet=Ketogenic",
      checked: false,
    },
  ]);
  const [recipeType, setRecipeType] = useState("");
  const [currentNewRecipe, setCurrentNewRecipe] = useState({});

  const getSingleMealData = useCallback(() => {
    // Generate URL extension for the filters that have been selected
    const filtersURLextension = filters
      .reduce((arr, filter) => {
        return filter.checked ? [...arr, filter["URL extension"]] : arr;
      }, [])
      .join("&");

    // // For local development only
    // const getRandomRecipe = async () => {
    //   try {
    //     const response = await fetch(
    //       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
    //         import.meta.env.VITE_API_KEY
    //       }&query=${recipeType}&${filtersURLextension}&number=1&type=main course&sort=random&addRecipeInformation=true&fillIngredients=true`,
    //     );
    //     if (!response.ok) {
    //       throw new Error(`Error! status:${response.status}`);
    //     }
    //     const data = await response.json();
    //     const newRecipe = data.results[0];
    //     setCurrentNewRecipe(newRecipe);
    //   } catch (error) {
    //     console.error("There has been an error fetching recipe data", error);
    //   }
    // };

    // For Vercel deployment - calls serverless function
    const getRandomRecipe = async () => {
      const urlExtension = `query=${recipeType}&${filtersURLextension}`;
      try {
        const response = await fetch(
          `https://VERCELURLHERE.vercel.app?extension=${urlExtension}}`,
        );
        if (!response.ok) {
          const error = await response.text();
          throw new Error(`${error} status:${response.status}}`);
        }
        const data = await response.json();
        setCurrentNewRecipe(data);
      } catch (error) {
        console.error("There has been an error fetching recipe data", error);
        // Add error message to UI here
      }
    };
    getRandomRecipe();
    //temp sample fetch for offline
    // setCurrentNewRecipe(data[1])
  }, [recipeType, filters]);

  // String list of filters that have been checked
  const filtersUsed = filters
    .filter((filter) => filter.checked)
    .map((filter) => filter.text)
    .join(", ");

  return (
    <section className="recipe-suggester">
      <CloseButton onClickFunction={() => setShowSuggester(false)} />
      {!currentNewRecipe.id && !showFilters && (
        <>
          <h5>Select Recipe Type</h5>
          <MealTypes recipeType={recipeType} setRecipeType={setRecipeType} />
          {filtersUsed && (
            <p className="filters-list">
              <b>Filters:</b>
              <span className="filters-text">{filtersUsed}</span>
            </p>
          )}
          <div className="suggester-btn-container">
            <button className="btn" onClick={() => setShowFilters(true)}>
              Filters...
            </button>
            <button className="btn bold-btn" onClick={getSingleMealData}>
              Get Recipe
            </button>
          </div>
        </>
      )}
      {showFilters && (
        <Filters
          filters={filters}
          setFilters={setFilters}
          setShowFilters={setShowFilters}
        />
      )}
      {currentNewRecipe.id && (
        <NewRecipePreview
          currentNewRecipe={currentNewRecipe}
          setShowFullRecipe={setShowFullRecipe}
          recipeType={recipeType}
          setShowSuggester={setShowSuggester}
          setRecipeData={setRecipeData}
          getSingleMealData={getSingleMealData}
        />
      )}
    </section>
  );
}
