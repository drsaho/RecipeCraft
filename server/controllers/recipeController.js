const Recipe = require('../models/Recipe'); 

exports.getRandomRecipes = async (req, res) => {
    
};

exports.saveFavorite = async (req, res) => {
  
};

exports.getFavorites = async (req, res) => {
    
};

// Add the addRecipe function
exports.addRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions } = req.body;
        const newRecipe = new Recipe({
            title,
            ingredients,
            instructions,
            user: req.user.id
        });
        const savedRecipe = await newRecipe.save();
        res.json(savedRecipe);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
