import React from "react";
import CloseIcon from '@mui/icons-material/Close';

const RequestForm = ({closeForm}) => {
    return (
        <div className="request-form">
            <h1>Hello!</h1>
            <CloseIcon className="close-btn" onClick={closeForm} />
            <p>Request your favorite script to be added on the webpage by submitting a form!</p>
            <form>
                <label htmlFor="username">Name</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="comment">Comment</label>
                <textarea id="comment" rows="5"></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default RequestForm;