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
            <h1>no context</h1>
            <p>a collection of unhinged <span className="highlight">Gen Z</span> memes in a form of text.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Search for text here..." 
                name="search" 
                autoComplete="off" 
                value={searchText}
                onChange={handleChange} />
                <button><SearchIcon /></button>
            </form>
            <CardSorting data={data} searchText={searchText} />
        </section>
    )
}

export default Home;