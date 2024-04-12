import Footer from '../components/Footer.jsx';
import Nav from '../components/Banner.jsx'
import Eror from '../components/Eror404';

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