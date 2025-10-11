import React, { useState, useEffect } from 'react';
import './Slider.scss';

import slide1 from "../../../assets/home/slider/slide1.png";
import slide2 from "../../../assets/home/slider/slide2.png";
import mobileslide1 from "../../../assets/mobileslider/mobileslide1.png";
import mobileslide2 from "../../../assets/mobileslider/mobileslide2.png";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      imageDesktop: slide1,
      imageMobile: mobileslide1,
      text: '492 Loading arms for rail cars were supplied to HCPL BAHADURGAH Terminal in 2007'
    },
    {
      id: 2,
      imageDesktop: slide2,
      imageMobile: mobileslide2,
      text: '357 Loading arms for Rail cars were supplied to HCPL MAHUL Terminal in 2009 '
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides */}
        <div className="slides-container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active fade-in' : 'fade-out'}`}
            >
              {/* Desktop image */}
              <img
                src={slide.imageDesktop}
                alt={`Slide ${slide.id}`}
                className="slide-img desktop"
              />
              {/* Mobile image */}
              <img
                src={slide.imageMobile}
                alt={`Slide ${slide.id}`}
                className="slide-img mobile"
              />

              {/* Blue overlay + dark layer */}
              <div className="slide-overlay"></div>
              <div className="blue-shade"></div>

              <div className="slide-content">
                <h2 className="slide-text">{slide.text}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {/* <button className="slider-arrow slider-arrow--prev" onClick={prevSlide}>
          <span>‹</span>
        </button>
        <button className="slider-arrow slider-arrow--next" onClick={nextSlide}>
          <span>›</span>
        </button> */}

        {/* Dots */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
