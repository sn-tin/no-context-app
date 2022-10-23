import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({formDisplay}) => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <button className="request-btn" onClick={formDisplay}>Request</button>
            </div>
        </nav>
    )
}

export default Navbar