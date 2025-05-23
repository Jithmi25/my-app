import React, { useState } from 'react';

const achievements = [
  {
    id: 1,
    title: 'Certification Name',
    description: 'Description of the certification or achievement',
    year: '2023',
    image: 'https://via.placeholder.com/800x600.png?text=Achievement+1'
  },
  {
    id: 2,
    title: 'Award Name',
    description: 'Description of the award or recognition',
    year: '2022',
    image: 'https://via.placeholder.com/800x600.png?text=Achievement+2'
  },
  {
    id: 3,
    title: 'Project Completion',
    description: 'Description of the completed project',
    year: '2021',
    image: 'https://via.placeholder.com/800x600.png?text=Achievement+3'
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
          <div 
            className="slider-container"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-slide">
                <div className="h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="achievement-image"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                    <span className="achievement-year">{achievement.year}</span>
                  </div>
                  <p className="text-text-secondary">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="slider-nav">
            {achievements.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-accent-blue text-dark-blue p-2 rounded-full"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            &lt;
          </button>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-accent-blue text-dark-blue p-2 rounded-full"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;