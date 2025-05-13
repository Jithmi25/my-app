import React from 'react';

const achievements = [
  {
    id: 1,
    title: 'Certification Name',
    description: 'Description of the certification or achievement',
    year: '2023'
  },
  {
    id: 2,
    title: 'Award Name',
    description: 'Description of the award or recognition',
    year: '2022'
  },
  {
    id: 3,
    title: 'Project Completion',
    description: 'Description of the completed project',
    year: '2021'
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Achievements</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-medium-blue rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
              <div className="h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                {/* Placeholder for image */}
                <span className="text-gray-500">Image placeholder</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{achievement.title}</h3>
                  <span className="text-accent-blue">{achievement.year}</span>
                </div>
                <p className="text-text-secondary">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;