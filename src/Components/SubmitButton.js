import React from "react";

const SubmitButton = ({onSubmit}) => {

    return (
        <button type="submit" onClick={onSubmit} className="btn">
            Sign Up
        </button>
    )
}

export default SubmitButton;