import React from 'react';
import SchoolIcon from '../assets/SchoolIcon';
import WorkIcon from '../assets/WorkIcon';
import '../styles/education.css';
import TimelineElements from './TimelineElements';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

const Education = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className="education">
      <motion.div 
        className="edu"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className='edu-title'>FORMAL <span className='gradient'>EDUCATION</span></p>
      </motion.div>
      <VerticalTimeline lineColor="#2d2d2d">
        {TimelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <div className="timeline-content">
                <p className="description">{element.description}</p>
                {element.gpa && <p className="achievement gpa">{element.gpa}</p>}
                {element.Achievements && <p className="achievement">{element.Achievements}</p>}
                {element.EmSAT && <p className="achievement">{element.EmSAT}</p>}
                {element.SAT && <p className="achievement">{element.SAT}</p>}
              </div>
              {showButton && (
                <a
                  className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Education;
