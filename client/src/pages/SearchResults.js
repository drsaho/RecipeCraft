import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Search.css';
import placeholderImage from '../assets/placeholder.png'; 

function SearchResults({ results }) {
    return (
        <div className="search-results">
            {results.map((recipe) => (
                <div key={recipe.id} className="search-result-card">
                    <Link to={`/recipe/${recipe.id}`} className="card-link">
                        <img
                            src={recipe.image || placeholderImage} 
                            alt={recipe.title}
                        />
                        <h3>{recipe.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default SearchResults;
