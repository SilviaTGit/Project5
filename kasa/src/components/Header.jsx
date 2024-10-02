import { NavLink } from "react-router-dom";
import logoHeader from "../assets/images/logoHeader.png";

function Header() {
    return (
        <header>
            <img src={logoHeader} alt="logo Kasa" className="header__logo" />
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to="/" aria-label="Aller à la page d'accueil">
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" aria-label="Aller à la page à propos">
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
