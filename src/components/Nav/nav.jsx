import "./nav.css";
import { BiMenu } from "react-icons/bi";
import { GiHotMeal } from "react-icons/gi";

export default function Nav({
  recipeData,
  contentDisplayed,
  setContentDisplayed,
}) {
  function handleClick(e) {
    if (recipeData.length > 0) {
      const buttonClicked = e.target.id;
      setContentDisplayed(
        buttonClicked === "recipesNavButton" ? "recipes" : "list"
      );
    }
  }

  const buttonClasses = (buttonType) =>
    buttonType === contentDisplayed
      ? "content-nav-btn nav-selected"
      : "content-nav-btn";

  return (
    <nav className="nav">
      <div className="main-nav">
        <div className="title-container">
          <h1 className="title">Quick Meal Planner</h1>
          <GiHotMeal className="title-icon" />
        </div>
        <BiMenu className="menu-btn" />
      </div>
      <div className="content-nav">
        <button
          id="recipesNavButton"
          className={buttonClasses("recipes")}
          onClick={handleClick}
        >
          Recipes
        </button>
        <button
          id="listNavButton"
          className={buttonClasses("list")}
          onClick={handleClick}
        >
          Shopping list
        </button>
      </div>
    </nav>
  );
}
