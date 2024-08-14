import axios from 'axios';

// Base URL for the Spoonacular API
const SPOONACULAR_BASE_URL = 'https://api.spoonacular.com';

// Function to search for recipes
export const searchRecipes = async (query) => {
    try {
        const response = await axios.get(`${SPOONACULAR_BASE_URL}/recipes/complexSearch`, {
            params: {
                query: query,
                apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY, 
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error searching recipes:', error);
        throw error; 
    }
};

// Function to fetch recipe details by ID
export const getRecipeDetails = async (id) => {
    try {
        const response = await axios.get(`${SPOONACULAR_BASE_URL}/recipes/${id}/information`, {
            params: {
                apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY, 
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        throw error; 
    }
};

// Function to save a recipe to favorites
export const saveRecipeToFavorites = async (recipe) => {
    try {
        const response = await axios.post('/api/recipes/favorite', recipe, {
            headers: { 'x-auth-token': localStorage.getItem('token') }, 
        });
        return response.data;
    } catch (error) {
        console.error('Error saving recipe to favorites:', error);
        throw error;
    }
};
