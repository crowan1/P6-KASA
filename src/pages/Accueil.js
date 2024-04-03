import Nav from '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/components/Banner.js'
import '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/assets/App.css';
import Container from '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/components/Main.js'
import Footer from '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/components/Footer.js';
import CoverImg from '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/coverIMG/AcceuilIMG.js';

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
