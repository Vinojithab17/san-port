import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import '../styles/AllProjects.css';

const AllProjects = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const allProjects = projectsData;
  
  // Filter projects based on technology
  const filteredProjects = allProjects.filter(project => {
    const matchesFilter = filter === 'all' || project.technologies.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleViewDetails = (projectId) => {
    window.scrollTo(0, 0);
    navigate(`/project/${projectId}`);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  // Get unique technologies for filter
  const allTechnologies = [...new Set(allProjects.flatMap(project => project.technologies))];

  return (
    <div className="all-projects-container">
      <div className="all-projects-header">
        <button onClick={handleBackToHome} className="back-button">
          ← Back to Home
        </button>
        <h1>All Projects</h1>
        <p>Explore my complete portfolio of work and projects</p>
      </div>

      <div className="projects-controls">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-section">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Technologies</option>
            {allTechnologies.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="projects-stats">
        <p>Showing {filteredProjects.length} of {allProjects.length} projects</p>
      </div>

      <div className="projects-list">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-list-item">
            <div className="project-list-image">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="project-list-content">
              <div className="project-list-header">
                <h3>{project.title}</h3>
                <div className="project-meta">
                  <span className="project-duration">{project.duration}</span>
                  <span className="project-role">{project.role}</span>
                </div>
              </div>
              
              <p className="project-list-description">{project.description}</p>
              
              <div className="project-list-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-list-actions">
                <button 
                  onClick={() => handleViewDetails(project.id)}
                  className="view-details-btn"
                >
                  View Full Details →
                </button>
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="live-demo-btn"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="source-code-btn"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <h3>No projects found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default AllProjects; 