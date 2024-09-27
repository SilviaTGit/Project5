import { useState } from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/_slideshow.scss"; // SCSS for slideshow

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0); // Current image index

    if (images.length === 0) return null; // If no images, return null

    // Function to handle next image
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // Function to handle previous image
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="slideshow">
            {/* Show arrows only if there is more than one image */}
            {images.length > 1 && (
                <>
                    <button className="left-arrow" onClick={prevSlide}>
                        &#10094;
                    </button>
                    <button className="right-arrow" onClick={nextSlide}>
                        &#10095;
                    </button>
                </>
            )}

            {/* Display current image */}
            <div className="image-container">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>

            {/* Show image counter if more than one image */}
            {images.length > 1 && (
                <div className="slide-counter">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
};
Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
