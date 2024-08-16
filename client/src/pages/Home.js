import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-image">
        <div className='hero-message'>
        <h1>Welcome to RecipeCraft</h1>
        <p>Explore and create amazing recipes. Discover new flavors and share your culinary masterpieces with the world!</p>
        <footer>
        <p className="follow">Presented by: <a href="https://github.com/drsaho"><i className="li-github"></i> Amadou</a>
       <a href="https://github.com/barand14"><i className="li-github"></i> Balalomba</a>
       <a href="https://github.com/EnduringTimes"><i className="li-github"></i> Menes</a></p>
   
       <p className="follow">  &copy; 2024 RecipeCraft. All rights reserved.</p>
        </footer>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
