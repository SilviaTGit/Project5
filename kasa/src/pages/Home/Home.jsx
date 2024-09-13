import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import '../../assets/styles/pages/_home.scss';
import apartmentsads from '../../../public/apartmentsads.json'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <div className="cards-container">
        {apartmentsads.map((apartment) => (
          <Card 
            key={apartment.id} 
            title={apartment.title} 
            cover={apartment.cover} 
            id={apartment.id} 
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;