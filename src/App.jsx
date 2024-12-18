import './styles/components.css'
import './styles/general.css'
import './styles/home.css'
import './styles/navbar.css'
import { useState } from "react";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
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
      </Router>
  )
}

export default App
