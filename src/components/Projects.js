import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "a full-stack e-commerce solution built with modern web technologies, featuring user authentication, product management, and secure payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "project1"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "a collaborative task management application that helps teams stay organized and productive with real-time updates and intuitive interfaces.",
      technologies: ["React", "Firebase", "CSS Modules", "PWA"],
      image: "project2"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "this very website! built with clean code principles and a focus on user experience, showcasing the importance of thoughtful design.",
      technologies: ["React", "CSS", "JavaScript", "Responsive Design"],
      image: "project3"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">recent work</h2>
        <p className="section-subtitle">
          here are some projects i've been working on lately
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className={`project-placeholder ${project.image}`}></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <button onClick={scrollToTop} className="project-link">view project →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 