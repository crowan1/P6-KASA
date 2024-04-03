import { NavLink } from 'react-router-dom'
import '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/assets/main.scss'
import LogementData from '/Users/charloo/Desktop/workflow/kasa/src/data/logement.json'

function Container() {
    return (
        
      <div className='main-container'>
        <ul className='Gallery-item'>
          {LogementData.map(item => (
            <li key={item.id} className='item-gallery'>
              <NavLink to={`/logement/${item.id}`}>
                <img src={item.cover} alt={item.title} />
                <h2 className='title-item-gallery'>{item.title}</h2>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }



export default Container ()