export default function DeletedItems({ingredientDisplayStatus, setIngredientDisplayStatus, addIngredient}) {
    const deletedItemsElements = [];

    Object.keys(ingredientDisplayStatus).forEach(ingredient => {
        if (ingredientDisplayStatus[ingredient] === 'deleted') {
        deletedItemsElements.push(
            <li className='ingredient' key={`deleted-${ingredient}`} >
                {ingredient}
                <button 
                    id={ingredient} 
                    className='add-btn'
                    onClick={addIngredient}>
                    +
                </button>
            </li>
        )
        }  
    })

    return (
        <>
            {deletedItemsElements}
        </>
    )

} 