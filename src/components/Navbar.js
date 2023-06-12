import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//Style import
import '../styles/Navbar.css';

//Icon imports
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    if(mobileMenuOpen) {
      handleMenuToggle();
    }
  };

  return (
    <AnimatePresence mode="wait">
      <div className="nav__container">
        <div>
          <Link to="/" className="name_logo" onClick={handleLinkClick}>
            Nicolas Rodriguez
          </Link>
        </div>
        <button className="hamburger-menu" onClick={handleMenuToggle}>
          <FaBars />
        </button>
        <div className={`nav__links ${mobileMenuOpen ? 'open' : ''}`}>
          <nav>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
            <Link to="/experience" onClick={handleLinkClick}>Experience</Link>
            <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
            <Link to="/certifications" onClick={handleLinkClick}>Certifications</Link>
            <Link onClick={handleLinkClick}><a href="https://nickfrmtech.blogspot.com/" target='_blank' rel='noreferrer'>Blog</a></Link>
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          </nav>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Navbar;
