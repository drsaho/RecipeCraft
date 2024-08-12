// Recipe schema setup
const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  imageUrl: { type: String },
  spoonacularId: { type: Number },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
