import { NavLink } from "react-router-dom";
import logoHeader from "../assets/images/logoHeader.png";
//import '../assets/styles/components/_header.scss';

function Header() {
  return (
    <header>
      <img src={logoHeader} alt="logo Kasa" className="header__logo"/>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;