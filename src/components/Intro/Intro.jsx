import React from "react";
import "./Intro.css";
import fridgeImg from "../../assets/fridge-image.jpg";

export default function Intro({ setContentDisplayed }) {
  function handleAddRecipeClick() {
    setContentDisplayed("recipes");
  }
  return (
    <section className="intro">
      <div className="intro-title-container">
        <p className="intro-title-small">Welcome to</p>
        <h2 className="intro-title">- Quick Meal Planner -</h2>
      </div>
      <p className="intro-text">
        Time to go shopping but not sure what to cook?
      </p>
      <img
        src={fridgeImg}
        className="intro-main-image"
        alt="Checking fridge, but not sure what to cook"
      />
      <div className="intro-text-container">
        <p className="intro-text intro-bold">Let us help!</p>

        <p className="intro-text">- Delicious recipe suggestions -</p>
        <p className="intro-text">- Organised shopping list -</p>
      </div>

      <button className="intro-btn" onClick={handleAddRecipeClick}>
        Get started
      </button>
    </section>
  );
}
