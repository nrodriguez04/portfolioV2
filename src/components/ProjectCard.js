import React, { useState } from 'react';

//Style import
import '../styles/ProjectCard.css'

const ProjectCard = (props) => {
  const { title, text, description, image, codeLink, projectLink } = props;
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
      className="project__card"
    >
      <img src={image} alt="project" style={{ width: "100%", height: "100%" }} />
      {showOverlay && (
        <div className="overlay">
          <h3 style={{ marginBottom: "10px" }}>{title}</h3>
          <p style={{ marginBottom: "10px" }}>{text}</p>
          <p style={{ marginBottom: "10px" }}>{description}</p>
          <div style={{ display: "flex" }}>
            <a href={codeLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: "10px" }} className="project__button">
              Code
            </a>
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project__button">
              Live
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
