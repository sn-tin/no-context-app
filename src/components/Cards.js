import React, { useState } from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { CopyToClipboard } from 'react-copy-to-clipboard';


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
                { isFavorite ? <FavoriteOutlinedIcon onClick={onFavorite} /> : <FavoriteBorderOutlinedIcon onClick={onFavorite} /> }
                
            </div>
            <p>{text}</p>
            <CopyToClipboard text={text}>
                <button className="copy-btn" style={styles} onClick={copyToClipboard}>
                {isCopied ? "Copied!" : "Copy"}
                </button>
            </CopyToClipboard>
            
        </div>
    )
}

export default Cards