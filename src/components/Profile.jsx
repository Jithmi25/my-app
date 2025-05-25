import React from 'react';

const Profile = () => {
  const profileImage = 'https://via.placeholder.com/400x400.png?text=Your+Photo';
  
  return (
    <section id="profile" className="section">
      <div className="container">
        <div className="profile-container">
          <div className="profile-image-wrapper">
            <div className="profile-image-container">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </div>
          
          <div className="profile-content">
            <h1 className="profile-title">
              Hi, I'm <span>Jithmi Wickramasinghe</span>
            </h1>
            <h2 className="profile-subtitle">
              Backend Developer
            </h2>
            <p className="profile-description">
              I am a passionate tech learner, currently exploring backend development and software systems. I enjoy engaging in tech events, public speaking, and working with others to build practical solutions. I'm always curious and eager to expand my knowledge and skills.
            </p>
            <div className="profile-buttons">
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
      </div>
    </section>
  );
};

export default Profile;