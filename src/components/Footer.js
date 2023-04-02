import React from 'react'

//Style import
import '../styles/Footer.css'

//Icon imports
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
        <p>Copyright &copy; {currentYear} Nicolas Rodriguez</p>
        <div className="social__icons">
            <ul>
            <li>
              <a href="https://github.com/nrodriguez04" target="_blank" rel="noopener noreferrer">
                <BsGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nicolasmrodriguez/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nicofrm99/" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/nicofrm99" target="_blank" rel="noopener noreferrer">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="mailto:nicolasmrodriguez3@gmail.com" target="_blank" rel="noopener noreferrer">
                <GrMail />
              </a>
            </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer