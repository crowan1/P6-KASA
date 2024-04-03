import Footer from '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/components/Footer.js';
import Nav from '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/components/Banner.js'
import Eror from '../Acceuil/components/Eror404';

function Page404 () {
    return(
        <div>
        {Nav}
        <Eror/>
        {Footer}
        </div>
    )
}

export default Page404