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
            <h1>Title here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <span className="highlight">consectetur</span> sed do eiusmod tempor incididunt</p>
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