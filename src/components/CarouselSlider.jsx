import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../css/carousel.css';

const CarouselSlider = React.memo(() => {
  return (
    <div className="carousel-container mt-20">
      <Carousel
        autoPlay={true} 
        interval={2000} 
        showIndicators={false} 
        showThumbs={false} 
        showStatus={false} 
        infiniteLoop={true} 
        className="carousel"
      >
        {/* Ensure your image paths are correct relative to the public directory */}
        
        <div className="h-[100%]">
          <img src="/chinese_spag.jpg" alt="image1" className="carousel-image" loading="lazy" />
        </div>
        <div className="h-[100%]">
          <img src="/chinese_rice.jpg" alt="image2" className="carousel-image" loading="lazy" />
        </div>
        <div className="h-[100%]">
          <img src="/ewa_aganyi.jpeg" alt="image3" className="carousel-image" loading="lazy" />
        </div>
        <div className="h-[100%]">
          <img src="/stir_fry.jpg" alt="image4" className="carousel-image" loading="lazy" />
        </div>
        <div className="h-[100%]">
          <img src="/spaghetti.jpg" alt="image5" className="carousel-image" loading="lazy" />
        </div>
        <div className="h-[100%]">
          <img src="/ofada.jpg" alt="image6" className="carousel-image" loading="lazy" />
        </div>
        <div className="h-[100%]">
          <img src="/spag.jpg" alt="image7" className="carousel-image" loading="lazy" />
        </div>
      </Carousel>
    </div>
  );
});

export default CarouselSlider;
