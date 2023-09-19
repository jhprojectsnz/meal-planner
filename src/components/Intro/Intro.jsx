import "./Intro.css";

export default function Intro({ setContentDisplayed }) {
  function handleAddRecipeClick() {
    setContentDisplayed("recipes");
  }
  return (
    <section className="intro">
      <div className="intro-section">
        <h3 className="intro-text">
          Get dinner suggestions and generate an organised shopping list in
          seconds
        </h3>
        <p>
          Click <b>Add Recipe</b> to get started!
        </p>
      </div>
      <button className="btn bold-btn" onClick={handleAddRecipeClick}>
        Add Recipe
      </button>
    </section>
  );
}
