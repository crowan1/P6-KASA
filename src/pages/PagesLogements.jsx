import React from "react";
import '../Acceuil/assets/logement.scss'
import Footer from '../Acceuil/components/Footer.jsx';
import Nav from '../Acceuil/components/Banner.jsx'
import Cardslogements from '../Acceuil/components/FIcheslogements/Logements-cards.jsx'

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