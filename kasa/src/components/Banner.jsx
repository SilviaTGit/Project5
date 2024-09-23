//import "../assets/styles/components/_banner.scss";
import PropTypes from "prop-types";

const Banner = ({ imageSrc, altText, bannerText, overlayClass }) => {
  return (
    <div className="banner">
      <img src={imageSrc} alt={altText} className="banner__image" />
      <div className={`banner__overlay ${overlayClass}`}></div>
      {bannerText && <h1 className="banner__text">{bannerText}</h1>}
    </div>
  );
};

Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  bannerText: PropTypes.string,
  overlayClass: PropTypes.string,
};

export default Banner;