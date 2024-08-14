import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; 

function Navbar() {
    return (
        <nav className="navbar">
            <h1>RecipeCraft</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
                <li><Link to="/add-recipe">Add Recipe</Link></li>
                <li><Link to="/search">Search Recipes</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
