import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function Slider({ slides }) {
  const [currentImage, setCurrentImage] = useState(0);
  const length = slides.length;

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage === length - 1 ? 0 : prevImage + 1));
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? length - 1 : prevImage - 1));
  };

  return (
    <section className="logement-slide">
      {length > 1 && (
        <p className="mg-prev" onClick={prevImage}>
          <FontAwesomeIcon icon={faChevronLeft}/>
        </p>
      )}
      {length > 1 && (
        <p className="mg-next" onClick={nextImage}>
          <FontAwesomeIcon icon={faChevronRight}/>
        </p>
      )}

      <div>
        <img
          className="slider"
          src={slides[currentImage]}
          alt={`Slide ${currentImage + 1}`}
        />
        {length > 1 && (
          <span className="slider-num">
            {currentImage + 1} / {length}
          </span>
        )}
      </div>
    </section>
  );
}

export default Slider;
