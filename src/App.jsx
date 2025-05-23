import React, { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import './styles.css';

function App() {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="app bg-dark-blue text-text-primary">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <Profile />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;