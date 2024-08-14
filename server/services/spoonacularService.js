const axios = require('axios');

const spoonacularAPI = axios.create({
    baseURL: 'https://api.spoonacular.com/',
    params: {
        apiKey: process.env.SPOONACULAR_API_KEY,
    },
});

const searchRecipes = async (query, number = 10, offset = 0) => {
    try {
        const response = await spoonacularAPI.get('recipes/complexSearch', {
            params: {
                query,
                number,
                offset,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};

const getRandomRecipes = async (number = 10) => {
    try {
        const response = await spoonacularAPI.get('recipes/random', {
            params: {
                number,
            },
        });
        return response.data.recipes;
    } catch (error) {
        console.error('Error fetching random recipes:', error);
        throw error;
    }
};

module.exports = {
    searchRecipes,
    getRandomRecipes,
};
