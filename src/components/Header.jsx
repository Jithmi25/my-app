import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Header = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a192fdd] backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-accent-blue">
          <span className="text-accent-blue">{'<'}</span>
          <span className="text-text-primary">Portfolio</span>
          <span className="text-accent-blue">{'/>'}</span>
        </div>
        
        {/* In the Header component, update the navigation items */}
        <ul className="hidden md:flex space-x-8">
          {['profile', 'skills', 'achievements', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className={`cursor-pointer capitalize transition-colors duration-300 hover:text-accent-blue ${
                  activeSection === item ? 'text-accent-blue' : 'text-text-secondary'
                }`}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Mobile menu button */}
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