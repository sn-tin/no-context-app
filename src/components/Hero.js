import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const Hero = () => {
    return (
        <section className="hero">
            <h1>no context</h1>
            <p>a collection of no context <span className="highlight">unhinged</span> FIlipino texts.</p>
            <form>
                <input type="text" placeholder="Search for text here..." name="search" autoComplete="off" />
                <button><SearchIcon /></button>
            </form>
        </section>
    )
}

export default Hero;