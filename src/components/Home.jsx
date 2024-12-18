import React from 'react';
import Particle from './Particle';
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
    <div className="home">
      <Particle style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
      <div className="info">
        <div className="hi">
          <p className='name'>Hi</p><span className="wave">👋</span><p className='name'>I'm</p><p className="name">Adam Ibrahim</p>
          <div className='typewriter'>
            <p className='into'>I am into </p>
            <Typewriter
              className='typewriter'
              options={{
                strings: ['Full Stack Development', ' AI', 'Machine Learning', 'Web Development', 'Data Science'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
