import React from 'react';
import {
  FaReact, FaNodeJs, FaJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
  FaDocker, FaAws
} from 'react-icons/fa';
import {
  SiTypescript, SiRedux, SiGraphql, SiMongodb, SiPostgresql, SiMysql,
  SiFirebase, SiExpress, SiDjango, SiFlask, SiSpring, SiNextdotjs,
  SiTailwindcss, SiSass, SiBootstrap, SiJest, SiCypress, SiJenkins,
  SiKubernetes, SiTerraform, SiRedis, SiNginx
} from 'react-icons/si';

const Skills = () => {
  // Group skills by category
  const skills = {
    'Frontend': [
      { name: 'React', icon: <FaReact />, color: 'text-[#61DAFB]' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-[#000000]' },
      { name: 'JavaScript', icon: <FaJs />, color: 'text-[#F7DF1E]' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'text-[#3178C6]' },
      { name: 'Redux', icon: <SiRedux />, color: 'text-[#764ABC]' },
      { name: 'HTML5', icon: <FaHtml5 />, color: 'text-[#E34F26]' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-[#1572B6]' },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
      { name: 'Sass', icon: <SiSass />, color: 'text-[#CC6699]' },
      { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-[#7952B3]' },
    ],
    'Backend': [
      { name: 'Node.js', icon: <FaNodeJs />, color: 'text-[#339933]' },
      { name: 'Express', icon: <SiExpress />, color: 'text-[#000000]' },
      { name: 'Python', icon: <FaPython />, color: 'text-[#3776AB]' },
      { name: 'Django', icon: <SiDjango />, color: 'text-[#092E20]' },
      { name: 'Flask', icon: <SiFlask />, color: 'text-[#000000]' },
      { name: 'Java', icon: <FaJava />, color: 'text-[#007396]' },
      { name: 'Spring', icon: <SiSpring />, color: 'text-[#6DB33F]' },
      { name: 'GraphQL', icon: <SiGraphql />, color: 'text-[#E10098]' },
    ],
    'Databases': [
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-[#47A248]' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-[#4169E1]' },
      { name: 'MySQL', icon: <SiMysql />, color: 'text-[#4479A1]' },
      { name: 'Firebase', icon: <SiFirebase />, color: 'text-[#FFCA28]' },
      { name: 'Redis', icon: <SiRedis />, color: 'text-[#DC382D]' },
    ],
    'DevOps & Tools': [
      { name: 'Git', icon: <FaGitAlt />, color: 'text-[#F05032]' },
      { name: 'GitHub', icon: <FaGithub />, color: 'text-[#181717]' },
      { name: 'Docker', icon: <FaDocker />, color: 'text-[#2496ED]' },
      { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-[#326CE5]' },
      { name: 'AWS', icon: <FaAws />, color: 'text-[#232F3E]' },
      { name: 'Terraform', icon: <SiTerraform />, color: 'text-[#7B42BC]' },
      { name: 'Nginx', icon: <SiNginx />, color: 'text-[#009639]' },
      { name: 'Jenkins', icon: <SiJenkins />, color: 'text-[#D24939]' },
    ],
    'Testing': [
      { name: 'Jest', icon: <SiJest />, color: 'text-[#C21325]' },
      { name: 'Cypress', icon: <SiCypress />, color: 'text-[#17202C]' },
    ]
  };

  return (
    <section id="skills" className="py-20 fade-in bg-medium-blue">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="text-xl text-text-secondary mb-12 max-w-3xl">
          Here are the technologies and tools I work with. I'm always learning and adding new skills to my toolkit.
        </p>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-12 slide-up">
            <h3 className="text-2xl font-bold mb-6 text-accent-blue">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {items.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex flex-col items-center p-4 bg-light-blue rounded-lg transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
                >
                  <div className={`text-4xl mb-2 ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;