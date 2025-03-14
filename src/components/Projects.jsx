import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/projects.css";
import projectData from "./projectData";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  const titleVariants = {
    hover: {
      color: "#a855f7",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      className="projects"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="edu-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span className="gradient">Projects</span>
      </motion.h1>
      <motion.div
        className="cards-projects"
        variants={containerVariants}
      >
        <AnimatePresence>
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover="hover"
            >
              <motion.div className="project-image-container">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  variants={imageVariants}
                />
              </motion.div>
              <motion.div className="project-content">
                <motion.h3 
                  className="project-title"
                  variants={titleVariants}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="project-description"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0.8 }}
                >
                  {project.description}
                </motion.p>
                <div className="project-links">
                  <motion.a
                    href={project.demoLink}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
