import axios from 'axios';
import React, { useState } from 'react';

function RecipeSearch() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            // Log the API key to ensure it is being read correctly from the environment
            console.log('API Key:', process.env.REACT_APP_SPOONACULAR_API_KEY);

            // Check if the API key is correctly loaded
            if (!process.env.REACT_APP_SPOONACULAR_API_KEY) {
                throw new Error('API key is missing. Please ensure your .env file is correctly configured.');
            }

            const res = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
                params: {
                    query: query,
                    apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
                },
            });

            // Check the response status code for additional debugging
            if (res.status === 401) {
                throw new Error('Unauthorized: Please check if your API key is correct and has not exceeded its limits.');
            }

            setRecipes(res.data.results);
        } catch (err) {
            // Improved error logging for better debugging
            console.error('Error searching recipes:', err.response || err.message || err);
            setError('Failed to fetch recipes. Please check your API key and try again.');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for recipes..."
            />
            <button onClick={handleSearch}>Search</button>
            {error && <div>{error}</div>}
            <div>
                {recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeSearch;
