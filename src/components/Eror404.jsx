import React from "react";
import '../assets/404.scss'
import { NavLink } from 'react-router-dom'

function Eror() {
    return (
        <div className="container">
            <h4 className="title-404">
                404
            </h4>
            <p className="p-container">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <NavLink to="/accueil" className="lien-acceuil">
                Retourner sur la page d'accueil
            </NavLink>
        </div>
    )
}
export default Eror

