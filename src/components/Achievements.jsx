import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import your achievement images
import achievement1 from '../assets/images/achievements/achievements1.jpeg';
import achievement2 from '../assets/images/achievements/achievements2.jpeg';
import achievement3 from '../assets/images/achievements/achievements3.jpeg';

const achievements = [
  {
    id: 1,
    title: 'AWS Certified Developer',
    description: 'Earned AWS Certified Developer - Associate certification demonstrating cloud application development skills',
    year: '2023',
    image: achievement1
  },
  {
    id: 2,
    title: 'Best Project Award',
    description: 'Received university award for best capstone project in software engineering',
    year: '2022',
    image: achievement2
  },
  {
    id: 3,
    title: 'Hackathon Winner',
    description: 'First place in regional coding competition with innovative healthcare solution',
    year: '2021',
    image: achievement3
  },
];

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === achievements.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? achievements.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="achievements-slider">
          <div className="slider-wrapper">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.id}
                className={`achievement-slide ${index === currentSlide ? 'active' : ''}`}
              >
              
                <div className="achievement-image-container">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="achievement-image"
                  />
                </div>
                <div className="achievement-content">
                  <div className="achievement-header">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <span className="achievement-year">{achievement.year}</span>
                  </div>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="slider-controls">
            <button 
              className="slider-arrow slider-arrow-left"
              onClick={prevSlide}
              aria-label="Previous achievement"
            >
              <FaChevronLeft />
            </button>
            
            <div className="slider-dots">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to achievement ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="slider-arrow slider-arrow-right"
              onClick={nextSlide}
              aria-label="Next achievement"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;