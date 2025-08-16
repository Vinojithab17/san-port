import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Mission from './components/Mission';
import Footer from './components/Footer';
import Login from './components/Login';
import Admin from './components/Admin';
import ProjectDetails from './components/ProjectDetails';
import AllProjects from './components/AllProjects';
import { AuthProvider, useAuth } from './context/AuthContext';
import Loading from './components/Loading';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <Loading />;
  }
  
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
                      <Route path="/" element={
            <>
              <Header />
              <Hero />
              <About />
              <Projects />
              <Mission />
              <Footer />
            </>
          } />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } />
            <Route path="/project/:id" element={
              <>
                <Header />
                <ProjectDetails />
              </>
            } />
            <Route path="/all-projects" element={
              <>
                <Header />
                <AllProjects />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 