import React from 'react';
import Particle from './Particle';
import Typewriter from 'typewriter-effect';
import Button from './button';
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
                strings: ['Full Stack Development', ' AI', 'Machine Learning', 'Deep Learning','Open Source', 'Web Development'],
                autoStart: true,
                loop: true,
                typeSpeed: 150, // Typing speed (lower value = faster)
                deleteSpeed: 10, 
              }}
            />
          </div>
        </div>
        <div className="social-icons">
        <a className="socialicon linkedin" title="linkedin" href="https://www.linkedin.com/in/adam-ai/" target="_blank" rel="author">
            <svg class="linkedin-icon feather feather-linkedin" xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 24 24" fill="#0e76a8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        </a>
        <a className="socialicon github" title="github" href="https://github.com/adam-a-i" target="_blank" rel="author">

            <svg className="github-icon" width="45px" height="45px" viewBox="0 0 300 300">

                <path id="body" d="M112.5,234.4v43.1c24.5,7.5,50.5,7.5,75,0V225c-0.4-11.1-4.9-21.6-12.7-29.6c30-3.4,59.5-23.5,59.5-64.1
                                            c0.9-13.9-3.3-27.7-11.8-38.7c4.1-11.6,3.7-24.4-1.3-35.7c0,0-11.2-3.7-37.5,13.8c-22.1-6.1-45.3-6.1-67.4,0
                                            C90.6,53.3,78.9,56.8,78.9,56.8c-5,11.3-5.4,24.1-1.3,35.7c-8.5,11.1-12.7,24.8-11.9,38.7c0.2,33.8,26.4,61.8,60.2,64.1
                                            c-5,4.7-8.1,11.1-8.6,18" />

                <path id="arm" d="M125.2,213.4c-13.9,7.8-31.5,2.8-39.3-11.2c-4.3-7.7-12-12.8-20.7-13.8c-11.2,0-4.6,6.4,0,9.4
                                            c6,5.1,10.8,11.5,13.8,18.8c2.9,7.4,7.7,24.1,41.5,17.8" />
            </svg>
        </a>

        <a className="socialicon kaggle" title="kaggle" href="https://www.kaggle.com/adamibrahim12" target="_blank" rel="author">
            <p>k</p>
        </a>

        
        <a className="socialicon kaggle" href="https://leetcode.com/u/adam_ibrahim/" target="_blank" rel="author">
            <i className="fab"><img id="leetcode-icon" src="https://iconape.com/wp-content/png_logo_vector/leetcode-logo-white-no-text.png" alt="lc" width="35" height="35"/></i>
        </a>
    </div>
    <div className="resume">
    <Button onClick={() => {
  console.log('Button clicked');
  window.open('/assets/AdamCV.pdf', '_blank');
}} />

    </div>
      </div>
    </div>
  );
};

export default Home;
