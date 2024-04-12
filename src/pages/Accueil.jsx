import Nav from '../components/Banner'
import '../assets/App.css';
import Container from '../components/Main'
import Footer from '../components/Footer';
import CoverImg from '../coverIMG/AcceuilIMG';

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
