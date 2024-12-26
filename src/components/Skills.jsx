import FadeInSection from "./FadeInView";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { DiMongodb, DiMysql } from "react-icons/di";
import { SiFirebase, SiExpress, SiJavascript, SiOpencv, SiGit } from "react-icons/si";

export const iconSize = 25;

export const skills = [
  {
    label: "Python",
    color: "53, 114, 165", // Blue
    icon: <FaPython size={iconSize} color="#3572A5" />,
    description: "Programming Language",
  },
  {
    label: "JavaScript",
    color: "240, 219, 79", // Yellow
    icon: <SiJavascript size={iconSize} color="#F0DB4F" />,
    description: "Scripting Language",
  },
  {
    label: "Java",
    color: "255, 86, 47", // Orange
    icon: <FaJava size={iconSize} color="#FF562F" />,
    description: "Programming Language",
  },
  {
    label: "React",
    color: "97, 218, 251", // Teal
    icon: <FaReact size={iconSize} color="#61DAFB" />,
    description: "Frontend Library",
  },
  {
    label: "AWS",
    color: "255, 153, 0", // Orange
    icon: <FaAws size={iconSize} color="#FF9900" />,
    description: "Cloud Computing",
  },
  {
    label: "Express",
    color: "128, 128, 128", // Gray
    icon: <SiExpress size={iconSize} color="gray" />,
    description: "Node.js Framework",
  },
  {
    label: "Firebase",
    color: "255, 87, 34", // Orange
    icon: <SiFirebase size={iconSize} color="#FF5722" />,
    description: "Backend Service",
  },
  {
    label: "MongoDB",
    color: "0, 128, 0", // Green
    icon: <DiMongodb size={iconSize} color="green" />,
    description: "NoSQL Database",
  },
  {
    label: "MySQL",
    color: "3, 136, 170", // Cyan
    icon: <DiMysql size={iconSize} color="#0388AA" />,
    description: "Relational Database",
  },
  {
    label: "Node.js",
    color: "0, 128, 0", // Green
    icon: <FaNodeJs size={iconSize} color="green" />,
    description: "Server Language",
  },
  {
    label: "OpenCV",
    color: "0, 0, 0", // Black
    icon: <SiOpencv size={iconSize} color="black" />,
    description: "Computer Vision",
  },
  {
    label: "Git",
    color: "255, 85, 0", // Orange
    icon: <SiGit size={iconSize} color="#FF5500" />,
    description: "Version Control",
  },
];

export default function Skills() {
  return (
    <FadeInSection>
      <div className="mt-20 w-full flex justify-center items-center p-8 box-border flex-col">
        <section id="skills" className="mb-6 w-full">
        <p className='edu-title'> My  <span className='gradient'>Skills </span></p>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center p-3 border bg-gray-800 rounded-md shadow-md"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                style={{
                  height: "80px", // Reduced card height
                }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-md"
                  style={{
                    backgroundColor: `rgba(${skill.color}, 0.2)`,
                  }}
                >
                  {skill.icon}
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-bold text-white">{skill.label}</h3>
                  <p className="text-xs text-gray-400">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </FadeInSection>
  );
}
