import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>let's connect</h3>
            <p>i'm always open to new opportunities and interesting conversations</p>
            <a href="mailto:hello@sanjith.dev" className="email-link">
              hello@sanjith.dev
            </a>
          </div>
          
          <div className="footer-section">
            <h3>find me online</h3>
            <div className="social-links">
              <a href="https://github.com/sanjith" className="social-link" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">📱</span>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/sanjith" className="social-link" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="https://twitter.com/sanjith" className="social-link" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">🐦</span>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Sanjith. built with ❤️ and React</p>
          <a href="/login" className="admin-link">Admin Login</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 