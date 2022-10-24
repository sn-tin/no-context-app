import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import data from "../data";
import CardSorting from "./CardSorting";

const Home = () => {

    const [searchText, setSearchText] = useState("");

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className="hero">
            <h1><span className="highlight">no</span><span className="highlight"> context</span></h1>
            <p>a collection of Gen Z Filipino memes taken out of context or <em>jejemon</em> texts.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Search for text here..." 
                name="search" 
                autoComplete="off" 
                value={searchText}
                onChange={handleChange} />
                <button style={{ color: 'black' }}><SearchIcon /></button>
            </form>
            <CardSorting data={data} searchText={searchText} />
        </section>
    )
}

export default Home;