import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Switch from './Switch';
import Hamburger from './Hamburger';

const Navbar = () => {
    const [page, setPage] = useState('home');
    const [dropdown, setDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // New state to track screen size

    const handleToggle = () => {
        setDropdown(prev => !prev); // Toggle the dropdown state
    };

    const handleResize = () => {
        // Set isMobile based on window width
        if (window.innerWidth <= 860) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        // Initial check when the component is mounted
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={isMobile ? (dropdown ? 'navbar-long' : 'navbar') : 'navbar'}>
            <div className='signature'>Adam Ibrahim</div>

            {/* Hamburger is only shown on mobile */}
            {isMobile && (
                <div className="hamburger">
                    <Hamburger onToggle={handleToggle} />
                </div>
            )}

            <div className={dropdown ? "links-long" : "links"}>
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
