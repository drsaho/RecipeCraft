// Component to show details of a recipe
import React from 'react';

function RecipeDetail({ recipe }) {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.ingredients}</p>
      <p>{recipe.instructions}</p>
      {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} />}
    </div>
  );
}

export default RecipeDetail;
