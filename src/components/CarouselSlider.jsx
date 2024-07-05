import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../css/carousel.css';

const CarouselSlider = React.memo(() => {
  return (
    <div className="carousel-container mt-24 max-lg:mt-20">
      <Carousel
        autoPlay={true} 
        interval={3000} 
        showIndicators={false} 
        showThumbs={false} 
        showStatus={false} 
        infiniteLoop={true} 
        className="carousel"
      >
        
        <div className="h-[100%]">
          <img src="/chinese_spag.jpg" alt="image1" className="carousel-image kenburns-top-left" loading="lazy" />
        </div>
      
        <div className="h-[100%]">
          <img src="/stir_fry.jpg" alt="image4" className="carousel-image kenburns-top-left" loading="lazy" />
        </div>
        <div className="h-[100%]">
          <img src="/juice.jpg" alt="image5" className="carousel-image kenburns-top-left" loading="lazy" />
        </div>
        
        <div className="h-[100%]">
          <img src="/spag.jpg" alt="image7" className="carousel-image kenburns-top-left" loading="lazy" />
        </div>
      </Carousel>
    </div>
  );
});

export default CarouselSlider;
