import React from "react";
import '../../assets/Host.scss'


function Host({ name, picture }) {
    return (
        <div className="Host-container">
            <div className="name-logement">
                <h4> {name}</h4>
            </div>

            <div>
                <img src={picture} alt="image du propriétaire" />
            </div>
        </div>
    )
}

export default Host

