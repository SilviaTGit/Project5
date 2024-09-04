
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Kasa</h1>
   <nav>
        <ul>
            <NavLink to="/">
            <li>
            <a href="#">Accueil</a>
            </li></NavLink>
            <NavLink to="/about">
            <li>
            <a href="#">A propos</a>
            </li></NavLink>
        </ul>
   </nav>
    </header>
  );
};

export default Header;