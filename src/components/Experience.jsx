import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/education.css";
import "../styles/exp.css";
import estaieLogo from "../assets/estaie.jpg";
import UAEULogo from "../assets/UAEU.webp";
import slushd from "../assets/nyuWin.jpeg";
import zu from "../assets/zuWin.jpeg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const hackathonWins = [
  {
    id: 1,
    title: "1st place 🥇 - AI for Good Hackathon at NYUAD Slush'D",
    company: "NYUAD Slush'D & Nokia",
    image: slushd,
    description: "Built with a team of 3 to develop Socia, an AI-powered public speaking training platform. Built real-time speech analysis, immersive practice environments, and multilingual support. Won 1st place among 104 teams in the biggest hackathon in the UAE of 2025.",
    skills: "AI · Speech Analysis · React Native · Mobile Development",
    learnMoreLink: "#"
  },
  {
    id: 2,
    title: "1st place 🥇 - Digital Transformation Hackathon",
    company: "Zayed University",
    image: zu,
    description: "Developed F.A.L.C.O.N (Flood Alert and Level Control Observational Network) to help Civil Defense prioritize resources during floods. Integrated satellite imagery, ML models, and LLMs for real-time flood analysis.",
    skills: "React · Machine Learning · Satellite Imagery · GIS",
    learnMoreLink: "#"
  }
];

const Experience = () => {
  const [currentHackathon, setCurrentHackathon] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setCurrentHackathon((prev) => (prev - 1 + hackathonWins.length) % hackathonWins.length);
    } else if (e.key === 'ArrowRight') {
      setCurrentHackathon((prev) => (prev + 1) % hackathonWins.length);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="experience">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="edu-title"
      >
        Work <span className="gradient">Experience</span>
      </motion.h1>

      <motion.div className="card">
        <div className="picture">
          <img className="work-logo" src={estaieLogo} alt="estaie logo" />
        </div>
        <div className="workInfo">
          <p className="position">Data Science Intern</p>
          <p className="company">estaie</p>
          <p className="timeFrame">(December 2024 - Present)</p>
          <p className="tasks">
          • Developed a machine learning model using Random Forest to identify high-quality leads with 87% accuracy, prioritizing resources to convert 300+ leads. 
            <br />
          • Designed and implemented ETL pipelines using Python and BigQuery to integrate data from GA4, HubSpot, and WhatsApp Analytics, facilitating real-time reporting and insights.
            <br />
          • Analyzed multi-channel attribution and engagement trends and automated weekly reports, saving 5 hours per week of manual work.
            <br />
          • Created an investor-ready dashboard in Google Data Studio, mapping lead journeys and key metrics, improving campaign efficiency by 15%.
          </p>
          <p className="skills">Skills: Python · Machine Learning · Data Analytics · Optimization</p>
        </div>
      </motion.div>

      <motion.div className="card">
        <div className="picture">
          <img className="work-logo-UAEU" src={UAEULogo} alt="UAEU logo" />
        </div>
        <div className="workInfo">
          <p className="position">Undergraduate Research Assistant</p>
          <p className="company">United Arab Emirates University</p>
          <p className="timeFrame">(February 2024 - Present)</p>
          <p className="tasks">
          •  AI and Robotics Lab - Designed and built a robotic gripping device for stroke rehabilitation with CAD models, 3D-printed parts, and Arduino-based sensor & motor integration.
            <br />
          • Solar Panel Cleaning Optimization System - Developed a Python tool with Scikit-learn to predict cleaning schedules, reducing costs and improving efficiency.
            <br />
          • Partial Face Recognition Model - Developing a deep learning model using PyTorch, CNNs, and QAConv to enhance accuracy in occluded conditions.
          </p>
          <p className="skills">Skills: Deep Learning · Python · Research · PyTorch </p>
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="edu-title"
      >
        Hackathon <span className="gradient">Wins</span>
      </motion.h1>

      <div className="hackathon-section">
        <div className="hackathon-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHackathon}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="card hackathon-card"
            >
              <div className="picture">
                <img className="work-logo" src={hackathonWins[currentHackathon].image} alt="Hackathon" />
              </div>
              <div className="workInfo">
                <p className="position">{hackathonWins[currentHackathon].title}</p>
                <p className="company">{hackathonWins[currentHackathon].company}</p>
                <p className="tasks">{hackathonWins[currentHackathon].description}</p>
                <p className="skills">Skills: {hackathonWins[currentHackathon].skills}</p>
                <div className="hackathon-links">
                  <a href={hackathonWins[currentHackathon].learnMoreLink} className="project-link">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="slider-dots">
            {hackathonWins.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentHackathon ? 'active' : ''}`}
                onClick={() => setCurrentHackathon(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;