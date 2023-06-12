import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//Style import
import '../styles/Navbar.css';

//Icon imports
import { FaBars } from 'react-icons/fa';

//Component Imports
// import Resume from '../assets/Nicolas_Rodriguez_Resume.pdf';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AnimatePresence mode="wait">
      <div className="nav__container">
        <div>
          <Link to="/" className="name_logo">
            Nicolas Rodriguez
          </Link>
        </div>
        <button className="hamburger-menu" onClick={handleMenuToggle}>
          <FaBars />
        </button>
        <div className={`nav__links ${mobileMenuOpen ? 'open' : ''}`}>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/certifications">Certifications</Link>
            <Link><a href="https://nickfrmtech.blogspot.com/" target='_blank' rel='noreferrer'>Blog</a></Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Navbar;
