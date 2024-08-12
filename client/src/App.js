import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import AddRecipe from './pages/AddRecipe';
import Search from './pages/Search';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
