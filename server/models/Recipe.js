const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    recipeId: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
