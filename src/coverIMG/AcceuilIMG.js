import React from "react";
import './Accueil.scss'
import IMG from '../assets/img/Montagne.webP'

const CoverImg = () => {
    return (
        <div className='IMG-cover' style={{ backgroundImage: `url(${IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
            <p className='p-cover-montagne'>
                Chez vous, partout et ailleurs
            </p>
        </div>

    )
}

export default CoverImg

