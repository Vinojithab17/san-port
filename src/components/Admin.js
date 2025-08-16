import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Admin.css';

const Admin = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    name: 'Sanjith',
    title: 'Full Stack Developer',
    email: 'sanjith@example.com',
    bio: 'Passionate about creating meaningful digital experiences that connect people and ideas',
    skills: ['React', 'Node.js', 'Python', 'JavaScript', 'CSS', 'HTML']
  });
  
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React',
      technologies: ['React', 'CSS', 'JavaScript'],
      image: 'https://via.placeholder.com/300x200',
      link: 'https://github.com/username/portfolio'
    }
  ]);
  
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: '',
    image: '',
    link: ''
  });

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Here you would typically save to a backend
    console.log('Profile updated:', profile);
    alert('Profile updated successfully!');
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (newProject.title && newProject.description) {
      const project = {
        id: Date.now(),
        ...newProject,
        technologies: newProject.technologies.split(',').map(tech => tech.trim())
      };
      setProjects([...projects, project]);
      setNewProject({ title: '', description: '', technologies: '', image: '', link: '' });
      alert('Project added successfully!');
    }
  };

  const handleDeleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== id));
    }
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>
      
      <div className="admin-content">
        <nav className="admin-nav">
          <button 
            className={`nav-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Edit Profile
          </button>
          <button 
            className={`nav-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Manage Projects
          </button>
        </nav>

        {activeTab === 'profile' && (
          <div className="tab-content">
            <h2>Edit Profile</h2>
            <form onSubmit={handleProfileUpdate} className="profile-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={profile.title}
                  onChange={(e) => setProfile({...profile, title: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  rows="4"
                />
              </div>
              <div className="form-group">
                <label>Skills (comma-separated)</label>
                <input
                  type="text"
                  value={profile.skills.join(', ')}
                  onChange={(e) => setProfile({...profile, skills: e.target.value.split(',').map(s => s.trim())})}
                />
              </div>
              <button type="submit" className="save-btn">Save Profile</button>
            </form>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="tab-content">
            <h2>Manage Projects</h2>
            
            <div className="add-project-section">
              <h3>Add New Project</h3>
              <form onSubmit={handleAddProject} className="project-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      value={newProject.title}
                      onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Technologies (comma-separated)</label>
                    <input
                      type="text"
                      value={newProject.technologies}
                      onChange={(e) => setNewProject({...newProject, technologies: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    rows="3"
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="url"
                      value={newProject.image}
                      onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Project Link</label>
                    <input
                      type="url"
                      value={newProject.link}
                      onChange={(e) => setNewProject({...newProject, link: e.target.value})}
                    />
                  </div>
                </div>
                <button type="submit" className="add-btn">Add Project</button>
              </form>
            </div>

            <div className="projects-list">
              <h3>Current Projects</h3>
              {projects.map(project => (
                <div key={project.id} className="project-item">
                  <div className="project-info">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-actions">
                    <button 
                      onClick={() => handleDeleteProject(project.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin; 