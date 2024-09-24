import { useParams, Navigate } from "react-router-dom";
import apartmentsads from '../apartmentsads.json';  // Import json files
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import "../assets/styles/pages/_apartments.scss";

const Apartments = () => {
  const { id } = useParams();  // Get URL id
  const apartment = apartmentsads.find((apt) => apt.id === id);  // Find apartment by id

  if (!apartment) {
    return <Navigate to="*" />; // Redirect to error page if apartment not found
  }

  return (
    <div>
      <Header />
      <main>
        <div className="apartment-details">
        <img src={apartment.cover} alt={apartment.title} className="apartment-image" />
        <section className="apartment-info">
        <div className="apartment-essentials">
        <div className="essential-info1">
        <h1>{apartment.title}</h1>
        <p><strong>Location:</strong> {apartment.location}</p>
          <div className="apartments__tags">
            <strong>Tags:</strong>
            <ul>
              {apartment.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="essential-info2">
          <p><strong>Host:</strong> {apartment.host.name}</p>
          <p><strong>Rating:</strong> {apartment.rating}</p>
        </div>
        </div>
        <div className="collapse__container--apartments">
          
          <div className="description__container">
          <Collapse title="Description">
            <p>{apartment.description}</p>
          </Collapse>
          </div>
          
          <div className="equipments__container">
          <Collapse title="Equipments">
            {apartment.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          </Collapse>
          </div>

        </div>
       
        </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apartments;