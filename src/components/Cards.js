import React, { useState } from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


const Cards = ({isFavorite, text, onFavorite, unFavorite}) => {
    /* When copy button is clicked */
    const [isCopied, setIsCopied] = useState(false)
    const copyToClipboard = (e) => {
        setIsCopied(true)
    }
    const styles = {
        backgroundColor: isCopied ? "#FFFF00" : "#FFFFFF",
        transition: "background-color 0.1s ease-in"
    }

    return (
        <div className="card">
            <div className="card-top">
                <FormatQuoteIcon />
                { isFavorite ? <FavoriteOutlinedIcon onClick={unFavorite} /> : <FavoriteBorderOutlinedIcon onClick={onFavorite} /> }
                
            </div>
            {/* <textarea className="card-text" readOnly="readonly" value={text} >
            </textarea> */}
            <p>{text}</p>
            <button className="copy-btn" style={styles} onClick={copyToClipboard}>
                {isCopied ? "Copied!" : "Copy"}
            </button>
        </div>
    )
}

export default Cards