import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RecipeCard.css';
import placeholderImage from '../assets/placeholder.png'; 

function RecipeCard({ recipe }) {
    const handleImageError = (e) => {
        e.target.src = placeholderImage;
    };

    return (
        <Link to={`/recipe/${recipe.id}`} className="recipe-card-link">
            <div className="recipe-card">
                <img
                    src={recipe.image || placeholderImage}
                    alt={recipe.title}
                    className="recipe-image"
                    onError={handleImageError}
                />
                <div className="recipe-content">
                    <h3>{recipe.title}</h3>
                </div>
            </div>
        </Link>
    );
}

export default RecipeCard;
