import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Timeline = () => {
  const experiences = [
    {
      year: '2026 - Present',
      role: 'Freelance Full-Stack Developer',
      company: 'Self-Employed',
      description: 'Designing and engineering premium web platforms for local clients and start-ups. Specializing in highly interactive React applications, headless e-commerce architectures, and backend RESTful microservices.',
      tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL']
    },
    {
      year: '2024 - 2025',
      role: 'Software Engineer Intern',
      company: 'TechCorp Labs',
      description: 'Worked with a cross-functional engineering team to maintain back-end services. Built database schema upgrades, improved API search latency by 30% using Redis caches, and wrote comprehensive unit integration tests.',
      tags: ['Express', 'Redis', 'Jest', 'MongoDB']
    },
    {
      year: '2023 - 2024',
      role: 'Junior Web Developer',
      company: 'Digital Craft Agency',
      description: 'Developed responsive, accessible, pixel-perfect user interfaces based on Figma specifications. Optimized asset delivery configurations to increase Lighthouse performance scores.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Figma']
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <h2 className="section-title">Career <span>Journey</span></h2>
      
      <div className="timeline-container">
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className="timeline-item animate-float"
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            {/* Timeline Node Connector */}
            <div className="timeline-node glass">
              <Briefcase size={16} />
            </div>

            {/* Timeline Card */}
            <div className="timeline-card glass">
              <div className="timeline-header">
                <span className="timeline-date">
                  <Calendar size={14} /> {exp.year}
                </span>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
              </div>
              <p className="timeline-desc">{exp.description}</p>
              
              <div className="timeline-tags">
                {exp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="timeline-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
