import React from "react";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { useStateContext } from "../context/StateContextProvider";

const Navbar = () => {
    const {displayRequestForm} = useStateContext()
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <button className="add-btn" onClick={displayRequestForm}><AddIcon /> Add New Text</button>
            </div>
        </nav>
    )
}

export default Navbar