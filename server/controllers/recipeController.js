const FavoriteRecipe = require('../models/FavoriteRecipe');
const Recipe = require('../models/Recipe');

exports.getRandomRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().limit(10);
        res.json(recipes);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.saveFavorite = async (req, res) => {
    try {
        const { recipeId, title, image } = req.body;
        const newFavorite = new FavoriteRecipe({
            recipeId,
            title,
            image,
            user: req.user.id,
        });
        const savedFavorite = await newFavorite.save();
        res.json(savedFavorite);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getFavorites = async (req, res) => {
    try {
        const favorites = await FavoriteRecipe.find({ user: req.user.id });
        res.json(favorites);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.deleteFavoriteRecipe = async (req, res) => {
    try {
        await FavoriteRecipe.findOneAndDelete({ recipeId: req.params.id, user: req.user.id });
        res.json({ msg: 'Favorite recipe deleted' });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.addRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions } = req.body;
        const newRecipe = new Recipe({
            title,
            ingredients,
            instructions,
            user: req.user.id,
        });
        const savedRecipe = await newRecipe.save();
        res.json(savedRecipe);
    } catch (err) {
        res.status(500).send('Server error');
    }
};
