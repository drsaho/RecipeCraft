import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../styles/App.css';

function Navbar() {
    const { user, logout } = useContext(AuthContext); 

    return (
        <nav className="navbar">
            <h1>RecipeCraft</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recipes">Recipe Roulette</Link></li>
                <li><Link to="/add-recipe">Craft A Recipe</Link></li>
                <li><Link to="/search">Search Recipes</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                {user ? (
                    <li><button onClick={logout} className="logout-button">Logout</button></li>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
