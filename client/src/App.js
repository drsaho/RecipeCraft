import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"
import Recipe from './pages/recipe';
import Profile from './pages/profile';
import Home from './pages/home';
import Favorite from './pages/favorite';
import Header from './components/header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header />

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/favorite" element={<Favorite/>} />
      <Route path="/recipe" element={<Recipe/>} />
      </Routes>

      
      </BrowserRouter>
     </div>
  );
}

export default App;
