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
  const skills = {
    'Frontend': [
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
      { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
      { name: 'Sass', icon: <SiSass />, color: '#CC6699' },
      { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
    ],
    'Backend': [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Express', icon: <SiExpress />, color: '#000000' },
      { name: 'Python', icon: <FaPython />, color: '#3776AB' },
      { name: 'Django', icon: <SiDjango />, color: '#092E20' },
      { name: 'Flask', icon: <SiFlask />, color: '#000000' },
      { name: 'Java', icon: <FaJava />, color: '#007396' },
      { name: 'Spring', icon: <SiSpring />, color: '#6DB33F' },
      { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
    ],
    'Databases': [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
      { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
    ],
    'DevOps & Tools': [
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
      { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
      { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
      { name: 'AWS', icon: <FaAws />, color: '#232F3E' },
      { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
      { name: 'Nginx', icon: <SiNginx />, color: '#009639' },
      { name: 'Jenkins', icon: <SiJenkins />, color: '#D24939' },
    ],
    'Testing': [
      { name: 'Jest', icon: <SiJest />, color: '#C21325' },
      { name: 'Cypress', icon: <SiCypress />, color: '#17202C' },
    ]
  };

  return (
    <section id="skills" className="section fade-in">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="skills-intro">
          Here are the technologies and tools I work with
        </p>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-category slide-up">
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-grid">
              {items.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div 
                    className="skill-icon" 
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
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