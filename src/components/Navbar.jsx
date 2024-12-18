import React from 'react';
import { Link } from 'react-router-dom';
import Switch from './Switch';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='signature'>Adam Ibrahim</div>
            <div className="links">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/education">Education</Link>
            <Link className="nav-link" to="/education">Experience</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/contact">Skills</Link>
            <div className="switch">
                <Switch />
            </div> 
            </div> 
        </div>
    );
}

export default Navbar;