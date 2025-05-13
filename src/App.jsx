import React, { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills'; 
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

import './index.css';
import './styles.css';
import './assets/styles/animations.css';

function App() {
  const [activeSection, setActiveSection] = useState('profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <Profile />;
      case 'skills': // Add this case
        return <Skills />;
      case 'achievements':
        return <Achievements />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;