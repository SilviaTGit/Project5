import { useParams, Navigate } from "react-router-dom";
import apartmentsads from '../apartmentsads.json';  // Import json files
import Header from "../components/Header";
import Footer from "../components/Footer";

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
          <h1>{apartment.title}</h1>
        <img src={apartment.cover} alt={apartment.title} className="apartment-image" />
        <p>{apartment.description}</p>
        <p><strong>Host:</strong> {apartment.host.name}</p>
        <p><strong>Location:</strong> {apartment.location}</p>
        <p><strong>Rating:</strong> {apartment.rating}</p>
        <div>
          <strong>Equipments:</strong>
          <ul>
            {apartment.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Tags:</strong>
          <ul>
            {apartment.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apartments;