import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header/>
      <div>
        <h1>Voici la page accueil</h1>
        <h2>C'est vous, partout et ailleurs</h2>
        <NavLink to="/Apartments">
            Appartements
            </NavLink>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;