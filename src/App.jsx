import React from "react";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import Recipes from "./components/Recipes/Recipes";
import Intro from "./components/Intro/Intro";
import Favourites from "./components/Favourites/Favourites";
import RecipeModal from "./components/RecipeModal/RecipeModal";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  const [showFullRecipe, setShowFullRecipe] = useState({});
  const [contentDisplayed, setContentDisplayed] = useState("home");
  const [ingredientDisplayStatus, setIngredientDisplayStatus] = useState({});
  const [favourites, setFavourites] = useState([
    {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 13,
      gaps: "no",
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 2,
      healthScore: 11,
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      license: "CC BY 3.0",
      sourceName: "Foodista",
      pricePerServing: 169.5,
      extendedIngredients: [
        {
          id: 5006,
          aisle: "Meat",
          image: "whole-chicken.jpg",
          consistency: "SOLID",
          name: "chicken",
          nameClean: "whole chicken",
          original: "1 3-4 lb. whole chicken",
          originalName: "whole chicken",
          amount: 3,
          unit: "lb",
          meta: ["whole"],
          measures: {
            us: {
              amount: 3,
              unitShort: "lb",
              unitLong: "pounds",
            },
            metric: {
              amount: 653.173,
              unitShort: "g",
              unitLong: "grams",
            },
          },
        },
        {
          id: 10211215,
          aisle: "Produce",
          image: "garlic.jpg",
          consistency: "SOLID",
          name: "garlic cloves",
          nameClean: "whole garlic cloves",
          original: "4 garlic cloves, chopped",
          originalName: "garlic cloves, chopped",
          amount: 4,
          unit: "",
          meta: ["chopped"],
          measures: {
            us: {
              amount: 4,
              unitShort: "",
              unitLong: "",
            },
            metric: {
              amount: 4,
              unitShort: "",
              unitLong: "",
            },
          },
        },
        {
          id: 9152,
          aisle: "Produce",
          image: "lemon-juice.jpg",
          consistency: "LIQUID",
          name: "juice of lemon",
          nameClean: "lemon juice",
          original: "juice of 1/2 lemon",
          originalName: "juice lemon",
          amount: 0.5,
          unit: "",
          meta: [],
          measures: {
            us: {
              amount: 0.5,
              unitShort: "",
              unitLong: "",
            },
            metric: {
              amount: 0.5,
              unitShort: "",
              unitLong: "",
            },
          },
        },
        {
          id: 1022068,
          aisle: "Oil, Vinegar, Salad Dressing",
          image: "red-wine-vinegar.jpg",
          consistency: "LIQUID",
          name: "red wine vinegar",
          nameClean: "red wine vinegar",
          original: "3 tablespoons white vinegar or red wine vinegar",
          originalName: "white vinegar or red wine vinegar",
          amount: 3,
          unit: "tablespoons",
          meta: [],
          measures: {
            us: {
              amount: 3,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
            metric: {
              amount: 3,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
        },
        {
          id: 16124,
          aisle: "Condiments",
          image: "soy-sauce.jpg",
          consistency: "LIQUID",
          name: "soy sauce",
          nameClean: "soy sauce",
          original: "1 tablespoon soy sauce",
          originalName: "soy sauce",
          amount: 1,
          unit: "tablespoon",
          meta: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
            metric: {
              amount: 1,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
          },
        },
        {
          id: 4053,
          aisle: "Oil, Vinegar, Salad Dressing",
          image: "olive-oil.jpg",
          consistency: "LIQUID",
          name: "olive oil",
          nameClean: "olive oil",
          original: "3 tablespoons canola or olive oil",
          originalName: "canola or olive oil",
          amount: 3,
          unit: "tablespoons",
          meta: [],
          measures: {
            us: {
              amount: 3,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
            metric: {
              amount: 3,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
        },
        {
          id: 2028,
          aisle: "Spices and Seasonings",
          image: "paprika.jpg",
          consistency: "SOLID",
          name: "paprika",
          nameClean: "paprika",
          original: "2 tablespoons paprika",
          originalName: "paprika",
          amount: 2,
          unit: "tablespoons",
          meta: [],
          measures: {
            us: {
              amount: 2,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
            metric: {
              amount: 2,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
        },
        {
          id: 1002014,
          aisle: "Spices and Seasonings",
          image: "ground-cumin.jpg",
          consistency: "SOLID",
          name: "cumin",
          nameClean: "cumin",
          original: "1 tablespoon cumin",
          originalName: "cumin",
          amount: 1,
          unit: "tablespoon",
          meta: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
            metric: {
              amount: 1,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
          },
        },
        {
          id: 2043,
          aisle: "Spices and Seasonings",
          image: "turmeric.jpg",
          consistency: "SOLID",
          name: "turmeric",
          nameClean: "turmeric",
          original: "1 teaspoon turmeric",
          originalName: "turmeric",
          amount: 1,
          unit: "teaspoon",
          meta: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "tsp",
              unitLong: "teaspoon",
            },
            metric: {
              amount: 1,
              unitShort: "tsp",
              unitLong: "teaspoon",
            },
          },
        },
        {
          id: 2047,
          aisle: "Spices and Seasonings",
          image: "salt.jpg",
          consistency: "SOLID",
          name: "salt",
          nameClean: "table salt",
          original: "salt",
          originalName: "salt",
          amount: 4,
          unit: "servings",
          meta: [],
          measures: {
            us: {
              amount: 4,
              unitShort: "servings",
              unitLong: "servings",
            },
            metric: {
              amount: 4,
              unitShort: "servings",
              unitLong: "servings",
            },
          },
        },
        {
          id: 1002030,
          aisle: "Spices and Seasonings",
          image: "pepper.jpg",
          consistency: "SOLID",
          name: "pepper",
          nameClean: "black pepper",
          original: "black pepper",
          originalName: "black pepper",
          amount: 4,
          unit: "servings",
          meta: ["black"],
          measures: {
            us: {
              amount: 4,
              unitShort: "servings",
              unitLong: "servings",
            },
            metric: {
              amount: 4,
              unitShort: "servings",
              unitLong: "servings",
            },
          },
        },
        {
          id: -1,
          aisle: "?",
          image: null,
          consistency: "SOLID",
          name: "kitchen twine",
          nameClean: null,
          original: "kitchen twine",
          originalName: "kitchen twine",
          amount: 1,
          unit: "serving",
          meta: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "serving",
              unitLong: "serving",
            },
            metric: {
              amount: 1,
              unitShort: "serving",
              unitLong: "serving",
            },
          },
        },
        {
          id: -1,
          aisle: "?",
          image: null,
          consistency: "SOLID",
          name: "kitchen twine",
          nameClean: null,
          original: "kitchen twine",
          originalName: "kitchen twine",
          amount: 4,
          unit: "servings",
          meta: [],
          measures: {
            us: {
              amount: 4,
              unitShort: "servings",
              unitLong: "servings",
            },
            metric: {
              amount: 4,
              unitShort: "servings",
              unitLong: "servings",
            },
          },
        },
      ],
      id: 655793,
      title: "Peruvian Roast Chicken",
      readyInMinutes: 45,
      servings: 4,
      sourceUrl:
        "https://www.foodista.com/recipe/48JPTJ2N/peruvian-roast-chicken",
      image: "https://spoonacular.com/recipeImages/655793-312x231.jpg",
      imageType: "jpg",
      summary:
        'If you have about <b>45 minutes</b> to spend in the kitchen, Peruvian Roast Chicken might be an outstanding <b>gluten free, dairy free, and ketogenic</b> recipe to try. This main course has <b>472 calories</b>, <b>32g of protein</b>, and <b>36g of fat</b> per serving. This recipe serves 4 and costs $1.7 per serving. This recipe from Foodista requires olive oil, garlic cloves, juice of lemon, and red wine vinegar. 2 people were impressed by this recipe. All things considered, we decided this recipe <b>deserves a spoonacular score of 54%</b>. This score is solid. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/peruvian-roast-chicken-1583009">Peruvian Roast Chicken</a>, <a href="https://spoonacular.com/recipes/peruvian-roast-chicken-600230">Peruvian Roast Chicken</a>, and <a href="https://spoonacular.com/recipes/peruvian-roast-chicken-1262947">Peruvian Roast Chicken</a>.',
      cuisines: [],
      dishTypes: ["lunch", "main course", "main dish", "dinner"],
      diets: ["gluten free", "dairy free", "ketogenic"],
      occasions: [],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Mix together the marinade ingredients.",
              ingredients: [
                {
                  id: 0,
                  name: "marinade",
                  localizedName: "marinade",
                  image: "seasoning.png",
                },
              ],
              equipment: [],
            },
            {
              number: 2,
              step: "Place the whole chicken into a large (about 2 gallon size) ziploc bag and pour in the marinade.",
              ingredients: [
                {
                  id: 5006,
                  name: "whole chicken",
                  localizedName: "whole chicken",
                  image: "whole-chicken.jpg",
                },
                {
                  id: 0,
                  name: "marinade",
                  localizedName: "marinade",
                  image: "seasoning.png",
                },
              ],
              equipment: [],
            },
            {
              number: 3,
              step: "Spread the marinade so that it covers all the chicken.",
              ingredients: [
                {
                  id: 0,
                  name: "marinade",
                  localizedName: "marinade",
                  image: "seasoning.png",
                },
                {
                  id: 5006,
                  name: "whole chicken",
                  localizedName: "whole chicken",
                  image: "whole-chicken.jpg",
                },
                {
                  id: 0,
                  name: "spread",
                  localizedName: "spread",
                  image: "",
                },
              ],
              equipment: [],
            },
            {
              number: 4,
              step: "Marinade overnight.",
              ingredients: [
                {
                  id: 0,
                  name: "marinade",
                  localizedName: "marinade",
                  image: "seasoning.png",
                },
              ],
              equipment: [],
            },
            {
              number: 5,
              step: "Take the chicken out of the fridge about 30-45 minutes before you roast it, so it comes closer to room temperature. This helps the chicken become more moist and cooked evenly.",
              ingredients: [
                {
                  id: 5006,
                  name: "whole chicken",
                  localizedName: "whole chicken",
                  image: "whole-chicken.jpg",
                },
              ],
              equipment: [],
              length: {
                number: 45,
                unit: "minutes",
              },
            },
            {
              number: 6,
              step: "Preheat the oven to 450F.",
              ingredients: [],
              equipment: [
                {
                  id: 404784,
                  name: "oven",
                  localizedName: "oven",
                  image: "oven.jpg",
                  temperature: {
                    number: 450,
                    unit: "Fahrenheit",
                  },
                },
              ],
            },
            {
              number: 7,
              step: "Remove the chicken from the marinate and brush off any garlic so it will not burn.",
              ingredients: [
                {
                  id: 5006,
                  name: "whole chicken",
                  localizedName: "whole chicken",
                  image: "whole-chicken.jpg",
                },
                {
                  id: 11215,
                  name: "garlic",
                  localizedName: "garlic",
                  image: "garlic.png",
                },
              ],
              equipment: [],
            },
            {
              number: 8,
              step: "Lay the chicken breast side up in a roasting pan or cast iron skillet.",
              ingredients: [
                {
                  id: 5062,
                  name: "chicken breast",
                  localizedName: "chicken breast",
                  image: "chicken-breasts.png",
                },
              ],
              equipment: [
                {
                  id: 404629,
                  name: "roasting pan",
                  localizedName: "roasting pan",
                  image: "roasting-pan.jpg",
                },
              ],
            },
            {
              number: 9,
              step: "Truss the chicken. This keeps the juices in during the roasting and makes the meat more tender.",
              ingredients: [
                {
                  id: 5006,
                  name: "whole chicken",
                  localizedName: "whole chicken",
                  image: "whole-chicken.jpg",
                },
                {
                  id: 1065062,
                  name: "meat",
                  localizedName: "meat",
                  image: "whole-chicken.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 10,
              step: "Roast 45-55 minutes.",
              ingredients: [],
              equipment: [],
              length: {
                number: 55,
                unit: "minutes",
              },
            },
            {
              number: 11,
              step: "Let rest 5 minutes before carving.",
              ingredients: [],
              equipment: [],
              length: {
                number: 5,
                unit: "minutes",
              },
            },
          ],
        },
      ],
      spoonacularSourceUrl:
        "https://spoonacular.com/peruvian-roast-chicken-655793",
      usedIngredientCount: 0,
      missedIngredientCount: 8,
      missedIngredients: [
        {
          id: 5006,
          amount: 3,
          unit: "lb",
          unitLong: "pounds",
          unitShort: "lb",
          aisle: "Meat",
          name: "chicken",
          original: "1 3-4 lb. whole chicken",
          originalName: "whole chicken",
          meta: ["whole"],
          extendedName: "whole chicken",
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg",
        },
        {
          id: 10211215,
          amount: 4,
          unit: "",
          unitLong: "",
          unitShort: "",
          aisle: "Produce",
          name: "garlic cloves",
          original: "4 garlic cloves, chopped",
          originalName: "garlic cloves, chopped",
          meta: ["chopped"],
          image: "https://spoonacular.com/cdn/ingredients_100x100/garlic.jpg",
        },
        {
          id: 9152,
          amount: 0.5,
          unit: "",
          unitLong: "",
          unitShort: "",
          aisle: "Produce",
          name: "juice of lemon",
          original: "juice of 1/2 lemon",
          originalName: "juice lemon",
          meta: [],
          extendedName: "lemon (juice)",
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg",
        },
        {
          id: 1022068,
          amount: 3,
          unit: "tablespoons",
          unitLong: "tablespoons",
          unitShort: "Tbsp",
          aisle: "Oil, Vinegar, Salad Dressing",
          name: "red wine vinegar",
          original: "3 tablespoons white vinegar or red wine vinegar",
          originalName: "white vinegar or red wine vinegar",
          meta: [],
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/red-wine-vinegar.jpg",
        },
        {
          id: 16124,
          amount: 1,
          unit: "tablespoon",
          unitLong: "tablespoon",
          unitShort: "Tbsp",
          aisle: "Condiments",
          name: "soy sauce",
          original: "1 tablespoon soy sauce",
          originalName: "soy sauce",
          meta: [],
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/soy-sauce.jpg",
        },
        {
          id: 2028,
          amount: 2,
          unit: "tablespoons",
          unitLong: "tablespoons",
          unitShort: "Tbsp",
          aisle: "Spices and Seasonings",
          name: "paprika",
          original: "2 tablespoons paprika",
          originalName: "paprika",
          meta: [],
          image: "https://spoonacular.com/cdn/ingredients_100x100/paprika.jpg",
        },
        {
          id: 1002014,
          amount: 1,
          unit: "tablespoon",
          unitLong: "tablespoon",
          unitShort: "Tbsp",
          aisle: "Spices and Seasonings",
          name: "cumin",
          original: "1 tablespoon cumin",
          originalName: "cumin",
          meta: [],
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/ground-cumin.jpg",
        },
        {
          id: 2043,
          amount: 1,
          unit: "teaspoon",
          unitLong: "teaspoon",
          unitShort: "tsp",
          aisle: "Spices and Seasonings",
          name: "turmeric",
          original: "1 teaspoon turmeric",
          originalName: "turmeric",
          meta: [],
          image: "https://spoonacular.com/cdn/ingredients_100x100/turmeric.jpg",
        },
      ],
      likes: 0,
      usedIngredients: [],
      unusedIngredients: [],
    },
    {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 12,
      gaps: "no",
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 3,
      healthScore: 14,
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      license: "CC BY 3.0",
      sourceName: "Foodista",
      pricePerServing: 225.55,
      extendedIngredients: [
        {
          id: 4053,
          aisle: "Oil, Vinegar, Salad Dressing",
          image: "olive-oil.jpg",
          consistency: "LIQUID",
          name: "olive oil",
          nameClean: "olive oil",
          original: "1 tablespoon olive oil",
          originalName: "olive oil",
          amount: 1,
          unit: "tablespoon",
          meta: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
            metric: {
              amount: 1,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
          },
        },
        {
          id: 10211215,
          aisle: "Produce",
          image: "garlic.jpg",
          consistency: "SOLID",
          name: "garlic bulb",
          nameClean: "whole garlic cloves",
          original: "1 whole garlic bulb",
          originalName: "whole garlic bulb",
          amount: 1,
          unit: "",
          meta: ["whole"],
          measures: {
            us: {
              amount: 1,
              unitShort: "",
              unitLong: "",
            },
            metric: {
              amount: 1,
              unitShort: "",
              unitLong: "",
            },
          },
        },
        {
          id: 10023232,
          aisle: "Meat",
          image: "ribeye-raw.jpg",
          consistency: "SOLID",
          name: "beef rib steak",
          nameClean: "ribeye steak",
          original: "1 pound Boneless Beef Rib Steak –",
          originalName: "Boneless Beef Rib Steak –",
          amount: 1,
          unit: "pound",
          meta: ["boneless"],
          measures: {
            us: {
              amount: 1,
              unitShort: "lb",
              unitLong: "pound",
            },
            metric: {
              amount: 453.592,
              unitShort: "g",
              unitLong: "grams",
            },
          },
        },
        {
          id: 6971,
          aisle: "Condiments",
          image: "dark-sauce.jpg",
          consistency: "LIQUID",
          name: "worcestershire sauce",
          nameClean: "worcestershire sauce",
          original: "1 teaspoon Worcestershire sauce",
          originalName: "Worcestershire sauce",
          amount: 1,
          unit: "teaspoon",
          meta: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "tsp",
              unitLong: "teaspoon",
            },
            metric: {
              amount: 1,
              unitShort: "tsp",
              unitLong: "teaspoon",
            },
          },
        },
        {
          id: 1032046,
          aisle: "Condiments",
          image: "dijon-mustard.jpg",
          consistency: "LIQUID",
          name: "jack daniels mustard",
          nameClean: "dijon mustard",
          original:
            "1/2 tablespoon Jack Daniels Mustard (or other spicy deli or Dijon mustard)<",
          originalName:
            "Jack Daniels Mustard (or other spicy deli or Dijon mustard)",
          amount: 0.5,
          unit: "tablespoon",
          meta: ["(or other spicy deli or Dijon mustard)"],
          measures: {
            us: {
              amount: 0.5,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
            metric: {
              amount: 0.5,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
        },
        {
          id: 1032009,
          aisle: "Spices and Seasonings",
          image: "red-pepper-flakes.jpg",
          consistency: "SOLID",
          name: "pepper flakes",
          nameClean: "red pepper flakes",
          original: "1/2 teaspoon crushed red pepper flakes",
          originalName: "crushed red pepper flakes",
          amount: 0.5,
          unit: "teaspoon",
          meta: ["red", "crushed"],
          measures: {
            us: {
              amount: 0.5,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
            metric: {
              amount: 0.5,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
        },
        {
          id: 14100,
          aisle: "Alcoholic Beverages",
          image: "red-wine.jpg",
          consistency: "LIQUID",
          name: "rose syrah wine",
          nameClean: "shiraz",
          original: "1/4 cup Rose Syrah Wine",
          originalName: "Rose Syrah Wine",
          amount: 0.25,
          unit: "cup",
          meta: [],
          measures: {
            us: {
              amount: 0.25,
              unitShort: "cups",
              unitLong: "cups",
            },
            metric: {
              amount: 59.147,
              unitShort: "ml",
              unitLong: "milliliters",
            },
          },
        },
        {
          id: 4053,
          aisle: "Oil, Vinegar, Salad Dressing",
          image: "olive-oil.jpg",
          consistency: "LIQUID",
          name: "olive oil",
          nameClean: "olive oil",
          original: "2 tablespoons olive oil",
          originalName: "olive oil",
          amount: 2,
          unit: "tablespoons",
          meta: [],
          measures: {
            us: {
              amount: 2,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
            metric: {
              amount: 2,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
        },
        {
          id: 11916,
          aisle: "Canned and Jarred",
          image: "red-pepper.jpg",
          consistency: "SOLID",
          name: "roasted pepper sections",
          nameClean: "roasted red peppers",
          original:
            "3 roasted red pepper sections (they make great varieties of different peppers in j",
          originalName:
            "roasted red pepper sections (they make great varieties of different peppers in j",
          amount: 3,
          unit: "",
          meta: ["red"],
          measures: {
            us: {
              amount: 3,
              unitShort: "",
              unitLong: "",
            },
            metric: {
              amount: 3,
              unitShort: "",
              unitLong: "",
            },
          },
        },
        {
          id: 93820,
          aisle: "Cheese",
          image: "white-cream-fluffy.jpg",
          consistency: "SOLID",
          name: "marscapone cheese",
          nameClean: "mascarpone",
          original: "1/2 cup Marscapone cheese",
          originalName: "Marscapone cheese",
          amount: 0.5,
          unit: "cup",
          meta: [],
          measures: {
            us: {
              amount: 0.5,
              unitShort: "cups",
              unitLong: "cups",
            },
            metric: {
              amount: 112.5,
              unitShort: "g",
              unitLong: "grams",
            },
          },
        },
        {
          id: 1002055,
          aisle: "Produce",
          image: "horseradish.jpg",
          consistency: "LIQUID",
          name: "horseradish",
          nameClean: "horseradish",
          original: "2 teaspoons horseradish",
          originalName: "horseradish",
          amount: 2,
          unit: "teaspoons",
          meta: [],
          measures: {
            us: {
              amount: 2,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
            metric: {
              amount: 2,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
        },
        {
          id: 10311215,
          aisle: "Produce",
          image: "garlic-roasted.jpg",
          consistency: "SOLID",
          name: "roasted garlic",
          nameClean: "roasted garlic",
          original: "4 cloves of roasted garlic",
          originalName: "roasted garlic",
          amount: 4,
          unit: "cloves",
          meta: [],
          measures: {
            us: {
              amount: 4,
              unitShort: "cloves",
              unitLong: "cloves",
            },
            metric: {
              amount: 4,
              unitShort: "cloves",
              unitLong: "cloves",
            },
          },
        },
        {
          id: 2003,
          aisle: "Spices and Seasonings",
          image: "basil.jpg",
          consistency: "SOLID",
          name: "basil",
          nameClean: "dried basil",
          original: "1/2 tablespoon tsp. dried basil or 1 fresh",
          originalName: "tsp. dried basil or 1 fresh",
          amount: 0.5,
          unit: "tablespoon",
          meta: ["dried", "fresh"],
          measures: {
            us: {
              amount: 0.5,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
            metric: {
              amount: 0.5,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
        },
        {
          id: 2027,
          aisle: "Produce",
          image: "oregano.jpg",
          consistency: "SOLID",
          name: "oregano",
          nameClean: "oregano",
          original:
            "1/2 teaspoon tsp. dried oregano or 1 fresh (fresh oregano is strong so you may want to taste",
          originalName:
            "tsp. dried oregano or 1 fresh (fresh oregano is strong so you may want to taste",
          amount: 0.5,
          unit: "teaspoon",
          meta: ["dried", "fresh", "to taste"],
          measures: {
            us: {
              amount: 0.5,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
            metric: {
              amount: 0.5,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
        },
        {
          id: 9152,
          aisle: "Produce",
          image: "lemon-juice.jpg",
          consistency: "LIQUID",
          name: "lemon juice",
          nameClean: "lemon juice",
          original: "2 teaspoons fresh lemon juice",
          originalName: "fresh lemon juice",
          amount: 2,
          unit: "teaspoons",
          meta: ["fresh"],
          measures: {
            us: {
              amount: 2,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
            metric: {
              amount: 2,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
        },
        {
          id: 2047,
          aisle: "Spices and Seasonings",
          image: "salt.jpg",
          consistency: "SOLID",
          name: "of salt",
          nameClean: "table salt",
          original: "2 pinchs of salt",
          originalName: "s of salt",
          amount: 2,
          unit: "pinch",
          meta: [],
          measures: {
            us: {
              amount: 2,
              unitShort: "pinch",
              unitLong: "pinchs",
            },
            metric: {
              amount: 2,
              unitShort: "pinch",
              unitLong: "pinchs",
            },
          },
        },
        {
          id: 1002030,
          aisle: "Spices and Seasonings",
          image: "pepper.jpg",
          consistency: "SOLID",
          name: "of pepper",
          nameClean: "black pepper",
          original: "2 pinchs of pepper",
          originalName: "s of pepper",
          amount: 2,
          unit: "pinch",
          meta: [],
          measures: {
            us: {
              amount: 2,
              unitShort: "pinch",
              unitLong: "pinchs",
            },
            metric: {
              amount: 2,
              unitShort: "pinch",
              unitLong: "pinchs",
            },
          },
        },
        {
          id: 14100,
          aisle: "Alcoholic Beverages",
          image: "red-wine.jpg",
          consistency: "LIQUID",
          name: "rose syrah wine",
          nameClean: "shiraz",
          original: "1/8 cup of Rose Syrah Wine",
          originalName: "Rose Syrah Wine",
          amount: 0.125,
          unit: "cup",
          meta: [],
          measures: {
            us: {
              amount: 0.125,
              unitShort: "cups",
              unitLong: "cups",
            },
            metric: {
              amount: 29.573,
              unitShort: "ml",
              unitLong: "milliliters",
            },
          },
        },
        {
          id: 18029,
          aisle: "Bakery/Bread",
          image: "crusty-bread.jpg",
          consistency: "SOLID",
          name: "bread",
          nameClean: "french bread",
          original: "1 loaf of store bought French bread",
          originalName: "store bought French bread",
          amount: 1,
          unit: "loaf",
          meta: ["french", "store bought"],
          measures: {
            us: {
              amount: 1,
              unitShort: "loaf",
              unitLong: "loaf",
            },
            metric: {
              amount: 1,
              unitShort: "loaf",
              unitLong: "loaf",
            },
          },
        },
        {
          id: 11294,
          aisle: "Produce",
          image: "sweet-onion.png",
          consistency: "SOLID",
          name: "or)",
          nameClean: "maui onion",
          original:
            "1 small or ½ of a large sweet onion (Vidalia if you can get it)",
          originalName:
            "or ½ of a large sweet onion (Vidalia if you can get it)",
          amount: 1,
          unit: "small",
          meta: ["sweet", "canned"],
          measures: {
            us: {
              amount: 1,
              unitShort: "small",
              unitLong: "small",
            },
            metric: {
              amount: 1,
              unitShort: "small",
              unitLong: "small",
            },
          },
        },
      ],
      id: 661500,
      title: "Steak And Pepper Rounds With Rose Horseradish Garlic Creme Sauce",
      readyInMinutes: 45,
      servings: 8,
      sourceUrl:
        "https://www.foodista.com/recipe/6K4WL4TN/steak-and-pepper-rounds-with-rose-horseradish-garlic-creme-sauce",
      image: "https://spoonacular.com/recipeImages/661500-312x231.jpg",
      imageType: "jpg",
      summary:
        'Steak And Pepper Rounds With Rose Horseradish Garlic Creme Sauce is a main course that serves 8. One portion of this dish contains around <b>19g of protein</b>, <b>21g of fat</b>, and a total of <b>395 calories</b>. For <b>$2.26 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. <b>valentin day</b> will be even more special with this recipe. This recipe is liked by 3 foodies and cooks. If you have olive oil, of pepper, of salt, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 51%</b>. This score is solid. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/pepper-crusted-steak-with-horseradish-cream-on-grilled-garlic-crostini-42714">Pepper-Crusted Steak with Horseradish Cream on Grilled Garlic Crostini</a>, <a href="https://spoonacular.com/recipes/cumin-pepper-flank-steak-with-horseradish-herb-sauce-42583">Cumin-Pepper Flank Steak with Horseradish Herb Sauce</a>, and <a href="https://spoonacular.com/recipes/garlic-steak-with-horseradish-sauce-by-bobby-flay-120333">Garlic Steak With Horseradish Sauce by Bobby Flay</a>.',
      cuisines: [],
      dishTypes: ["lunch", "main course", "main dish", "dinner"],
      diets: [],
      occasions: ["valentine's day", "father's day"],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Drizzle 1 tbsp. of olive oil over garlic bulb and wrap in aluminum foil.",
              ingredients: [
                {
                  id: 4053,
                  name: "olive oil",
                  localizedName: "olive oil",
                  image: "olive-oil.jpg",
                },
                {
                  id: 11215,
                  name: "garlic",
                  localizedName: "garlic",
                  image: "garlic.png",
                },
                {
                  id: 10018364,
                  name: "wrap",
                  localizedName: "wrap",
                  image: "flour-tortilla.jpg",
                },
              ],
              equipment: [
                {
                  id: 404765,
                  name: "aluminum foil",
                  localizedName: "aluminum foil",
                  image: "aluminum-foil.png",
                },
              ],
            },
            {
              number: 2,
              step: "Roast on a cookie sheet in oven at 400 for approximately 40 minutes.",
              ingredients: [
                {
                  id: 10118192,
                  name: "cookies",
                  localizedName: "cookies",
                  image: "shortbread-cookies.jpg",
                },
              ],
              equipment: [
                {
                  id: 404727,
                  name: "baking sheet",
                  localizedName: "baking sheet",
                  image: "baking-sheet.jpg",
                },
                {
                  id: 404784,
                  name: "oven",
                  localizedName: "oven",
                  image: "oven.jpg",
                },
              ],
              length: {
                number: 40,
                unit: "minutes",
              },
            },
            {
              number: 3,
              step: "Remove and let cool to touch.",
              ingredients: [],
              equipment: [],
            },
            {
              number: 4,
              step: "While garlic is roasting marinate steak with next 4 ingredients in a ziplock bag.",
              ingredients: [
                {
                  id: 11215,
                  name: "garlic",
                  localizedName: "garlic",
                  image: "garlic.png",
                },
                {
                  id: 23232,
                  name: "steak",
                  localizedName: "steak",
                  image: "ribeye-raw.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 5,
              step: "Toss to coat and let sit while you slice vegetables.",
              ingredients: [
                {
                  id: 11583,
                  name: "vegetable",
                  localizedName: "vegetable",
                  image: "mixed-vegetables.png",
                },
              ],
              equipment: [],
            },
            {
              number: 6,
              step: "Heat olive oil in skillet on medium heat.",
              ingredients: [
                {
                  id: 4053,
                  name: "olive oil",
                  localizedName: "olive oil",
                  image: "olive-oil.jpg",
                },
              ],
              equipment: [
                {
                  id: 404645,
                  name: "frying pan",
                  localizedName: "frying pan",
                  image: "pan.png",
                },
              ],
            },
            {
              number: 7,
              step: "Slice onion and peppers in 3 inch strips.",
              ingredients: [
                {
                  id: 10111333,
                  name: "peppers",
                  localizedName: "peppers",
                  image: "green-pepper.jpg",
                },
                {
                  id: 11282,
                  name: "onion",
                  localizedName: "onion",
                  image: "brown-onion.png",
                },
              ],
              equipment: [],
            },
            {
              number: 8,
              step: "Add onion to hot pan and saut until onions get slightly browned and caramelized for about 20 minutes.",
              ingredients: [
                {
                  id: 11282,
                  name: "onion",
                  localizedName: "onion",
                  image: "brown-onion.png",
                },
              ],
              equipment: [
                {
                  id: 404645,
                  name: "frying pan",
                  localizedName: "frying pan",
                  image: "pan.png",
                },
              ],
              length: {
                number: 20,
                unit: "minutes",
              },
            },
            {
              number: 9,
              step: "Toss peppers in and cook for another 10 to 15 minutes.",
              ingredients: [
                {
                  id: 10111333,
                  name: "peppers",
                  localizedName: "peppers",
                  image: "green-pepper.jpg",
                },
              ],
              equipment: [],
              length: {
                number: 10,
                unit: "minutes",
              },
            },
            {
              number: 10,
              step: "While onions and peppers are cooking place steak on a roasting pan and broil in oven or grill for approximately 5 to 10 minutes per side. Be careful as this steak will be tough if cooked to well done. And it will continue to cook when removed from the heat so under cook it a little to account for this process.",
              ingredients: [
                {
                  id: 10111333,
                  name: "peppers",
                  localizedName: "peppers",
                  image: "green-pepper.jpg",
                },
                {
                  id: 11282,
                  name: "onion",
                  localizedName: "onion",
                  image: "brown-onion.png",
                },
                {
                  id: 23232,
                  name: "steak",
                  localizedName: "steak",
                  image: "ribeye-raw.jpg",
                },
              ],
              equipment: [
                {
                  id: 404629,
                  name: "roasting pan",
                  localizedName: "roasting pan",
                  image: "roasting-pan.jpg",
                },
                {
                  id: 404706,
                  name: "grill",
                  localizedName: "grill",
                  image: "grill.jpg",
                },
                {
                  id: 404784,
                  name: "oven",
                  localizedName: "oven",
                  image: "oven.jpg",
                },
              ],
              length: {
                number: 5,
                unit: "minutes",
              },
            },
            {
              number: 11,
              step: "Remove from heat and let rest before cutting.",
              ingredients: [],
              equipment: [],
            },
            {
              number: 12,
              step: "In a food processor combine marscapone, horseradish, and squeeze out 4 of the roasted garlic cloves. (Store the rest of the bulb in an airtight container in the refrigerator for up to one week)",
              ingredients: [
                {
                  id: 10311215,
                  name: "roasted garlic",
                  localizedName: "roasted garlic",
                  image: "garlic-roasted.jpg",
                },
                {
                  id: 1002055,
                  name: "horseradish",
                  localizedName: "horseradish",
                  image: "horseradish.jpg",
                },
                {
                  id: 93820,
                  name: "mascarpone",
                  localizedName: "mascarpone",
                  image: "white-cream-fluffy.jpg",
                },
                {
                  id: 1002011,
                  name: "clove",
                  localizedName: "clove",
                  image: "cloves.jpg",
                },
              ],
              equipment: [
                {
                  id: 404771,
                  name: "food processor",
                  localizedName: "food processor",
                  image: "food-processor.png",
                },
              ],
            },
            {
              number: 13,
              step: "Pulse a few times to blend.",
              ingredients: [],
              equipment: [],
            },
            {
              number: 14,
              step: "Add next 6 ingredients and mix well.",
              ingredients: [],
              equipment: [],
            },
            {
              number: 15,
              step: "Slice French Bread into  inch rounds and heat in oven or on grill (grilled bread takes on a very unique sweet smoky flavor) until lightly toasted.",
              ingredients: [
                {
                  id: 18029,
                  name: "french bread",
                  localizedName: "french bread",
                  image: "crusty-bread.jpg",
                },
                {
                  id: 18064,
                  name: "bread",
                  localizedName: "bread",
                  image: "white-bread.jpg",
                },
              ],
              equipment: [
                {
                  id: 404706,
                  name: "grill",
                  localizedName: "grill",
                  image: "grill.jpg",
                },
                {
                  id: 404784,
                  name: "oven",
                  localizedName: "oven",
                  image: "oven.jpg",
                },
              ],
            },
            {
              number: 16,
              step: "Cut steak into 1/8 to  inch strips.",
              ingredients: [
                {
                  id: 23232,
                  name: "steak",
                  localizedName: "steak",
                  image: "ribeye-raw.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 17,
              step: "Smooth sauce over each warm piece of bread.",
              ingredients: [
                {
                  id: 18064,
                  name: "bread",
                  localizedName: "bread",
                  image: "white-bread.jpg",
                },
                {
                  id: 0,
                  name: "sauce",
                  localizedName: "sauce",
                  image: "",
                },
              ],
              equipment: [],
            },
            {
              number: 18,
              step: "Top with steak and the onion pepper mixture.",
              ingredients: [
                {
                  id: 1002030,
                  name: "pepper",
                  localizedName: "pepper",
                  image: "pepper.jpg",
                },
                {
                  id: 11282,
                  name: "onion",
                  localizedName: "onion",
                  image: "brown-onion.png",
                },
                {
                  id: 23232,
                  name: "steak",
                  localizedName: "steak",
                  image: "ribeye-raw.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 19,
              step: "These are appetizer bites but you could transform this into a hungry mans meal by using a large baguette or sub roll.",
              ingredients: [
                {
                  id: 18033,
                  name: "baguette",
                  localizedName: "baguette",
                  image: "half-baguette.jpg",
                },
                {
                  id: 98940,
                  name: "sub bun",
                  localizedName: "sub bun",
                  image: "french-rolls.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 20,
              step: "Any other variations, suggestions, or commentsplease share!",
              ingredients: [],
              equipment: [],
            },
          ],
        },
      ],
      spoonacularSourceUrl:
        "https://spoonacular.com/steak-and-pepper-rounds-with-rose-horseradish-garlic-creme-sauce-661500",
      usedIngredientCount: 0,
      missedIngredientCount: 15,
      missedIngredients: [
        {
          id: 10211215,
          amount: 1,
          unit: "",
          unitLong: "",
          unitShort: "",
          aisle: "Produce",
          name: "garlic bulb",
          original: "1 whole garlic bulb",
          originalName: "whole garlic bulb",
          meta: ["whole"],
          extendedName: "whole garlic bulb",
          image: "https://spoonacular.com/cdn/ingredients_100x100/garlic.jpg",
        },
        {
          id: 10023232,
          amount: 1,
          unit: "pound",
          unitLong: "pound",
          unitShort: "lb",
          aisle: "Meat",
          name: "beef rib steak",
          original: "1 pound Boneless Beef Rib Steak –",
          originalName: "Boneless Beef Rib Steak –",
          meta: ["boneless"],
          extendedName: "boneless beef rib steak",
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/ribeye-raw.jpg",
        },
        {
          id: 6971,
          amount: 1,
          unit: "teaspoon",
          unitLong: "teaspoon",
          unitShort: "tsp",
          aisle: "Condiments",
          name: "worcestershire sauce",
          original: "1 teaspoon Worcestershire sauce",
          originalName: "Worcestershire sauce",
          meta: [],
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/dark-sauce.jpg",
        },
        {
          id: 1032046,
          amount: 0.5,
          unit: "tablespoon",
          unitLong: "tablespoons",
          unitShort: "Tbsp",
          aisle: "Condiments",
          name: "jack daniels mustard",
          original:
            "1/2 tablespoon Jack Daniels Mustard (or other spicy deli or Dijon mustard)<",
          originalName:
            "Jack Daniels Mustard (or other spicy deli or Dijon mustard)",
          meta: ["(or other spicy deli or Dijon mustard)"],
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/dijon-mustard.jpg",
        },
        {
          id: 1032009,
          amount: 0.5,
          unit: "teaspoon",
          unitLong: "teaspoons",
          unitShort: "tsp",
          aisle: "Spices and Seasonings",
          name: "pepper flakes",
          original: "1/2 teaspoon crushed red pepper flakes",
          originalName: "crushed red pepper flakes",
          meta: ["red", "crushed"],
          extendedName: "crushed red pepper flakes",
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/red-pepper-flakes.jpg",
        },
        {
          id: 14100,
          amount: 0.25,
          unit: "cup",
          unitLong: "cups",
          unitShort: "cup",
          aisle: "Alcoholic Beverages",
          name: "rose syrah wine",
          original: "1/4 cup Rose Syrah Wine",
          originalName: "Rose Syrah Wine",
          meta: [],
          image: "https://spoonacular.com/cdn/ingredients_100x100/red-wine.jpg",
        },
        {
          id: 11916,
          amount: 3,
          unit: "",
          unitLong: "",
          unitShort: "",
          aisle: "Canned and Jarred",
          name: "roasted pepper sections",
          original:
            "3 roasted red pepper sections (they make great varieties of different peppers in j",
          originalName:
            "roasted red pepper sections (they make great varieties of different peppers in j",
          meta: ["red"],
          extendedName: "red roasted pepper sections",
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/red-pepper.jpg",
        },
        {
          id: 93820,
          amount: 0.5,
          unit: "cup",
          unitLong: "cups",
          unitShort: "cup",
          aisle: "Cheese",
          name: "marscapone cheese",
          original: "1/2 cup Marscapone cheese",
          originalName: "Marscapone cheese",
          meta: [],
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/white-cream-fluffy.jpg",
        },
        {
          id: 1002055,
          amount: 2,
          unit: "teaspoons",
          unitLong: "teaspoons",
          unitShort: "tsp",
          aisle: "Produce",
          name: "horseradish",
          original: "2 teaspoons horseradish",
          originalName: "horseradish",
          meta: [],
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/horseradish.jpg",
        },
        {
          id: 10311215,
          amount: 4,
          unit: "cloves",
          unitLong: "cloves",
          unitShort: "cloves",
          aisle: "Produce",
          name: "roasted garlic",
          original: "4 cloves of roasted garlic",
          originalName: "roasted garlic",
          meta: [],
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/garlic-roasted.jpg",
        },
        {
          id: 2003,
          amount: 0.5,
          unit: "tablespoon",
          unitLong: "tablespoons",
          unitShort: "Tbsp",
          aisle: "Spices and Seasonings",
          name: "basil",
          original: "1/2 tablespoon tsp. dried basil or 1 fresh",
          originalName: "tsp. dried basil or 1 fresh",
          meta: ["dried", "fresh"],
          extendedName: "fresh dried basil",
          image: "https://spoonacular.com/cdn/ingredients_100x100/basil.jpg",
        },
        {
          id: 2027,
          amount: 0.5,
          unit: "teaspoon",
          unitLong: "teaspoons",
          unitShort: "tsp",
          aisle: "Produce",
          name: "oregano",
          original:
            "1/2 teaspoon tsp. dried oregano or 1 fresh (fresh oregano is strong so you may want to taste",
          originalName:
            "tsp. dried oregano or 1 fresh (fresh oregano is strong so you may want to taste",
          meta: ["dried", "fresh", "to taste"],
          extendedName: "fresh dried oregano",
          image: "https://spoonacular.com/cdn/ingredients_100x100/oregano.jpg",
        },
        {
          id: 9152,
          amount: 2,
          unit: "teaspoons",
          unitLong: "teaspoons",
          unitShort: "tsp",
          aisle: "Produce",
          name: "lemon juice",
          original: "2 teaspoons fresh lemon juice",
          originalName: "fresh lemon juice",
          meta: ["fresh"],
          extendedName: "fresh lemon juice",
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg",
        },
        {
          id: 18029,
          amount: 1,
          unit: "loaf",
          unitLong: "loaf",
          unitShort: "loaf",
          aisle: "Bakery/Bread",
          name: "bread",
          original: "1 loaf of store bought French bread",
          originalName: "store bought French bread",
          meta: ["french", "store bought"],
          extendedName: "french bread",
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/crusty-bread.jpg",
        },
        {
          id: 11294,
          amount: 1,
          unit: "small",
          unitLong: "small",
          unitShort: "small",
          aisle: "Produce",
          name: "or)",
          original:
            "1 small or ½ of a large sweet onion (Vidalia if you can get it)",
          originalName:
            "or ½ of a large sweet onion (Vidalia if you can get it)",
          meta: ["sweet", "canned"],
          extendedName: "canned sweet or)",
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/sweet-onion.png",
        },
      ],
      likes: 0,
      usedIngredients: [],
      unusedIngredients: [],
    },
  ]);

  // Return scroll to top when switching between recipes and shopping list
  const appElement = useRef(null);
  useEffect(() => {
    appElement.current.scroll(0, 0);
  }, [contentDisplayed]);

  console.log("render App");

  return (
    <div className="app" ref={appElement}>
      <Navbar
        recipeData={recipeData}
        contentDisplayed={contentDisplayed}
        setContentDisplayed={setContentDisplayed}
      />
      <main>
        {contentDisplayed === "home" && (
          <Intro setContentDisplayed={setContentDisplayed} />
        )}
        {contentDisplayed === "list" && (
          <ShoppingList
            ingredientDisplayStatus={ingredientDisplayStatus}
            setIngredientDisplayStatus={setIngredientDisplayStatus}
            recipeData={recipeData}
            setRecipeData={setRecipeData}
          />
        )}
        {contentDisplayed === "recipes" && (
          <Recipes
            recipeData={recipeData}
            setRecipeData={setRecipeData}
            showFullRecipe={showFullRecipe}
            setShowFullRecipe={setShowFullRecipe}
            favourites={favourites}
            setFavourites={setFavourites}
            setContentDisplayed={setContentDisplayed}
          />
        )}
        {contentDisplayed === "favourites" && (
          <Favourites
            favourites={favourites}
            setFavourites={setFavourites}
            recipeData={recipeData}
            setRecipeData={setRecipeData}
            setShowFullRecipe={setShowFullRecipe}
          />
        )}
        {showFullRecipe.id && (
          <RecipeModal
            fullRecipe={showFullRecipe}
            setShowFullRecipe={setShowFullRecipe}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
