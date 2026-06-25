import React from 'react';
import { Layout, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout size={24} className="skill-cat-icon" />,
      skills: [
        { name: 'React / Next.js', level: 60 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Responsive UI Design', level: 90 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      title: 'Backend & Databases',
      icon: <Database size={24} className="skill-cat-icon" />,
      skills: [
        { name: 'Node.js & Express', level: 20 },
        { name: 'Python (Django/FastAPI)', level: 50 },
        { name: 'REST APIs & GraphQL', level: 30 },
        { name: 'PostgreSQL / MySQL', level: 80 },
        { name: 'MongoDB / Redis', level: 10 }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench size={24} className="skill-cat-icon" />,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker Containers', level: 70 },
        { name: 'CI/CD Pipelines', level: 20 },
        { name: 'Vercel / Netlify / AWS', level: 30 },
        { name: 'Linux & Bash scripting', level: 20 }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">My <span>Skills</span></h2>
      
      <div className="grid-3">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-card glass animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
            <div className="skill-card-header">
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            
            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
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
