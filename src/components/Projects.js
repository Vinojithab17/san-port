import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import '../styles/Projects.css';

const Projects = () => {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  const handleViewDetails = (projectId) => {
    // Clear scroll position before navigation
    window.scrollTo(0, 0);
    // Navigate to project details
    navigate(`/project/${projectId}`);
  };

  const projects = projectsData;

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">recent work</h2>
        <p className="section-subtitle">
          here are some projects i've been working on lately
        </p>
        <div className="projects-grid">
          {projects.slice(0, 3).map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-image-img" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <button 
                    onClick={() => handleViewDetails(project.id)} 
                    className="project-link primary"
                  >
                    View Details →
                  </button>
                  <button onClick={scrollToTop} className="project-link secondary">
                    Back to Top
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-projects">
          <button 
            onClick={() => navigate('/all-projects')} 
            className="view-all-btn"
          >
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 