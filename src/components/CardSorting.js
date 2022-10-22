import React, { useState, useEffect } from "react";
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Masonry from 'react-masonry-css';
import Cards from "./Cards";

const CardSorting = ({data, searchText}) => {

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
    const [dataSource, setDataSource] = useState(JSON.parse(localStorage.getItem('allItems')) || data);

    /* Save to local storage */ 
    useEffect(() => {
        localStorage.setItem("allItems", JSON.stringify(dataSource))
    })

    /* If favorite and unfavorite, change isFavorite to true or false */ 
    const onFavorite = (cardId) => {
        const newDataSource = [...dataSource];
        const foundCardData = newDataSource.find(card => card.id === cardId);
        if(!foundCardData) {
            return;
        }
        foundCardData.isFavorite = true;
        setDataSource(newDataSource);
    }
    /* When user searches on all or favorite category */ 
    // Filter when user input on the searchbar matches the texts on cards
    const filteredSearch = (source) => {
        return (
            source.filter((item) => {
                if(searchText === ""){
                    return item;
                } else if(item.plainText.toLowerCase().includes(searchText.toLowerCase())){
                    return item;
                }
            })
        )
    }
    const searchAll = filteredSearch(dataSource); 
    const searchFavorite = filteredSearch(dataSource);
    const showAllCards = (
            searchAll.map(item => (
                <Cards key={item.id} 
                cardId={item.id} 
                text={item.origText} 
                isFavorite={item.isFavorite} 
                onFavorite={() => onFavorite(item.id) }
                />
            ))
    )
    const showFavorites = (
        searchFavorite.filter(item => item.isFavorite === true).map(filtered => (
            <Cards key={filtered.id} 
            cardId={filtered.id} 
            text={filtered.origText} 
            isFavorite={filtered.isFavorite} 
            onFavorite={() => onFavorite(filtered.id) }
            />
        )) 
    )

    /* Breakpoints for Masonry Layout */
    const breakpoints = {
        default: 4,
        1100: 2,
        900: 2,
        500: 1
    }

    return (
        <section className="cards">
            <div className="category-buttons">
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
            </div>
            <div className="card-masonry">
                <Masonry breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {isAllActive && showAllCards}
                    {isFaveActive && showFavorites}           
                </Masonry>
            </div>
        </section>
    )
}

export default CardSorting;