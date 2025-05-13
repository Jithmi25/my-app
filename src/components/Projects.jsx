import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of the project and technologies used.',
      image: 'https://via.placeholder.com/800x600.png?text=Project+1',
      tags: ['React', 'Node.js', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of the project and technologies used.',
      image: 'https://via.placeholder.com/800x600.png?text=Project+2',
      tags: ['Python', 'Django', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of the project and technologies used.',
      image: 'https://via.placeholder.com/800x600.png?text=Project+3',
      tags: ['JavaScript', 'Express', 'Firebase'],
      githubUrl: '#',
      liveUrl: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 fade-in">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Projects</h2>
        <p className="text-xl text-text-secondary mb-12 max-w-3xl">
          Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-medium-blue rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-light-blue text-accent-blue px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-filled btn-sm"
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