import React from 'react';
import RecipeCard from '../components/RecipeCard';
import '../styles/Recipes.css'; 

function Recipes({ recipes = [] }) { // Provide a default empty array for recipes
    return (
        <div className="recipe-list">
            {recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))
            ) : (
                <p>No recipes found</p> // Message to display if there are no recipes
            )}
        </div>
    );
}

export default Recipes;
