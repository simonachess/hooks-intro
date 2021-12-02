import React from "react";

function GreenButton({ buttonCount, plus }) {

    return (
        <button className="button" onClick={plus}>+{buttonCount}</button>
    )
}

export default GreenButton;