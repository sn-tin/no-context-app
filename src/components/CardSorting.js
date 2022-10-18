import React, { useState, useEffect } from "react";
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Masonry from 'react-masonry-css';
import data from "../data";
import Cards from "./Cards";

const CardSorting = ({filteredSearch}) => {

    /* When all and favorite button is clicked */
    const [isAllActive, setAllIsActive] = useState(true);
    const [isFaveActive, setFaveIsActive] = useState(false);

    const handleAllButton = () => {
        setAllIsActive(true)
        setFaveIsActive(false)
        console.log("All button is active")
    }

    const handleFaveButton = () => {
        setFaveIsActive(true)
        setAllIsActive(false)
        console.log("Favorite button is active")
    }

    /* Breakpoints for Masonry Layout */
    const breakpoints = {
        default: 4,
        1100: 2,
        900: 2,
        500: 1
    }

    return (
        <section className="cards">
            <div className="buttons-paginatiom">
                <div className="button-group">
                    <button 
                        id="all-btn" 
                        className={isAllActive ? "active-btn" : null} 
                        name="all" 
                        onClick={handleAllButton}
                    >
                        <GridViewIcon fontSize="small" spacing="10px" />
                    </button>
                    <button 
                        id="fave-btn" 
                        className={isFaveActive ? "active-btn" : null} 
                        name="favorite"
                        onClick={handleFaveButton}
                    >
                        <FavoriteTwoToneIcon fontSize="small" />
                    </button>
                </div>
                <div className="pagination">
                </div>
            </div>
            <div className="card-masonry">
                <Masonry breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {
                    isAllActive && filteredSearch.map(item => (
                        <Cards key={item.id} id={item.id} text={item.origText} isFavorite={item.isFavorite} />
                    ))}
                    {
                    isFaveActive && 
                    filteredSearch.filter(item => item.isFavorite === true).map(filtered => (
                    <Cards key={filtered.id} id={filtered.id} text={filtered.origText} data={filtered} />)) 
                    }           
                </Masonry>
            </div>
        </section>
    )
}

export default CardSorting