import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import CardSorting from "./CardSorting";
import { useStateContext } from "../context/StateContextProvider";

const Home = () => {
    const {searchText, handleChange, handleSubmit} = useStateContext();
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
            <CardSorting />
        </section>
    )
}

export default Home;