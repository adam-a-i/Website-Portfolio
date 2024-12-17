import React from 'react';
import Particle from './Particle';

const Home = () => {
  return (
    <div className="home">
      <Particle />
      <div className="info">
        <div className="hi">
          Hi<span className="wave">👋</span> I'm <p className="name">Adam Ibrahim</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
