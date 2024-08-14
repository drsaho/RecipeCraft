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
import { AuthProvider } from './context/AuthContext';
import './styles/App.css';

function App() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            const cachedRecipes = localStorage.getItem('recipes');
            if (cachedRecipes) {
                setRecipes(JSON.parse(cachedRecipes));
            } else {
                try {
                    const data = await searchRecipes('Random');
                    if (data && data.results) {
                        setRecipes(data.results);
                        localStorage.setItem('recipes', JSON.stringify(data.results));
                    } else {
                        setError('No recipes found');
                    }
                } catch (err) {
                    if (err.response && err.response.status === 402) {
                        setError('API limit reached again...');
                    } else {
                        console.error('Failed to fetch recipes:', err);
                        setError('Failed to fetch recipes');
                    }
                }
            }
        };

        fetchRecipes();
    }, []);

    return (
        <Router>
            <AuthProvider>
                <Navbar />
                {error && (
                    <div className="error-message">
                        <strong>Error:</strong> {error}
                    </div>
                )}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipes" element={<Recipes recipes={recipes} />} />
                    <Route path="/add-recipe" element={<AddRecipe />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/recipe/:id" element={<RecipeDetail />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
