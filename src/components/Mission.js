import React from 'react';
import '../styles/Mission.css';

const Mission = () => {
  return (
    <section className="mission" id="mission">
      <div className="container">
        <div className="mission-content">
          <h2 className="section-title">my mission</h2>
          <div className="mission-statement">
            <h3 className="mission-headline">
              bridging creativity and technology
            </h3>
            <p className="mission-description">
              i believe that great digital experiences happen when we focus on the human 
              behind the screen. every line of code, every design decision, every interaction 
              should serve a purpose and create value for the people using it.
            </p>
            <div className="mission-principles">
              <div className="principle">
                <h4>user-first thinking</h4>
                <p>understanding needs before writing solutions</p>
              </div>
              <div className="principle">
                <h4>clean, maintainable code</h4>
                <p>building things that last and can grow</p>
              </div>
              <div className="principle">
                <h4>continuous learning</h4>
                <p>staying curious and embracing new challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission; 