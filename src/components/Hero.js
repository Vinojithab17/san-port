import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToContact = () => {
    const footerSection = document.querySelector('.footer');
    if (footerSection) {
      footerSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-greeting">
          hello, i'm <span className="hero-name">Sanjith</span> 👋
        </h1>
        <p className="hero-tagline">
          passionate about creating meaningful digital experiences that connect people and ideas
        </p>
        <div className="hero-cta">
          <button className="cta-button primary" onClick={scrollToProjects}>view my work</button>
          <button className="cta-button secondary" onClick={scrollToContact}>get in touch</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-illustration">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format" 
            alt="Sanjith - Developer Portrait" 
            className="hero-profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 