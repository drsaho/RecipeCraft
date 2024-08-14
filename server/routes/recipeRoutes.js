const express = require('express');
const { getRandomRecipes, saveFavorite, getFavorites, addRecipe } = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/random', authMiddleware, getRandomRecipes);
router.post('/favorite', authMiddleware, saveFavorite);
router.get('/favorites', authMiddleware, getFavorites);


router.post('/', authMiddleware, addRecipe);

module.exports = router;
