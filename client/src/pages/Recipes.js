// Recipes page listing all user's recipes
import React from 'react';
import RecipeList from '../components/RecipeList';

function Recipes() {
  return (
    <div>
      <h1>Your Recipes</h1>
      <RecipeList />
    </div>
  );
}

export default Recipes;
