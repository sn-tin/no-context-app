import React from "react";

const Navbar = ({formDisplay}) => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <p>Home</p>
                <p>About</p>
                <button className="request-btn" onClick={formDisplay}>Request</button>
            </div>
        </nav>
    )
}

export default Navbar