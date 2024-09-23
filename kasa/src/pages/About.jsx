import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import aboutBannerImage from '../assets/images/ImageSource2.jpg';
import Collapse from "../components/Collapse";
import "../assets/styles/pages/_about.scss";
import "../assets/styles/components/_banner.scss";

const About = () => {
  return (
    <div>
        <Header/>
        <Banner
        imageSrc={aboutBannerImage}
        altText="Bannière de la page À propos"
        overlayClass="banner__overlay--about"
        />
        <main>
          <div className="collapse__container">
            <Collapse title="Fiabilité">
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont confirmes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </Collapse>
            <Collapse title="Respect">
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse>
            <Collapse title="Service">
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse>
            <Collapse title="Sécurité">
              <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </Collapse>
          </div>
        </main>
    <Footer/>
    </div>
  );
};

export default About;