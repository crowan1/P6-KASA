import React from "react";

function Name({ nom, location }) {
    return (
        <div>
            <h2 className="title-logement">{nom}</h2>
            <p> {location}</p>
        </div>
    )
}

export default Name

