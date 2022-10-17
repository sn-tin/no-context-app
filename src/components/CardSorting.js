import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Masonry from 'react-masonry-css';
import data from "../data";
import Cards from "./Cards";

const CardSorting = ({filteredSearch, handlePageClick, pageCount}) => {
    const [content, setContent] = useState(data)

    /* When all and favorite button is clicked */
    const [isAllActive, setAllIsActive] = useState(false);
    const [isFaveActive, setFaveIsActive] = useState(false);
    /* When heart icon is clicked */
    const [isFavorite, setIsFavorite] = useState(data)

    console.log(isFavorite)

    const handleFaveClick = () => {
        setIsFavorite(
            console.log("Favorite!")
        )
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
                        id="all-btn" className={isAllActive ? "active-btn" : null} name="all"
                    >
                        <GridViewIcon fontSize="small" spacing="10px" />
                    </button>
                    <button id="fave-btn" className={isFaveActive ? "active-btn" : null} name="favorite">
                        <FavoriteTwoToneIcon fontSize="small" />
                    </button>
                </div>
                <div className="pagination">
                {/* <ReactPaginate
                    breakLabel="..."
                    nextLabel={<ArrowForwardIcon fontSize="small" />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={<ArrowBackIcon fontSize="small" />}
                    renderOnZeroPageCount={null}
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num previous"
                    nextLinkClassName="page-num next"
                    activeLinkClassName="active"

                /> */}
                </div>
            </div>
            <div className="card-masonry">
                <Masonry breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {filteredSearch.map(item => (
                        <Cards key={item.id} id={item.id} text={item.origText} isFavorite={isFavorite} handleFaveClick={handleFaveClick} />
                    ))}
                </Masonry>
            </div>
        </section>
    )
}

export default CardSorting