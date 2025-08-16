import React from 'react';
import './styles/App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Mission from './components/Mission';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Mission />
      <Footer />
    </div>
  );
}

export default App; 