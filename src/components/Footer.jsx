import '../assets/Footer.scss'
import logo from '../assets/img/Group-2.png'

function Footer() {

    return (
        <footer>
            <div className='div-footer'>
                <h3>K<img src={logo} alt='logo kasa' />sa</h3>
                <br />
                <p>© 2020 Kasa. All rights reserved </p>
            </div>
        </footer>
    )
}


export default Footer()

