import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Masonry from 'react-masonry-css';
import { useStateContext } from "../context/StateContextProvider";

const CardSorting = () => {
    const {dataSource, isAllActive, isFaveActive, handleAllButton, handleFaveButton, showAllCards, showFavorites} = useStateContext()

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