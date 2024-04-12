import '../assets/Banner.scss'
import logo from '../assets/img/Group.png'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className='header'>
                <h1 className='title-header'>K<img src={logo} className='logo-kasa' alt='logo kasa' />sa </h1>
                <div className='a-menu'>
                    <NavLink to='/accueil' >
                        Accueil
                    </NavLink>
                    <NavLink to="/about" >
                        A  propos
                    </NavLink>
                </div>
            </div>



        </nav>
    )
}



export default Nav()

