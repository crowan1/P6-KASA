import React from "react";
import '../assets/logement.scss'
import Footer from '../components/Footer.jsx';
import Nav from '../components/Banner.jsx'
import Cardslogements from '../components/FIcheslogements/Logements-cards.jsx'

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