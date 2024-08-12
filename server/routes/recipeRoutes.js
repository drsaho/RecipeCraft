// Recipe routes
const express = require('express');
const router = express.Router();
const { getRecipes, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all recipes for the user (protected route)
router.get('/', authMiddleware, getRecipes);

// Create a new recipe (protected route)
router.post('/', authMiddleware, createRecipe);

// Update an existing recipe (protected route)
router.put('/:id', authMiddleware, updateRecipe);

// Delete a recipe (protected route)
router.delete('/:id', authMiddleware, deleteRecipe);

module.exports = router;
