import "./RecipeModal.css";

export default function RecipeModal({ fullRecipe, setShowFullRecipe }) {
  const ingredientsList = fullRecipe.extendedIngredients.map(
    (ingredient, index) => {
      const ingredientName = ingredient.originalName;
      const ingredientId = ingredient.id;
      const ingredientAmount = parseFloat(ingredient.amount.toFixed(2));
      const ingredientQuantity =
        `${ingredientAmount} ${ingredient.unit}`.trim();

      return (
        <p
          className="modal-ingredient"
          key={`modal-${ingredientId}-${index}`}
        >{`${ingredientQuantity} ${ingredientName}`}</p>
      );
    }
  );

  // Check to see if method data is available, if so set that array to methodData
  const methodData =
    fullRecipe.analyzedInstructions.length > 0
      ? fullRecipe.analyzedInstructions[0].steps
      : false;
  // If method data is available create an array of elements - the method as numbered steps
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
        <h3 className="modal-heading">{fullRecipe.title}</h3>
        <div className="modal-ingredient-list">
          <h5>Ingredients</h5>
          {ingredientsList}
        </div>
        <div className="recipe-method">
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
