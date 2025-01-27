import React from "react";
import './styles/general.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import AnimatedCursor from "react-animated-cursor";
import Experience from "./components/Experience";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import Skills from "./components/Skills";



function App() {
  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent
  );

  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/education" element={<Education/>} />
           <Route path="/experience" element={<Experience/>} />
           <Route path="/projects" element={<Projects/>}/>
           <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
      {!isMobile && (
        <AnimatedCursor innerSize={10} outerSize={20} color="#0b0ee6" outerAlpha={0.95} innerScale={1} outerScale={1} showSystemCursor={false} innerStyle={{ backgroundColor: "rgba(50, 1, 128, 0.96)" , zIndex:1500}} outerStyle={{ backgroundColor: "rgba(97, 15, 230, 0.96)", zIndex: 1100 }}
        />
      )}
    </Router>
  );
}

export default App;
