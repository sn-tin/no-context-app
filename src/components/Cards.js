import React, { useState } from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { DeleteOutline, ModeEdit, MoreVert } from "@mui/icons-material";
import { useStateContext } from "../context/StateContextProvider";

const Cards = ({isFavorite, text, onFavorite, cardId}) => {
    const { dataSource, setDataSource } = useStateContext();
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
    }
    const [currentText, setCurrentText] = useState(text)
    const editCurrentText = (e) => {
        setCurrentText(e.target.value)
    }
    const updateText = () => {
        const newDataSource = [...dataSource];
        const foundData = newDataSource.find((data) => data.id === cardId);
        if (!foundData) return;
        foundData.origText = currentText;
        setDataSource(newDataSource);
    }
    const submitEdit = (e) => {
        e.preventDefault()
        setEditing(false)
        updateText()
    }
    const deleteData = () => {
        const newDataSource = [...dataSource];
        const updatedData = newDataSource.filter((data) => data.id !== cardId);
        setDataSource(updatedData);
    }
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
                            <p id={cardId} onClick={deleteData}><DeleteOutline /> Delete</p>
                        </div>
                    </div>
                )
            }
            
            {
                isEditing ? 
                    <form className="edit-form" onSubmit={submitEdit}>
                        <textarea id={cardId} name="origText" value={currentText} rows={8} onChange={editCurrentText}></textarea>
                    </form>
                : <p>{text}</p>
            }
            {
                isEditing ?
                <div className="edit-buttons">
                    <button onClick={submitEdit}>Edit</button>
                    <button onClick={submitEdit}>Cancel</button>
                </div> : 
                <CopyToClipboard text={text}>
                    <button className="copy-btn" style={styles} onClick={copyToClipboard}>
                    {isCopied ? "Copied!" : "Copy"}
                    </button>
                </CopyToClipboard>
            }
        </div>
    )
}

export default Cards