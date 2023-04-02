import React from 'react'
import { motion } from 'framer-motion'

//Style import
import '../styles/Contact.css'

//Component imports
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 2 }}
    exit={{ opacity: 0 }}
    >
    <div className="contact__container">
      <ContactForm />
    </div>
    </motion.div>
  )
}

export default Contact