import React from 'react';
import SchoolIcon from '../assets/SchoolIcon';
import WorkIcon from '../assets/WorkIcon';
import '../styles/education.css';
import TimelineElements from './TimelineElements';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const Education = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className="education">
      <div className="edu">
        <p className='edu-title'>FORMAL <span className='gradient'>Education</span></p>
      </div>
      <VerticalTimeline>
        {TimelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id} // Use 'id' instead of 'key' as 'key' is a special prop
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              <p id="gpa">{element.gpa}</p>
              <p >{element.Achievements}</p>
              <p id="gpa">{element.EmSAT}</p>
              <p id="gpa">{element.SAT}</p>
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
