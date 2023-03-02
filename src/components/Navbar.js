import React from "react";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const Navbar = ({formDisplay}) => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <button className="add-btn" onClick={formDisplay}><AddIcon /> Add</button>
            </div>
        </nav>
    )
}

export default Navbar