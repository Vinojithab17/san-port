import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById } from '../data/projectsData';
import '../styles/ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Ensure page starts at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const project = getProjectById(id);
  
  if (!project) {
    return (
      <div className="project-details-container">
        <div className="project-details-header">
          <button onClick={() => navigate('/')} className="back-button">
            ← Back to Home
          </button>
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleBackToProjects = () => {
    navigate('/all-projects');
  };

  const handleViewLive = () => {
    window.open(project.liveLink, '_blank');
  };

  const handleViewCode = () => {
    window.open(project.githubLink, '_blank');
  };

  return (
    <div className="project-details-container">
      <div className="project-details-header">
        <div className="header-buttons">
          <button onClick={handleBackToProjects} className="back-button">
            ← Back to Projects
          </button>
          <button onClick={() => navigate('/')} className="home-button">
            🏠 Home
          </button>
        </div>
        <h1 className="project-title">{project.title}</h1>
        <p className="project-subtitle">{project.description}</p>
      </div>

      <div className="project-details-content">
        <div className="project-main">
          <div className="project-image-section">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-actions">
              <button onClick={handleViewLive} className="action-button primary">
                View Live Demo
              </button>
              <button onClick={handleViewCode} className="action-button secondary">
                View Source Code
              </button>
            </div>
          </div>

          <div className="project-info">
            <div className="info-grid">
              <div className="info-item">
                <h4>Duration</h4>
                <p>{project.duration}</p>
              </div>
              <div className="info-item">
                <h4>Team Size</h4>
                <p>{project.teamSize}</p>
              </div>
              <div className="info-item">
                <h4>My Role</h4>
                <p>{project.role}</p>
              </div>
            </div>
          </div>

          <div className="project-description">
            <h3>About This Project</h3>
            <p>{project.longDescription}</p>
          </div>

          <div className="project-technologies">
            <h3>Technologies Used</h3>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-features">
            <h3>Key Features</h3>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-challenges">
            <h3>Challenges & Solutions</h3>
            <div className="challenges-section">
              <div className="challenges">
                <h4>Challenges Faced</h4>
                <ul>
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
              <div className="solutions">
                <h4>Solutions Implemented</h4>
                <ul>
                  {project.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails; 