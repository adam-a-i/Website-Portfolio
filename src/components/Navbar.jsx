import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Switch from './Switch';
import Hamburger from './Hamburger';
import '../styles/navbar.css';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [navbarKey, setNavbarKey] = useState(0); // Key for reloading Navbar

    const location = useLocation();
    const currentPage = location.pathname === '/education' ? 'education' :
                        location.pathname === '/experience' ? 'experience' :
                        location.pathname === '/projects' ? 'projects' :
                        location.pathname === '/skills' ? 'skills' : 'home';

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

    const handleLinkClick = () => {
        setDropdown(false);
        setNavbarKey(prev => prev + 1); // Increment key to reload Navbar
    };

    return (
        <div key={navbarKey} className={isMobile ? (dropdown ? 'navbar-long' : 'navbar') : 'navbar'}>
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
                    onClick={handleLinkClick}
                    className={currentPage === 'home' ? 'nav-link nav-link-active' : 'nav-link'}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    onClick={handleLinkClick}
                    className={currentPage === 'education' ? 'nav-link nav-link-active' : 'nav-link'}
                    to="/education"
                >
                    Education
                </Link>
                <Link
                    onClick={handleLinkClick}
                    className={currentPage === 'experience' ? 'nav-link nav-link-active' : 'nav-link'}
                    to="/experience"
                >
                    Experience
                </Link>
                <Link
                    onClick={handleLinkClick}
                    className={currentPage === 'projects' ? 'nav-link nav-link-active' : 'nav-link'}
                    to="/projects"
                >
                    Projects
                </Link>
                <Link
                    onClick={handleLinkClick}
                    className={currentPage === 'skills' ? 'nav-link nav-link-active' : 'nav-link'}
                    to="/skills"
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
