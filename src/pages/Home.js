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
      <p>My name is Nick. I am a Software Engineer/Developer currently located in Texas. My coding journey started in 2018 through self-learning with
      YouTube and Codecademy. In 2019 I attended Thinkful's Full Stack Flex coding bootcamp. In 2021 I decided to return to school and graduated with an 
      associate of arts in Computer Science from Trinity Valley Community College. After completing my associate degree, 
      I transferred to Florida International University to pursue my bachlelor of arts in Computer Science. I am currently a Junior at FIU and plan on 
      graduating in the Summer of 2024. I am currently open to new opportunities.</p>
      <div className="link__container">
      <a href={Resume} download className="resume__button">
        <button className="button"><FaFileDownload className="file"/> Resumé</button>
      </a>
      <Link to="/projects">
        <button className="button">Portfolio</button>
      </Link>
      </div>
      </div>
  </div>
  </motion.div>
  );
};

export default Home;
