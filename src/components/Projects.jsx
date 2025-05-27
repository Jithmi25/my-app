import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with shopping cart, user authentication, and payment processing.',
      image: '/assets/images/projects/project1.jpeg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://yourecommerceapp.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for organizing tasks with drag-and-drop functionality and team collaboration.',
      image: '/assets/images/projects/project2.jpeg',
      tags: ['React', 'Firebase', 'Material UI'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: 'https://yourtaskapp.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting application with location detection and 5-day forecasts.',
      image: '/assets/images/projects/project3.jpeg',
      tags: ['JavaScript', 'API Integration', 'CSS3'],
      githubUrl: 'https://github.com/yourusername/weather-app',
      liveUrl: 'https://yourweatherapp.com'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Dashboard for tracking social media metrics and engagement across multiple platforms.',
      image: '/assets/images/projects/project4.jpeg',
      tags: ['Python', 'Django', 'PostgreSQL', 'Chart.js'],
      githubUrl: 'https://github.com/yourusername/social-analytics',
      liveUrl: 'https://yoursocialanalytics.com'
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'Search engine for recipes with filtering by dietary restrictions and ingredient matching.',
      image: '/assets/images/projects/project5.jpeg',
      tags: ['Vue.js', 'Express', 'MySQL'],
      githubUrl: 'https://github.com/yourusername/recipe-finder',
      liveUrl: 'https://yourrecipeapp.com'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website showcasing projects and skills.',
      image: '/assets/images/projects/project6.jpeg',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourportfolio.com'
    }
  ];

  return (
    <section id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">
          Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x600.png?text=${project.title.replace(/\s+/g, '+')}`;
                  }}
                />
              </div>
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="project-buttons">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn project-btn-outline"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn project-btn-filled"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;