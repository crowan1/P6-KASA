import React from "react";
import '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/assets/logement.scss'
import Footer from '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/components/Footer.js';
import Nav from '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/components/Banner.js'
import Cardslogements from '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/components/FIcheslogements/Logements-cards.js'

const CardLogement = () =>{

    return(
        <div>
          {Nav}

          <Cardslogements/>
            {Footer}
    
        </div>
    )
}

export default CardLogement