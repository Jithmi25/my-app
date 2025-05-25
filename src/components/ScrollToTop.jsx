import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top-container">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-button"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="scroll-to-top-icon" />
          <span className="scroll-to-top-tooltip">Back to Top</span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;