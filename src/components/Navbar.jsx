import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Switch from './Switch';
import Hamburger from './Hamburger';

const Navbar = () => {
    const [page, setPage] = useState('home');
    const [dropdown, setDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(false); 

    const handleToggle = () => {
        setDropdown(prev => !prev);
    };

    const handleResize = () => {
        if (window.innerWidth <= 860) {
            setIsMobile(true); 
        } else {
            setDropdown(false); 
            setIsMobile(false);
        }
    };

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); 
    }, []);

    return (
        <div className={isMobile ? (dropdown ? 'navbar-long' : 'navbar') : 'navbar'}>
            {!dropdown && <div className='signature'>Adam Ibrahim</div>}

            {isMobile && (
                <div className="navbar">
                <div className='signature'>Adam Ibrahim</div>
                <div className="hamburger">
                    <Hamburger onToggle={handleToggle} />

                </div>
                </div>
            )}

            <div className={dropdown ? 'links-long' : 'links'}>
                <Link
                    className={page === 'home' ? 'nav-link nav-link-active' : 'nav-link'}
                    to="/"
                    onClick={() => setPage('home')}
                >
                    Home
                </Link>
                <Link
                    className={page === 'education' ? 'nav-link nav-link-active' : 'nav-link'}
                    to="/education"
                    onClick={() => setPage('education')}
                >
                    Education
                </Link>
                <Link
                    className={page === 'experience' ? 'nav-link nav-link-active' : 'nav-link'}
                    to="/experience"
                    onClick={() => setPage('experience')}
                >
                    Experience
                </Link>
                <Link
                    className={page === 'projects' ? 'nav-link nav-link-active' : 'nav-link'}
                    to="/projects"
                    onClick={() => setPage('projects')}
                >
                    Projects
                </Link>
                <Link
                    className={page === 'skills' ? 'nav-link nav-link-active' : 'nav-link'}
                    to="/skills"
                    onClick={() => setPage('skills')}
                >
                    Skills
                </Link>
                <div className="switch">
                    <Switch />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
