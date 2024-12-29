import React from "react";
import { motion } from "framer-motion";
import "../styles/education.css";
import "../styles/exp.css";
import estaieLogo from "../assets/estaie.jpg";
import UAEULogo from "../assets/UAEU.webp";

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
        variants={cardVariants} // Animates each card
      >
        <div className="picture">
          <img className="work-logo" src={estaieLogo} alt="estaie logo" />
        </div>
        <div className="workInfo">
          <p className="position">Data Science Intern</p>
          <p className="company">estaie</p>
          <p className="timeFrame">(December 2024 - Present)</p>
          <p className="tasks">
            1. Integrated 4+ lead generation channels (Paid, Organic, Social, Referral) to track 100k+ leads and improve conversion rates.
            <br />
            2. Built a lead scoring model, improving lead prioritization by 30% and optimizing resource allocation for the performance team.
            <br />
            3. Implemented end-to-end tracking for 10+ key user events, analyzing funnel drop-offs and user behavior with 95% accuracy.
            <br />
            4. Provided demand trend forecasts, contributing to a 15% improvement in dynamic pricing optimization.
          </p>
          <p className="skills">Skills: Python · Machine Learning · Data Analytics · Optimization</p>
        </div>
      </motion.div>

      <motion.div
        className="card"
        variants={cardVariants} // Animates each card
      >
        <div className="picture">
          <img className="work-logo-UAEU" src={UAEULogo} alt="UAEU logo" />
        </div>
        <div className="workInfo">
          <p className="position">Undergraduate Research Assistant</p>
          <p className="company">United Arab Emirates University</p>
          <p className="timeFrame">(February 2024 - Present)</p>
          <p className="tasks">
            1. AI and Robotics Lab - Designed and built a robotic gripping device for stroke rehabilitation with CAD models, 3D-printed parts, and Arduino-based sensor & motor integration.
            <br />
            2. Solar Panel Cleaning Optimization System - Developed a Python tool with Scikit-learn to predict cleaning schedules, reducing costs and improving efficiency.
            <br />
            3. Partial Face Recognition Model - Developing a deep learning model using PyTorch, CNNs, and QAConv to enhance accuracy in occluded conditions.
          </p>
          <p className="skills">Skills: Deep Learning · Python · Research · PyTorch </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;