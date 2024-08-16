const express = require('express');
const { getFavorites, saveFavorite, getRandomRecipes, addRecipe, deleteFavoriteRecipe } = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/favorites', authMiddleware, getFavorites);
router.post('/favorite', authMiddleware, saveFavorite);
router.delete('/favorites/:id', authMiddleware, deleteFavoriteRecipe);
router.get('/random', authMiddleware, getRandomRecipes);
router.post('/', authMiddleware, addRecipe);

module.exports = router;
