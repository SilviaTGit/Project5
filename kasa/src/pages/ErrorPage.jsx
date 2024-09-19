import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {

  return (
    <div>
      <Header/>
      <main>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n&apos;existe pas. </h2>
        <NavLink to="/">
            Retourner sur la page d&apos;accueil
            </NavLink>
      </main>
      <Footer/>
    </div>
  );
}