import React from 'react';

const Profile = () => {
  const profileImage = 'https://via.placeholder.com/400x400.png?text=Your+Photo';
  
  return (
    <section id="profile" className="section">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <div className="profile-image-container">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="profile-image"
            />
          </div>
        </div>
        
        <div className="md:w-1/2 md:pl-12 slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-accent-blue">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-text-secondary">
            Your Profession
          </h2>
          <p className="text-lg mb-8 text-text-secondary">
            A passionate professional with expertise in your field. Dedicated to creating 
            innovative solutions and delivering exceptional results.
          </p>
          <div className="flex flex-wrap">
            <a 
              href="/path-to-your-cv.pdf" 
              download 
              className="btn btn-filled pulse"
            >
              Download CV
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline pulse"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;