import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

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