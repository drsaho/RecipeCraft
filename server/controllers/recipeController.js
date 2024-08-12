// Recipe controller
const Recipe = require('../models/Recipe');

// Get all recipes for the logged-in user
exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ userId: req.user.id });
    res.json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Create a new recipe
exports.createRecipe = async (req, res) => {
  const { title, ingredients, instructions, imageUrl, spoonacularId } = req.body;

  try {
    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      imageUrl,
      spoonacularId,
      userId: req.user.id,
    });

    const recipe = await newRecipe.save();
    res.json(recipe);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update a recipe
exports.updateRecipe = async (req, res) => {
  const { title, ingredients, instructions, imageUrl } = req.body;

  try {
    let recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ msg: 'Recipe not found' });
    }

    // Make sure user owns this recipe
    if (recipe.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    recipe = await Recipe.findByIdAndUpdate(req.params.id, { $set: { title, ingredients, instructions, imageUrl } }, { new: true });

    res.json(recipe);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete a recipe
exports.deleteRecipe = async (req, res) => {
  try {
    let recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ msg: 'Recipe not found' });
    }

    // Make sure user owns this recipe
    if (recipe.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await Recipe.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Recipe removed' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
