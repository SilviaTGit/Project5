import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <h1>Voici la page accueil</h1>
        <h2>C'est vous, partout et ailleurs</h2>
        <NavLink to="/Apartments">
            <a href="#">Appartements</a>
            </NavLink>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;