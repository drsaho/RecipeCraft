import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('User is not authenticated');
      }

      const res = await axios.post('/api/recipes', formData, {
        headers: {
          'x-auth-token': token,
          'Content-Type': 'application/json',
        },
      });
      console.log('Recipe added:', res.data);
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        placeholder="Ingredients"
        required
      />
      <textarea
        name="instructions"
        value={formData.instructions}
        onChange={handleChange}
        placeholder="Instructions"
        required
      />
      <button type="submit">Craft Recipe</button>
    </form>
  );
};

export default RecipeForm;
