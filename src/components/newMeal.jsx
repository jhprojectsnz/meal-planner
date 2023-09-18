import './newmeal.css';
import RecipeSource from './recipesource';
import Favourites from './favourites';
import RecipeSuggester from './recipesuggester';
import {useState} from 'react';


export default function NewMeal({setRecipeData, setShowNewMeal, setShowFullRecipe, favourites, setFavourites}) {
 
    const [newRecipeSource, setNewRecipeSource] = useState(false) 

    return (
        <>
            {!newRecipeSource && 
            <RecipeSource
            setNewRecipeSource={setNewRecipeSource} 
            setShowNewMeal={setShowNewMeal}
            />}
            {newRecipeSource === 'suggester' && 
            <RecipeSuggester 
            setRecipeData={setRecipeData}
            setShowNewMeal={setShowNewMeal}
            setShowFullRecipe={setShowFullRecipe}
            />}
            {newRecipeSource === 'favourites' && 
            <Favourites
                favourites={favourites}
                setFavourites={setFavourites}
                setShowFullRecipe={setShowFullRecipe}
                setRecipeData={setRecipeData}
                setShowNewMeal={setShowNewMeal}
                setNewRecipeSource={setNewRecipeSource}
            />}
        </>
)
}
