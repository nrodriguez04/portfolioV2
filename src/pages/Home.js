import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

//Style import
import '../styles/Home.css'

//Image imports
//import profileImg from '../assets/headshot.png'
import tempHome from '../assets/PortfolioPicEdit2.png'

//Icon imports
import { BsFillPinMapFill } from 'react-icons/bs' 
import { FaFileDownload } from 'react-icons/fa'

//Component Imports
import Resume from '../assets/Nicolas_Rodriguez_Resume.pdf'


const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 2 }}
    exit={{ opacity: 0 }}
    >
    <div className="home__container">
      <img src={tempHome} alt="profile" className="profile-image"/>
      <div className="home__text">
      <h1>Nicolas Rodriguez</h1>
      <h5>Software Engineer | Developer</h5>
      <p><BsFillPinMapFill /> Dallas, TX</p>
      <p>Hello, I'm Nick, a dedicated Software Engineer based in Texas. My fascination with coding ignited in 2018, sparked by self-study initiatives on platforms such as YouTube and Codecademy. Keen to further enhance my skillset, I enrolled in Thinkful's Full Stack Flex coding bootcamp in 2019.</p>

      <p>In 2021, my commitment to professional growth led me back to the academic world, where I earned an Associate of Arts in Computer Science from Trinity Valley Community College. Presently, I'm broadening my knowledge base at Florida International University, pursuing a Bachelor of Arts in Computer Science. As a Junior, I'm enthusiastically anticipating my graduation in the summer of 2024.</p>
      
      <p>With an insatiable curiosity for learning and a passion for problem-solving, I am actively exploring new opportunities to apply and expand my technical abilities.</p>
      
      <p>Feel free to reach out if you believe we could create something impactful together.</p>
      <div className="button-container">
      <a href={Resume} download className="resume__button">
        <button className="home-button"><FaFileDownload className="file"/> Resumé</button>
      </a>
      <Link to="/projects">
        <button className="home-button">Portfolio</button>
      </Link>
      </div>
      </div>
  </div>
  </motion.div>
  );
};

export default Home;
