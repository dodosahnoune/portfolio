import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'Aether Dashboard',
      category: 'Frontend',
      description: 'A modern SaaS landing page and control panel featuring interactive charts and glassmorphic UI cards.',
      fullDescription: 'Aether Dashboard is a complete responsive frontend control panel designed for tech startups. It delivers a fast, desktop-like browsing experience with HSL styling customization, modular state controllers, and interactive charts built from SVG grids.',
      color: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
      tags: ['React', 'CSS Variables', 'Chart.js', 'Vite'],
      features: [
        'Interactive real-time dark/light mode toggle',
        'Custom SVG charting library with hover states',
        'Fully responsive glassmorphism grid layout',
        'Zero external CSS utility dependencies'
      ],
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com'
    },
    {
      id: 2,
      title: 'Vortex Search Engine',
      category: 'Backend',
      description: 'A high-performance real-time search engine and web indexing pipeline with low latency database lookup.',
      fullDescription: 'Vortex Search Engine is a backend tool developed to crawl, index, and query unstructured text documents. Equipped with redis cache systems, it handles high-concurrency requests with sub-millisecond retrieval speeds.',
      color: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      tags: ['Node.js', 'Redis', 'Elasticsearch', 'Express'],
      features: [
        'Automated recursive document crawling pipeline',
        'In-memory inverted index storage using Redis hashes',
        'Sub-millisecond query responses with tf-idf scoring',
        'Robust API security validation and rate-limiting'
      ],
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com'
    },
    {
      id: 3,
      title: 'Nexus Social Suite',
      category: 'Fullstack',
      description: 'A visual collaborative workspace for remote engineering teams featuring live updates and boards.',
      fullDescription: 'Nexus Social Suite is a fullstack workspace that unifies kanban planning boards, direct messaging, and visual code sharing snippets. Using WebSocket protocols, team actions are broadcasted instantly across all sessions.',
      color: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
      tags: ['React', 'Node.js', 'WebSockets', 'MongoDB'],
      features: [
        'Real-time collaborative editing on kanban cards',
        'Built-in code snippet editor with syntax highlights',
        'JWT-based secure user authentication layers',
        'Automatic offline message syncing mechanisms'
      ],
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com'
    },
    {
      id: 4,
      title: 'Solstice Crypto API',
      category: 'Backend',
      description: 'Cryptocurrency payment gateway API supporting blockchain validation and webhook notifications.',
      fullDescription: 'Solstice Crypto API is a microservice developed to process digital asset payments securely. It tracks multiple blockchain ledgers to confirm transaction statuses, triggers webhooks to client apps, and maintains precise ledgers.',
      color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'Blockchain'],
      features: [
        'Real-time address derivation and payment tracking',
        'Asynchronous blockchain transaction confirmation',
        'Signed secure webhooks with automated retries',
        'Optimized database index lookups for transaction records'
      ],
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com'
    },
    {
      id: 5,
      title: 'Chroma Paint Studio',
      category: 'Frontend',
      description: 'Browser-based vector graphic editor and color system generator utilizing Canvas API.',
      fullDescription: 'Chroma Paint Studio is a lightweight tool built entirely in the browser, allowing developers to design vector shapes, generate matching color palettes, and export graphics directly to SVG/PNG formats.',
      color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      tags: ['React', 'HTML5 Canvas', 'SVG Engine', 'Vite'],
      features: [
        'High-performance Canvas brush rendering logic',
        'Dynamic color palette generation based on HSL mathematics',
        'SVG import/export parsing modules',
        'Complete user editing history (Undo/Redo actions)'
      ],
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com'
    },
    {
      id: 6,
      title: 'Helios Commerce Platform',
      category: 'Fullstack',
      description: 'Serverless e-commerce storefront with customizable content management and analytics dashboards.',
      fullDescription: 'Helios is a headless e-commerce store with serverless backend APIs. It includes stock management interfaces, Stripe payment checkouts, and custom visual dashboards to track customer conversions.',
      color: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Serverless'],
      features: [
        'Static Site Generation with incremental rebuilds',
        'Integrated Stripe checkout flow with secure validations',
        'Visual administrative dashboard for product listings',
        'SEO-optimized meta configuration per product item'
      ],
      liveUrl: 'https://example.com',
      codeUrl: 'https://github.com'
    }
  ];

  const filterCategories = ['All', 'Frontend', 'Backend', 'Fullstack'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">My <span>Projects</span></h2>

      {/* Filter Navigation */}
      <div className="projects-filter-nav">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid-3 projects-grid">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="project-card glass animate-float"
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }}
          >
            {/* Visual Thumbnail */}
            <div className="project-thumbnail" style={{ background: project.color }}>
              <div className="project-icon-wrapper">
                <Code size={36} />
              </div>
              <div className="project-overlay">
                <span className="overlay-btn btn btn-primary">
                  View Details <ExternalLink size={14} />
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="project-info-card">
              <span className="project-category-tag">{project.category}</span>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              
              <div className="project-card-tags">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
                {project.tags.length > 3 && (
                  <span className="project-tag-more">+{project.tags.length - 3}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
