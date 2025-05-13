import React from 'react';

const Profile = () => {
  // Using a placeholder image URL temporarily
  const profileImage = 'https://via.placeholder.com/400x400.png?text=Your+Photo';
  
  return (
    <section id="profile" className="min-h-screen flex items-center justify-center py-20 fade-in">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent-blue shadow-lg float">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-accent-blue opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
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