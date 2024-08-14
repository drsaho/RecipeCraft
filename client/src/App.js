import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AddRecipe from './pages/AddRecipe';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RecipeDetail from './components/RecipeDetail';
import { searchRecipes } from './utils/api'; 
import './styles/App.css';

function App() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                console.log('Fetching recipes...');
                const data = await searchRecipes('chicken');
                console.log('Fetched data:', data);
                if (data && data.results) {
                    setRecipes(data.results);
                    console.log('Recipes set:', data.results);
                } else {
                    setError('No recipes found');
                    console.log('No recipes found');
                }
            } catch (err) {
                console.error('Error fetching recipes:', err);
                setError('Failed to fetch recipes');
            }
        };

        fetchRecipes();
    }, []);

    return (
        <Router>
            <Navbar />
            {error && <p>{error}</p>}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes recipes={recipes} />} /> {/* Pass recipes as props */}
                <Route path="/add-recipe" element={<AddRecipe />} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
