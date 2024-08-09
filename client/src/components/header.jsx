import { Link } from "react-router-dom"


function Header(){


    return(
        <div>
            <h2>Recipe App</h2>

            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/recipe">Recipes</Link></li>
                <li><Link to="/favorite">Top Recipes</Link></li>
            {/* need to add link to signup/login */}
            </ul>
        </div>
    )
}

export default Header