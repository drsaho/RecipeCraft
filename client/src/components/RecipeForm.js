// Form for adding or updating recipes
import React, { useState } from 'react';
import axios from 'axios';

function RecipeForm({ onSave }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = { title, ingredients, instructions, imageUrl };

    const res = await axios.post('/api/recipes', newRecipe, {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });

    onSave(res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">Save Recipe</button>
    </form>
  );
}

export default RecipeForm;
