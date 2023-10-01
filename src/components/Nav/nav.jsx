import React from "react";
import "./Nav.css";
import { BiHeart } from "react-icons/bi";
import { GiHotMeal, GiKnifeFork } from "react-icons/gi";
import { FaRegListAlt } from "react-icons/fa";

export default function Nav({
  recipeData,
  contentDisplayed,
  setContentDisplayed,
}) {
  function handleClick(e) {
    if (recipeData.length > 0) {
      const buttonClicked = e.target.id;
      setContentDisplayed(
        buttonClicked === "recipesNavButton" ? "recipes" : "list",
      );
    }
  }

  function handleFavouritesClicked() {
    setContentDisplayed("favourites");
  }

  function handleTitleClick() {
    setContentDisplayed("home");
  }

  const buttonClasses = (buttonType) =>
    buttonType === contentDisplayed
      ? "content-nav-btn nav-selected"
      : "content-nav-btn";

  return (
    <nav className="nav">
      <div className="main-nav">
        <div className="title-container" onClick={handleTitleClick}>
          <h1 className="title">Quick Meal Planner</h1>
          <GiHotMeal className="title-icon" />
        </div>
        <div className="nav-btn-container">
          {recipeData.length > 0 && (
            <>
              <button
                className="nav-btn nav-wide"
                onClick={() => setContentDisplayed("recipes")}
              >
                <GiKnifeFork className="nav-btn-icon" />
                Recipes
              </button>
              <button
                className="nav-btn nav-wide"
                onClick={() => setContentDisplayed("list")}
              >
                <FaRegListAlt className="nav-btn-icon" />
                Shopping List
              </button>
            </>
          )}
          <button className="nav-btn" onClick={handleFavouritesClicked}>
            <BiHeart className="nav-btn-icon" />
            Favourites
          </button>
        </div>
      </div>
      {recipeData.length > 0 && (
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
      )}
    </nav>
  );
}
