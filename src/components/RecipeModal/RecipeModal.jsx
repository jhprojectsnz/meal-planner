import "./RecipeModal.css";

export default function RecipeModal({ showFullRecipe, setShowFullRecipe }) {
  const ingredientsList = showFullRecipe.extendedIngredients.map(
    (ingredient) => {
      const ingredientName = ingredient.name;
      const ingredientId = ingredient.id;
      const ingredientAmount = Math.round(ingredient.amount * 100) / 100;
      const ingredientQuantity =
        `${ingredientAmount} ${ingredient.unit}`.trim();

      return (
        <div className="modal-ingredient" key={`modal-${ingredientId}`}>
          <p className="modal-ingredient-text">{`${ingredientQuantity} ${ingredientName}`}</p>
        </div>
      );
    }
  );

  //Check to see if method data is available, if so set that array to methodData
  const methodData =
    showFullRecipe.analyzedInstructions.length > 0
      ? showFullRecipe.analyzedInstructions[0].steps
      : false;
  //If method data is available create an array of elements - the method as numbered steps
  const methodList = methodData ? (
    methodData.map((step, index) => {
      return (
        <div className="method-step" key={`step-${index}`}>
          <p className="method-text">{`${index + 1}.`}</p>
          <p className="method-text">{step.step}</p>
        </div>
      );
    })
  ) : (
    <div className="method-step">
      <p>Method not available</p>
    </div>
  );

  return (
    <div className="recipe-modal-background">
      <div className="recipe-modal">
        <h3 className="recipe-heading">{showFullRecipe.title}</h3>
        <div className="ingredient-list">
          <h5>Ingredients</h5>
          {ingredientsList}
        </div>
        <div className="method">
          <h5>Method</h5>
          {methodList}
        </div>
        <button className="btn" onClick={() => setShowFullRecipe("")}>
          Back
        </button>
      </div>
    </div>
  );
}
