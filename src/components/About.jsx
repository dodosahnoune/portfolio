import React, { useState } from 'react';
import { User, GraduationCap, Heart, Code } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabsContent = {
    story: {
      title: 'My Story',
      icon: <User size={18} />,
      content: (
        <>
          <p>
            Hello! I'm <strong>Abdelwadoude</strong>, a software developer driven by a passion for creating impactful web applications. My journey into coding began out of curiosity about how digital interfaces work, which quickly evolved into a dedicated career path.
          </p>
          <p>
            I focus on bridging the gap between elegant interface design and robust back-end engineering. Over the years, I have worked with start-ups and individual clients to turn complex problems into simple, user-friendly applications.
          </p>
          <p>
            I love learning new technologies, refining my coding practices, and collaborating on projects that challenge my problem-solving capabilities.
          </p>
        </>
      )
    },
    education: {
      title: 'Education',
      icon: <GraduationCap size={18} />,
      content: (
        <div className="education-list">
          <div className="education-item">
            <span className="education-year">2023 - 2026</span>
            <h4 className="education-degree">Master's in Computer Science</h4>
            <p className="education-school">Higher School of Computer Science of Béjaïa (ESI Béjaïa)</p>
          </div>
          <div className="education-item">
            <span className="education-year">2019 - 2023</span>
            <h4 className="education-degree">Baccalaureate in Mathematics – Average: 17.95/20</h4>
            <p className="education-school">secondary school DAHMAN KHALAF (sétif)</p>
          </div>
        </div>
      )
    },
    values: {
      title: 'Core Values',
      icon: <Heart size={18} />,
      content: (
        <ul className="values-list">
          <li>
            <strong>Quality First:</strong> I believe in writing readable, maintainable, and well-tested code that stands the test of time.
          </li>
          <li>
            <strong>User-Centric Design:</strong> Visual aesthetics and user experience are never afterthoughts; they are key drivers of product success.
          </li>
          <li>
            <strong>Continuous Learning:</strong> The tech landscape shifts constantly. I dedicate time daily to upgrade my skills and tools.
          </li>
          <li>
            <strong>Collaboration:</strong> Great software is built by communicative, empathetic, and aligned teams.
          </li>
        </ul>
      )
    }
  };

  return (
    <section id="about" className="section about-section">
      <h2 className="section-title">About <span>Me</span></h2>
      
      <div className="grid-2">
        {/* Left Panel: Premium Code Editor Mockup */}
        <div className="about-visual animate-float">
          <div className="code-editor glass">
            <div className="editor-header">
              <div className="editor-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-tab">
                <Code size={17} /> abdelwadoude.json
              </div>
            </div>
            <div className="editor-body">
              <pre>
                <code>
<span className="code-key">{"{"}</span>{`
  `}<span>"name"</span>: <span className="code-value">"Abdelwadoude"</span>,
  <span>"role"</span>: <span className="code-value">"Full-Stack Developer"</span>,
  <span className="code-key">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Right Panel: Interactive Bio Tabs */}
        <div className="about-details">
          <div className="about-tabs-nav">
            {Object.keys(tabsContent).map((tabKey) => (
              <button
                key={tabKey}
                className={`tab-btn ${activeTab === tabKey ? 'active' : ''}`}
                onClick={() => setActiveTab(tabKey)}
              >
                {tabsContent[tabKey].icon}
                <span>{tabsContent[tabKey].title}</span>
              </button>
            ))}
          </div>

          <div className="about-tab-content glass">
            <h3 className="tab-content-title">{tabsContent[activeTab].title}</h3>
            <div className="tab-content-body">
              {tabsContent[activeTab].content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
