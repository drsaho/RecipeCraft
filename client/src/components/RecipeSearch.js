// Component for searching recipes using Spoonacular API
import React, { useState } from 'react';
import axios from 'axios';

function RecipeSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await axios.get('/api/spoonacular/search', {
      params: { query },
    });
    setResults(res.data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeSearch;
