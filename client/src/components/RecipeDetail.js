import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import '../styles/RecipeDetail.css';

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
                    params: { apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY },
                });
                setRecipe(res.data);
            } catch (err) {
                setError('Failed to load recipe. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchRecipe();
        } else {
            setError('Recipe ID is missing');
            setLoading(false);
        }
    }, [id]);

    const saveToFavorites = async () => {
        try {
            await axios.post('/api/recipes/favorite', {
                recipeId: recipe.id,
                title: recipe.title,
                image: recipe.image,
            }, {
                headers: { 'x-auth-token': localStorage.getItem('token') },
            });
            alert('Recipe saved to favorites');
        } catch (err) {
            setError('Failed to save recipe. Please try again later.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="recipe-detail">
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            
            <h3>Ingredients</h3>
            <ul>
                {recipe.extendedIngredients.map((ingredient, index) => (
                    <li key={`${ingredient.id}-${index}`}>{ingredient.original}</li>
                ))}
            </ul>

            <h3>Instructions</h3>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipe.instructions) }} />

            <button onClick={saveToFavorites} className="save-button">Save to Favorites</button>
        </div>
    );
}

export default RecipeDetail;
