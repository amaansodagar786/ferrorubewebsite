import React, { useState, useEffect } from 'react';
import './Slider.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      text: 'Premium Experience Awaits You'
    },
    {
      id: 2,
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      text: 'Innovation Meets Elegance'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  return (
    <div className="slider-container">
      <div 
        className="slider-wrapper"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div 
          className="slider-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ background: slide.background }}
            >
              <div className="slide-content">
                <h2 className="slide-text">{slide.text}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="slider-arrow slider-arrow--prev" onClick={prevSlide}>
          <span>‹</span>
        </button>
        <button className="slider-arrow slider-arrow--next" onClick={nextSlide}>
          <span>›</span>
        </button>

        {/* Dots Indicator */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Slide Counter */}
        {/* <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div> */}
      </div>
    </div>
  );
};

export default Slider;