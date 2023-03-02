import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import data from "../data";

const RequestForm = ({closeForm, setForm}) => {
    const initialState = {
        origText: "",
        isFavorite: false,
    }
    const [input, setInput] = useState(initialState)
    const handleSubmit = (e) => {
        e.preventDefault()
        setInput(initialState)
        setForm(false)
        console.log(input)
    }
    const handleChange = (e) => {
        setInput((prevState) => {
            const {name, value, type, checked} = e.target
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    return (
        <div className="request-form">
            <div className="overlay">
                <div className="form-content">
                    <h1>Hello!</h1>
                    <CloseIcon className="close-btn" onClick={closeForm} />
                    <p>Add your favorite text by filling up this form!</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="text">Script</label>
                        <textarea 
                            id="text" 
                            name="origText"
                            value={input.origText} 
                            onChange={handleChange} 
                            rows="8"
                            required></textarea>
                        <label htmlFor="favorite">Add to favorites?</label>
                        <input 
                            id="favorite" 
                            type="checkbox" 
                            name="isFavorite" 
                            checked={input.isFavorite}
                            onChange={handleChange} 
                            required />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RequestForm;