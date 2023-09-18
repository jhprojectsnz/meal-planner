import './nav.css';
import { BiMenu } from 'react-icons/bi';
import { GiHotMeal } from 'react-icons/gi';

export default function Nav({recipeData, contentDisplayed, setContentDisplayed}){

    return (
        <nav className="nav">
            <div className='main-nav'>
                <div className='title-container'>
                    <h1 className='title'>Quick Meal Planner</h1>
                    <GiHotMeal className='title-icon'/>
                </div>
                <BiMenu className='menu-btn'/>
            </div>
            <div className="content-nav">
                <button 
                className={contentDisplayed === 'display recipes' ? "content-nav-btn selected" : "content-nav-btn"}
                onClick={() => contentDisplayed === 'display list' && setContentDisplayed('display recipes')}>
                Recipes
                </button>
                <button 
                className={contentDisplayed === 'display list' ? "content-nav-btn selected" : "content-nav-btn"}
                onClick={() => (recipeData.length > 0 && contentDisplayed === 'display recipes') &&  setContentDisplayed('display list')}>
                Shopping list
                </button>
            </div>
        </nav>
    )
}

