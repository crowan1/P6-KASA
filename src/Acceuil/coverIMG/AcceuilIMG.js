import React from "react";
import '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/coverIMG/Accueil.scss'
import IMG from '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/assets/img/Montagne.webP'

const CoverImg = () =>{
    return(
        <div className='IMG-cover' style={{backgroundImage: `url(${IMG})`, backgroundSize:  'cover', backgroundPosition: 'center' }}>
        <p className='p-cover-montagne'>
            Chez vous, partout et ailleurs
        </p>
    </div>
    
    )
}

export default CoverImg