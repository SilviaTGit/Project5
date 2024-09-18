import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import apartmentsads from '../../apartmentsads.json'
import homeBannerImage from '../../assets/images/ImageSource1.jpg';

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner
      imageSrc={homeBannerImage}
      altText="Bannière d'accueil"
      bannerText="Chez vous, partout et ailleurs"
      />
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