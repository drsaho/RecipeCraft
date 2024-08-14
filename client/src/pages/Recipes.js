import React, { useEffect, useState } from 'react';
import { getRandomRecipes } from '../utils/api';
import RecipeCard from '../components/RecipeCard';
import '../styles/Recipes.css';

function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    const fetchRecipes = async () => {
        try {
            const data = await getRandomRecipes(18); 
            setRecipes(data.recipes);
        } catch (err) {
            console.error('Failed to fetch recipes:', err);
            setError('Failed to fetch recipes');
        }
    };

    useEffect(() => {
        fetchRecipes(); 
    }, []);

    return (
        <div className="recipes-container">
            <button className="refresh-button" onClick={fetchRecipes}>
                Refresh Recipes
            </button>
            {error && <p>{error}</p>}
            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}

export default Recipes;
