import Header from "../../components/Header";
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
    </div>
  );
};

export default Home;