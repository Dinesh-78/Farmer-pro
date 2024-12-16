import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/home.css";
import OurProducts from "./OurProducts";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Animation happens once
    });
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  return (
    <>
    <div className="home-banner-container">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="home-slide" data-aos="fade-up">
          <div className="home-slide-content home-slide-1">
            <h1 className="home-slide-title">Welcome to AGRO MART</h1>
            <p className="home-slide-description">
              Your one-stop solution for fresh farm products
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="home-slide" data-aos="fade-left">
          <div className="home-slide-content home-slide-2">
            <h1 className="home-slide-title">Farm Fresh Products</h1>
            <p className="home-slide-description">
              Delivering organic and high-quality goods to your doorstep
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="home-slide" data-aos="fade-right">
          <div className="home-slide-content home-slide-3">
            <h1 className="home-slide-title">Empowering Farmers</h1>
            <p className="home-slide-description">
              Connecting farmers directly with consumers
            </p>
          </div>
        </div>
      </Slider>
      
    </div>
   {/* our products */}
    <OurProducts />
    </>
  );
};

export default Home;
