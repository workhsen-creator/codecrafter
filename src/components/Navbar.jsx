import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (id === 'hero') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container nav-container">
                <div className="logo" onClick={() => scrollToSection('hero')}>
                    <span className="logo-text">
                        <span className="logo-code">Code</span>
                        <span className="logo-crafters">Crafters</span>
                    </span>
                </div>

                <ul className="nav-links">
                    <li className="nav-item dropdown">
                        <a onClick={() => scrollToSection('hero')} className="dropdown-toggle">
                            Home <span className="arrow">▼</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                            <li><a onClick={() => scrollToSection('about')}>About</a></li>
                            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                        </ul>
                    </li>
                    <li><a onClick={() => handleNavigation('/work')}>Our Work</a></li>
                </ul>

                <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                    Get Started
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
