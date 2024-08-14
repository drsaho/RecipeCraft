import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import '../styles/RecipeList.css'; 

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await axios.get('/api/recipes/random', {
                    headers: { 'x-auth-token': localStorage.getItem('token') },
                });
                setRecipes(res.data);
            } catch (error) {
                console.error('Error fetching random recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div className="recipe-list-container">
            <h2>Discover New Recipes</h2>
            <div className="recipe-list">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}

export default RecipeList;
