import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get('/api/recipes', {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        setRecipes(res.data);
      } catch (err) {
        console.error('Error fetching recipes:', err);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container">
      <h2>Your Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
            {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
