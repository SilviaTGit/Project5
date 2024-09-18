//import "../assets/styles/components/_banner.scss";
import PropTypes from "prop-types";

const Banner = ({ imageSrc, altText, bannerText }) => {
  return (
    <div className="banner">
      <img src={imageSrc} alt={altText} className="banner-image" />
      {bannerText && <h1 className="banner-text">{bannerText}</h1>}
    </div>
  );
};

Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  bannerText: PropTypes.string,
};

export default Banner;