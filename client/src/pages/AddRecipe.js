import React from 'react';
import RecipeForm from '../components/RecipeForm';
import '../styles/AddRecipe.css';

function AddRecipe() {
  return (
    <div className="add-recipe-container">
      <h1 className="add-recipe-title">Add a New Recipe</h1>
      <div className="form-container">
        <RecipeForm onSave={(recipe) => console.log('Recipe saved:', recipe)} />
      </div>
    </div>
  );
}

export default AddRecipe;
