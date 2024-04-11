import Footer from '../Acceuil/components/Footer.jsx';
import Nav from '../Acceuil/components/Banner.jsx'
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