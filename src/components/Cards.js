import React, { useState } from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';


const Cards = ({data, text, id}) => {
    const [isCopied, setIsCopied] = useState(false)
    const copyToClipboard = (e) => {
        setIsCopied(true)
    }
    const styles = {
        backgroundColor: isCopied ? "#FFFF00" : "#FFFFFF",
        transition: "background-color 0.1s ease-in"
    }

    /* When heart icon is clicked */
    const [favorite, setFavorite] = useState("Favorite!")

    const handleFaveClick = (e) => {
        console.log(favorite)
    }
    
    // const color = isFavorite ? "#FFFF00" : "#FFFFFF"

    return (
        <div className="card">
            <div className="card-top">
                <FormatQuoteIcon />
                <FavoriteTwoToneIcon onClick={handleFaveClick} />
                
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