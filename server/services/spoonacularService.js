// Service to interact with Spoonacular API
const axios = require('axios');

exports.searchRecipes = async (query) => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
      params: {
        query,
        apiKey: process.env.SPOONACULAR_API_KEY,
      },
    });

    return response.data.results;
  } catch (err) {
    console.error(err.message);
    throw new Error('Error fetching recipes from Spoonacular API');
  }
};
