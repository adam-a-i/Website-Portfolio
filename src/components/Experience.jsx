import React from "react";
import { motion } from "framer-motion";
import "../styles/education.css";
import "../styles/exp.css";
import estaieLogo from "../assets/estaie.jpg";
import UAEULogo from "../assets/UAEU.webp";
import AICLogo from "../assets/JoyBox.png";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="experience"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div>
        <p className="edu-title">
          Work <span className="gradient">Experience</span>
        </p>
      </motion.div>

      <motion.div
        className="card"
        variants={cardVariants}
      >
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

      <motion.div
        className="card"
        variants={cardVariants}
      >
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

      <motion.div>
        <p className="edu-title">
          Hackathon <span className="gradient">Participation</span>
        </p>
      </motion.div>

      <motion.div
        className="card hackathon-card"
        variants={cardVariants}
      >
        <div className="picture">
          <img className="work-logo" src={AICLogo} alt="AIC Competition logo" />
        </div>
        <div className="workInfo">
          <p className="position">1st place🎉 - AIC-1 (ICMTC)</p>
          <p className="company">Competitor</p>
          <p className="tasks">
            Developed an Arabic abstractive summarization model and dataset. Introduced a cheap way to label summarization datasets in Arabic NLP through prompt engineering. The first Arabic abstractive summarization dataset to be labelled by an LLM. -Publishing works in progress-
          </p>
          <div className="hackathon-links">
            <a href="#" className="project-link">
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;