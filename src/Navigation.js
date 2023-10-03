// Navigation.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Navigation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="navigation">
      <h2>Explore Destinations</h2>
      <Slider {...settings}>
        <div>
          <img src="spain.jpg" alt="Spain" />
          <p>Spain</p>
        </div>
        <div>
          <img src="portugal.jpg" alt="Portugal" />
          <p>Portugal</p>
        </div>
        <div>
          <img src="costa-rica.jpg" alt="Costa Rica" />
          <p>Costa Rica</p>
        </div>
        <div>
          <img src="south-africa.jpg" alt="South Africa" />
          <p>South Africa</p>
        </div>
        <div>
          <img src="israel.jpg" alt="Israel" />
          <p>Israel</p>
        </div>
      </Slider>
    </div>
  );
};

export default Navigation;
