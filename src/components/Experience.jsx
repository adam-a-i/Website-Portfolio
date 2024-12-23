import React from 'react'
import '../styles/education.css'
import '../styles/exp.css'
import estaieLogo from '../assets/estaie.jpg'
import UAEULogo from '../assets/UAEU.webp'

const Experience = () => {
  return (
    <div className='experience'>
      <p className='edu-title'>Work <span className='gradient'>Experience</span></p>
      
      <div className="card">
        <div className="picture">
          <img className='work-logo' src={estaieLogo} alt="estaie logo" />
        </div>
        <div className="workInfo">
          <p className="position">Data Science Intern</p>
          <p className="company">estaie</p>
          <p className="timeFrame">(December 2024 - Present)</p>
          <p className="tasks">
            1. Built ML-driven predictive models to prioritize leads and optimize resources.
          </p>
          <p className="skills">Skills: Python · Machine Learning · Data Analytics</p>
        </div>
      </div>

      <div className="card">
        <div className="picture">
          <img className='work-logo' src={UAEULogo} alt="UAEU logo" />
        </div>
        <div className="workInfo">
          <p className="position">Research Assistant</p>
          <p className="company">United Arab Emirates University</p>
          <p className="timeFrame">(Febraury 2024 - Present)</p>
          <p className="tasks">
            1. Conducted research in AI and machine learning, assisting in various projects.
          </p>
          <p className="skills">Skills: Deep Learning · Python · Research</p>
        </div>
      </div>
    </div>
  );
};



export default Experience
