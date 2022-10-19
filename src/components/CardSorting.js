import React, { useState, useEffect } from "react";
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Masonry from 'react-masonry-css';
import Cards from "./Cards";

const CardSorting = ({data, filteredSearch}) => {

    /* When all and favorite button is clicked */
    const [isAllActive, setAllIsActive] = useState(true);
    const [isFaveActive, setFaveIsActive] = useState(false);

    const handleAllButton = () => {
        setAllIsActive(true)
        setFaveIsActive(false)
    }

    const handleFaveButton = () => {
        setFaveIsActive(true)
        setAllIsActive(false)
    }

        /* When favorite (heart icon) is clicked */
        const [dataSource, setDataSource] = useState(data);

        const onFavorite = (cardId) => {
            const newDataSource = [...dataSource];
            const foundCardData = newDataSource.find(card => card.id === cardId);
            if(!foundCardData) {
                return;
            }
            foundCardData.isFavorite = !foundCardData.isFavorite;
            setDataSource(newDataSource)
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
                        <FavoriteOutlinedIcon fontSize="small" />
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
                        <Cards key={item.id} cardId={item.id} text={item.origText} isFavorite={item.isFavorite} onFavorite={() => onFavorite(item.id)} />
                    ))}
                    {
                    isFaveActive && 
                    filteredSearch.filter(item => item.isFavorite === true).map(filtered => (
                    <Cards key={filtered.id} cardId={filtered.id} text={filtered.origText} isFavorite={filtered.isFavorite} onFavorite={() => onFavorite(filtered.id)} />)) 
                    }           
                </Masonry>
            </div>
        </section>
    )
}

export default CardSorting