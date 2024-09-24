import { useParams, Navigate } from "react-router-dom";
import apartmentsads from '../apartmentsads.json';  // Import json files
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import "../assets/styles/pages/_apartments.scss";
import starActive from "../assets/images/star-active.png";
import starInactive from "../assets/images/star-inactive.png";

const Apartments = () => {
  const { id } = useParams();  // Get URL id
  const apartment = apartmentsads.find((apt) => apt.id === id);  // Find apartment by id

  if (!apartment) {
    return <Navigate to="*" />; // Redirect to error page if apartment not found
  }

  // Function to generate stars based on rating
  const renderStars = (rating) => {
    const maxStars = 5;
    const stars = [];
    
    for (let i = 0; i < maxStars; i++) {
      if (i < rating) {
        stars.push(<img key={i} src={starActive} alt="Active Star" className="star-icon" />);
      } else {
        stars.push(<img key={i} src={starInactive} alt="Inactive Star" className="star-icon" />);
      }
    }

    return stars;
  };

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
        <p>{apartment.location}</p>

          <div className="apartments__tags">
            <ul>
              {apartment.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="essential-info2">
        <div className="host-info">
          <h2>{apartment.host.name}</h2>
          <img src={apartment.host.picture} alt={apartment.host.name} className="host-picture" />
        </div>
          <div className="rating">
                  {renderStars(Math.round(apartment.rating))}  {/* Renderizza le stelle */}
          </div>          
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