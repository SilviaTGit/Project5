import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import { NavLink } from "react-router-dom";
import "../assets/styles/pages/_error.scss";

export default function ErrorPage() {
    return (
        <div>
            <Header />
            <main>
                <div className="errorPage">
                    <h1 className="errorPage__title">404</h1>
                    <h2>Oups! La page que vous demandez n&apos;existe pas. </h2>
                    <NavLink to="/">Retourner sur la page d&apos;accueil</NavLink>
                </div>
            </main>
            <Footer />
        </div>
    );
}
