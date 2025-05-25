import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="container flex justify-between items-center">
        <div className="text-2xl font-bold text-accent-blue">
          <span>{'<'}</span>
          <span className="text-text-primary">Portfolio</span>
          <span>{'/>'}</span>
        </div>
        
        <div className="nav-content">
          <ul className="nav-menu">
            {['profile', 'skills', 'achievements', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className={`nav-link ${activeSection === item ? 'active' : 'text-text-secondary'}`}
                  onClick={() => setActiveSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="social-icons">
            <a 
              href="https://github.com/Jithmi25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/jithmi-wickramasinghe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        
        <button className="md:hidden text-text-primary focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;