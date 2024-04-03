import React from "react";
import '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/assets/Host.scss'

function Host ({name, picture}) {
    return (
        <div className="Host-container">
            <div className="name-logement">
                <h4> {name}</h4>
            </div>

            <div>
                <img src={picture}/>
            </div>
        </div>
    )
}

export default Host