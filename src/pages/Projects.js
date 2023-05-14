import React from 'react'
import { motion } from 'framer-motion'

//Style import
import '../styles/Projects.css'

//Component imports
import ProjectCard from '../components/ProjectCard'

//Image imports 
import Koral from '../assets/koralWebsite.png'
import Minato from '../assets/MinatoMockup.png'

//import Medology from '../assets/MedologySnip.png'
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
    description: "My role in this project was to bring the digital wonderland to life. I skillfully leveraged Node and React to develop a robust and dynamic frontend, ensuring a smooth user experience across every page. With React Router, I implemented seamless navigation, allowing visitors to effortlessly explore our agency's offerings. To add a touch of enchantment, I employed Framer Motion to create fluid and delightful transitions, turning every interaction into an exquisite ballet of elegance. React Icons infused the website with visual charm, seamlessly integrating captivating icons that enhanced the overall user interface.",
    image: Koral,
    codeLink: "https://github.com/nrodriguez04/koraldigital",
    projectLink: "https://www.koraldigital.com/"
  },
  {
    title: "Minato Live Streaming Application",
    text: "Python | Vite+React",
    description: "In this ambitious project, my goal was to create a cutting-edge platform that goes beyond the ordinary, utilizing an adaptive streaming algorithm. Through this algorithm, we ensure that viewers experience the highest quality of live streaming content, regardless of their network conditions. With seamless transitions and optimal video quality, we guarantee an immersive and uninterrupted streaming experience. But this platform isn't just about technology; it's about fostering a vibrant community of creators and their dedicated audiences. Our user-friendly UI makes it effortless for creators to share their live streams, connect with their communities, and unleash their creativity to the world. Powered by Python, our backend system handles the intricacies of streaming, ensuring smooth video delivery, chat functionality, and real-time interactions. Vite+React provides a solid foundation for the frontend, empowering us to create an intuitive and visually captivating user interface that captures the essence of our platform's vision.",
    image: Minato,
    codeLink: "https://github.com/nrodriguez04/Minato",
    projectLink: "https://github.com/nrodriguez04/Minato"
  },
  {
    title: "Hugo (AI Virtual Assistant)",
    text: "Python | Vite+React",
    description: "Using cutting-edge speech recognition technology, Hugo listens attentively to your commands and queries, ensuring a seamless and intuitive interaction. Through advanced NLP capabilities, it comprehends your intent, breaking down complex sentences and understanding the nuances of your requests. Hugo's decision-making prowess equips it with the ability to analyze and interpret data, enabling it to provide informed recommendations and actionable insights. It effortlessly classifies and organizes information, extracting key details from vast repositories of knowledge to deliver concise and relevant answers. Trained on specialized data in finance, business, legal, and programming, Hugo becomes an invaluable asset, demystifying complex concepts and guiding you towards informed decisions. Its expertise spans multiple domains, empowering you to tackle a diverse range of challenges with confidence.",
    image: Minato,
    codeLink: "https://github.com/nrodriguez04/Hugo",
    projectLink: "https://github.com/nrodriguez04/Hugo"
  },
  {
    title: "Language Lasso (AI Language Translation)",
    text: "Machine Learning | Python | Vite+React",
    description: "Using cutting-edge speech recognition technology, Hugo listens attentively to your commands and queries, ensuring a seamless and intuitive interaction. Through advanced NLP capabilities, it comprehends your intent, breaking down complex sentences and understanding the nuances of your requests. Hugo's decision-making prowess equips it with the ability to analyze and interpret data, enabling it to provide informed recommendations and actionable insights. It effortlessly classifies and organizes information, extracting key details from vast repositories of knowledge to deliver concise and relevant answers. Trained on specialized data in finance, business, legal, and programming, Hugo becomes an invaluable asset, demystifying complex concepts and guiding you towards informed decisions. Its expertise spans multiple domains, empowering you to tackle a diverse range of challenges with confidence.",
    image: Minato,
    codeLink: "https://github.com/nrodriguez04/language-lasso",
    projectLink: "https://github.com/nrodriguez04/language-lasso"
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
    title: "Forbes EDA",
    text: "Machine Learning | Data Science",
    description: "Landing page application built using Vite, React, and Three.js. Attempted to test capabilities of Three.js in frontend application. Fairly simple version of application but could be scaled to showcase new car models within a larger application.",
    image: Mercedes,
    codeLink: "https://github.com/nrodriguez04/ForbesListEDA",
    projectLink: "https://www.kaggle.com/code/nickrod068/eda-forbes-billionaires-2022-qep-final-project"
  },
  {
    title: "Discover AI Group Project",
    text: "Machine Learning",
    description: "Supervised machine learning algorithm which displays visual analytics based on a provided data set. The main idea of the project was to generate a prediction of housing prices using a supervised learning algorithm and compare the algorithms prediction to the prediction provided in the dataset to calculate the difference using regression.",
    image: Discover,
    codeLink: "https://www.kaggle.com/code/nickrod068/ai4all-final-project",
    projectLink: "https://www.kaggle.com/code/nickrod068/ai4all-final-project"
  },
  {
    title: "Apply AI Group Project",
    text: "Machine Learning",
    description: "Supervised machine learning algorithm which displays visual analytics based on a provided data set. The main idea of the project was to generate a prediction of housing prices using a supervised learning algorithm and compare the algorithms prediction to the prediction provided in the dataset to calculate the difference using regression.",
    image: Discover,
    codeLink: "https://github.com/nrodriguez04/DiscoverAI_FinalProject",
    projectLink: "https://www.kaggle.com/code/nickrod068/ai4all-final-project-group-19"
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