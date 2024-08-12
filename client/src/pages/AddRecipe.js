// Page for adding a new recipe
import React from 'react';
import RecipeForm from '../components/RecipeForm';

function AddRecipe() {
  return (
    <div>
      <h1>Add a New Recipe</h1>
      <RecipeForm onSave={(recipe) => console.log('Recipe saved:', recipe)} />
    </div>
  );
}

export default AddRecipe;
