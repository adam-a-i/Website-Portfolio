import './styles/components.css'
import './styles/general.css'
import './styles/home.css'
import './styles/navbar.css'
import { useState } from "react";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import AnimatedCursor from "react-animated-cursor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
      <Router>
      <div className="container">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} /> 
        </Routes>
      </div>
      <AnimatedCursor
        innerSize={10}        
        outerSize={20}        
        color="#0b0ee6"   
        outerAlpha={0.95}   
        innerScale={1}        
        outerScale={1}       
        showSystemCursor={false} 
        innerStyle={{
          backgroundColor: "rgba(50, 1, 128, 0.96)" 
        }}
        outerStyle={{
          backgroundColor: "rgba(97, 15, 230, 0.96)",  
        }}
      />
      </Router>
  )
}

export default App
