import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">Sanjith</span>
            <span className="logo-subtitle">Developer</span>
          </Link>
        </div>

        <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <span 
                onClick={() => scrollToSection('home')}
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </span>
            </li>
            <li className="nav-item">
              <span 
                onClick={() => scrollToSection('about')}
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                About
              </span>
            </li>
            <li className="nav-item">
              <span 
                onClick={() => scrollToSection('projects')}
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Projects
              </span>
            </li>
            <li className="nav-item">
              <span 
                onClick={() => scrollToSection('mission')}
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Mission
              </span>
            </li>
            <li className="nav-item">
              <span 
                onClick={() => scrollToSection('contact')}
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Contact
              </span>
            </li>
            <li className="nav-item">
              <Link 
                to="/all-projects" 
                className={`nav-link ${isActiveRoute('/all-projects') ? 'active' : ''}`}
              >
                All Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/login" 
                className={`nav-link ${isActiveRoute('/login') ? 'active' : ''}`}
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 