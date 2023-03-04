import React, { useState } from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { DeleteOutline, ModeEdit, MoreVert } from "@mui/icons-material";
// import data from '../data';

const Cards = ({isFavorite, text, onFavorite, cardId}) => {
    /* When copy button is clicked */
    const [isCopied, setIsCopied] = useState(false)
    const copyToClipboard = (e) => {
        setIsCopied(true)
    }
    const styles = {
        backgroundColor: isCopied ? "#FFFF00" : "#FFFFFF",
        transition: "background-color 0.1s ease-in"
    }
    /* When more or options button is clicked */
    const [isOptionsClicked, setIsOptionsClicked] = useState(false)
    const handleOptions = () => {
        setIsOptionsClicked(!isOptionsClicked)
    }
    /* When edit button is clicked */ 
    const [isEditing, setEditing] = useState(false)
    const handleEdit = (e) => {
        setEditing(true)
        setIsOptionsClicked(false)
        // setCurrentItem(data.map(source => source.id === e.target.id))
    }
    const submitEdit = (e) => {
        e.preventDefault()
        setEditing(false)
    }
    // const deleteData = (item) => {
    //     const newData = data.filter(i => i.id !== item.id);
    // }
    return (
        <div className="card">
            <div className="card-top">
                <FormatQuoteIcon />
                <div className="changes-btn">
                { isFavorite ? <FavoriteOutlinedIcon onClick={onFavorite} /> : <FavoriteBorderOutlinedIcon onClick={onFavorite} /> }
                <MoreVert onClick={handleOptions} />
                </div>
            </div>
            {
                isOptionsClicked && (
                    <div className="more-options-wrapper">
                        <div className="more-options">
                            <p id={cardId} onClick={handleEdit}><ModeEdit /> Edit</p>
                            <p id={cardId}><DeleteOutline /> Delete</p>
                        </div>
                    </div>
                )
            }
            
            {
                isEditing ? 
                    <form onSubmit={submitEdit}>
                        <textarea id={cardId} name="origText" ></textarea>
                        <button>Submit</button>
                    </form>
                : <p>{text}</p>
            }
            <CopyToClipboard text={text}>
                <button className="copy-btn" style={styles} onClick={copyToClipboard}>
                {isCopied ? "Copied!" : "Copy"}
                </button>
            </CopyToClipboard>
        </div>
    )
}

export default Cards