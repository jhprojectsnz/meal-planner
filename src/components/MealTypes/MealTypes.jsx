import React from "react";
import "./MealTypes.css";
import beefImg from "../../assets/beef.jpg";
import chickenImg from "../../assets/chicken.jpg";
import fishImg from "../../assets/fish.jpg";
import porkImg from "../../assets/pork.jpg";
import lambImg from "../../assets/lamb.jpg";
import vegetarianImg from "../../assets/vegetarian.jpg";
import veganImg from "../../assets/vegan.jpg";

export default function MealTypes({ recipeType, setRecipeType }) {
  const mealTypesAndImages = {
    beef: beefImg,
    chicken: chickenImg,
    seafood: fishImg,
    pork: porkImg,
    lamb: lambImg,
    vegetarian: vegetarianImg,
    vegan: veganImg,
  };

  function selectMealType(e) {
    setRecipeType(e.currentTarget.id);
  }

  return (
    <div className="meal-types prevent-select">
      {Object.keys(mealTypesAndImages).map((type) => {
        return (
          <div
            id={type}
            className={
              recipeType === type
                ? "meal-type-btn selected-type"
                : "meal-type-btn"
            }
            key={type}
            onClick={selectMealType}
          >
            <img
              className="meal-type-image prevent-select"
              src={mealTypesAndImages[type]}
              alt={`meal select ${type} option`}
            />
            <p className="prevent-select">{type}</p>
          </div>
        );
      })}
    </div>
  );
}
