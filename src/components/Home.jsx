import React from 'react';
import Particle from './Particle';

const Home = () => {
  return (
    <div className="home" style={{ position: 'relative' }}>
      <Particle style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
      <div className="info" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hi">
          Hi<span className="wave">👋</span> I'm <p className="name">Adam Ibrahim</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
