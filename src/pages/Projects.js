import React from 'react'
import { motion } from 'framer-motion'

//Style import
import '../styles/Projects.css'

//Component imports
import ProjectCard from '../components/ProjectCard'

//Image imports 
import Koral from '../assets/koralWebsite.png'
import Medology from '../assets/MedologySnip.png'
import JDMHiro from '../assets/JDMHiroMockup.png'
import EState from '../assets/EState.png'
import Mercedes from '../assets/MercedesThree.png'
import Discover from '../assets/DiscoverAI.png'


//Document import
//import AI4ALLPP from '../assets/FA22_Group1.pptx'

//Project API
const projects = [
  {
    title: "Koral Digital Website",
    text: "Frontend",
    description: "Digital Agency website built using Node.js, React, React router dom, Framer motion, and React icons. Includes video components, social links, and fully functional contact form with Google maps integration.",
    image: Koral,
    codeLink: "https://github.com/nrodriguez04/koraldigital",
    projectLink: "https://www.koraldigital.com/"
  },
  {
    title: "Medology Application",
    text: "MERN stack",
    description: "Nursing dashboard application built with MERN stack, react router, redux, refine, react icons, and material UI. Intended to be a practical use case for travel nurses and hospice jobs, scheduling, and data analytics.",
    image: Medology,
    codeLink: "https://github.com/nrodriguez04/medology",
    projectLink: "https://github.com/nrodriguez04/medology"
  },
  {
    title: "JDM Hiro",
    text: "MERN stack ECommerce",
    description: "ECommerce application for JDM car parts. Built using MERN Stack, RESTful API, react-router, and MongoDB. Contains functions for authentication, user management, product management, payment processing, and administration. Future implementations may include payment processing for crypto as well as ",
    image: JDMHiro,
    codeLink: "https://github.com/nrodriguez04/jdmhiroV2",
    projectLink: "https://github.com/nrodriguez04/jdmhiroV2"
  },
  {
    title: "EState",
    text: "MERN Stack",
    description: "MERN Stack real state web application created using Vite/React/Node/Express/MongoDB. Includes a RESTful API, authentication, search and filter capabilities. Future implementations include a fully functional admin dashboard and property mapping.",
    image: EState,
    codeLink: "https://github.com/nrodriguez04/EstateMERN",
    projectLink: "https://github.com/nrodriguez04/EstateMERN"
  },
  {
    title: "Mercedes Three.js Demo",
    text: "Frontend | Three.js | 3D Modeling",
    description: "Landing page application built using Vite, React, and Three.js. Attempted to test capabilities of Three.js in frontend application. Fairly simple version of application but could be scaled to showcase new car models within a larger application.",
    image: Mercedes,
    codeLink: "https://github.com/nrodriguez04/mercedesThree.github.io",
    projectLink: "https://github.com/nrodriguez04/mercedesThree.github.io"
  },
  {
    title: "Discover AI Group Project",
    text: "Machine Learning",
    description: "Supervised machine learning algorithm which displays visual analytics based on a provided data set. The main idea of the project was to generate a prediction of housing prices using a supervised learning algorithm and compare the algorithms prediction to the prediction provided in the dataset to calculate the difference using regression.",
    image: Discover,
    codeLink: "https://www.kaggle.com/code/nickrod068/ai4all-final-project",
    projectLink: "https://www.kaggle.com/code/nickrod068/ai4all-final-project"
  },
]

const Projects = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 2 }}
    exit={{ opacity: 0 }}
    >
    <div className="projects__container">
      <div className="procard__container">
      {projects.map(title => (
        <ProjectCard key={projects.title} {...title}/>
      ))}
      </div>
    </div>
    </motion.div>
  )
}

export default Projects