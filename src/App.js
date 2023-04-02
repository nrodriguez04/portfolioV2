import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Page imports
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

//Component imports
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
    <div className="page-container">
      <Navbar />
      <div className="router_container">
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/experience" element={ <Experience /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

