import React from 'react'
import { motion } from 'framer-motion'

//Style import
import '../styles/Experience.css'

//Component imports
import ExCard from '../components/ExCard'

//Image imports
import Koral from '../assets/Logo_1.jpg'

//Experience API
const experience = [
  {
    title: "Koral Digital",
    position: "Freelance Developer",
    location: "Remote | Mckinney, TX",
    date: "01/2023-Present",
    image: Koral,
    jobDescription: "Multi-tasked across multiple functions and roles to generate project results and meet deadlines & requirements as Full Stack Developer for family-owned Digital Agency specializing in Shopify, custom web applications, mobile applications, UI|UX design, digital marketing, and business management.•	Managed development milestones from initial steps through final delivery.•	Provided remote support and communicated with clients using Microsoft Teams/Google Meet, Trello, and GitHub to develop business projects, web, and software applications.•	Used React and Angular frameworks paired with HTML5, CSS/SCSS to develop front-end applications, as well as Node.js and MongoDB for back-end application and database development.•	Conducted testing and review of website design for responsiveness, clarity, and effectiveness; adjusted design parameters to boost performance & incorporate new features.•	Identified, owned, investigated, and resolved issues, ensuring effective communication with clients by providing regular updates.",
  },
  {
    title: "Florida International University",
    position: "Student",
    location: "Miami, FL",
    date: "06/2022-Present",
    image: "https://www.ashoka.org/sites/default/files/fiu-logo.png",
    jobDescription: "•	Computer Science major with minor in Business. Gained experience in general studies as well as career focused studies in computer science. Gained knowledge in data structures, algorithms, and computer programming with Java & Python. Studied implementations, morality, and common use cases of Artificial Intelligence in society. Completed two micro-credentials in the basics of Artificial Intelligence and thinking and communicating with data. Member of Upsilon Pi Epsilon technology club. Summer of 22' Deans List Cum Laude student. ",
  },
  {
    title: "Apply AI",
    position: "Participant",
    location: "Remote | Florida International University",
    date: "01/2023-Present",
    image: "https://pbs.twimg.com/profile_images/1341146362075869189/rF-eRKGe_400x400.jpg",
    jobDescription: "•	Gained technical & project-based skills in coding & AI on topics including data sourcing, organizing, visualization, implementation, and evaluation. •	Worked closely with team members to conduct extensive research and investigate ethical implications related to data processing & AI implementation, recommending insightful actions.",
  },
  {
    title: "Discover AI",
    position: "Participant",
    location: "Remote | Florida International University",
    date: "08/2022-12/2022",
    image: "https://pbs.twimg.com/profile_images/1341146362075869189/rF-eRKGe_400x400.jpg",
    jobDescription: "•	Gained extensive knowledge of applications & fundamental technical concepts of AI including types of machine learning, gradient descent, and neural networks. •	Worked closely with team members to conduct extensive research and investigate ethical implications related to data processing & AI implementation, recommending insightful actions.",
  },
  {
    title: "Trinity Valley Community College",
    position: "Student",
    location: "Athens, TX",
    date: "01/2021-05/2022",
    image: "https://upload.wikimedia.org/wikipedia/en/2/24/Trinity_Valley_Community_College.jpg",
    jobDescription: "•	Gained knowledge in general studies as well as computer science focused courses. Gained understanding of data structures, algorithms, and solving practical problems in the C++ language. Graduated with an Associate of Arts in Computer Science.",
  },
  {
    title: "Thinkful Inc.",
    position: "Student",
    location: "Remote | Dallas, TX",
    date: "12/2018-11/2019",
    image: "https://mma.prnewswire.com/media/846549/Thinkful_Logo_Logo.jpg?p=twitter",
    jobDescription: "•	Improved web development abilities by completing multiple capstone projects in JavaScript using HTML, CSS, jQuery, AJAX, NodeJS, MongoDB, React, Redux, Mocha testing, and JavaScript Web Token Authentication.",
  },
]

const Experience = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 2 }}
    exit={{ opacity: 0 }}
    >
    <div className="ex__container">
      <div className="card__container">
        {experience.map(title => (
          <ExCard key={experience.title} {...title}/>
        ))}
      </div>
    </div>
    </motion.div>
  )
}

export default Experience