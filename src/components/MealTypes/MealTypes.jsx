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
    setRecipeType(e.target.id);
  }

  return (
    <>
      {Object.keys(mealTypesAndImages).map((type) => {
        return (
          <div
            className={
              recipeType === type ? "meal-type selected-type" : "meal-type"
            }
            key={type}
          >
            <img
              className="meal-type-image prevent-select"
              id={type}
              src={mealTypesAndImages[type]}
              alt={`meal select ${type} option`}
              onClick={selectMealType}
            />
            <p className="prevent-select">{type}</p>
          </div>
        );
      })}
    </>
  );
}
