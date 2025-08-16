import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">about me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              i've been passionate about technology and creativity for as long as i can remember. 
              what started as curiosity about how things work on the web has grown into a deep 
              love for building experiences that matter.
            </p>
            <p className="about-details">
              when i'm not coding, you'll find me exploring new ideas, reading about emerging 
              technologies, or collaborating with fellow creators. i believe the best solutions 
              come from understanding both the technical and human sides of every problem.
            </p>
            <div className="about-skills">
              <h3>things i work with</h3>
              <div className="skills-grid">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">UI/UX</span>
                <span className="skill-tag">Problem Solving</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image-placeholder">
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 