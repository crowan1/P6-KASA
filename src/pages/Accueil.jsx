import Nav from '../Acceuil/components/Banner'
import '../Acceuil/assets/App.css';
import Container from '../Acceuil/components/Main'
import Footer from '../Acceuil/components/Footer';
import CoverImg from '../Acceuil/coverIMG/AcceuilIMG';

const  Home = () => {
  return (
    <div className="Home">
      {Nav}
      <CoverImg/>
      {Container}
      {Footer}
      
    </div>
  );
}

export default Home;
