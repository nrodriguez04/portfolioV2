import React from 'react'

//Style import
import '../styles/Certifications.css'

// Image imports
import Thinking from '../assets/thinking-and-communicating-with-data.png'
import AI from '../assets/artificial-intelligence-how-it-works-and-its-impact.png'


const Certifications = () => {
    // You can replace this with real data
    const certifications = [
      {
        id: 1,
        title: 'Thinking and Communicating with Data',
        imageUrl: Thinking,
        description: 'Offered by FIU to all learners, this badge recognizes foundational data literacy and data communication skills. Earners develop critical data science competencies including the basics of summarizing data, visualizing and interpreting data; data exploration, associations, and causation; identifying potential ethics, privacy, security issues with data; and communicating with data.',
        link: 'https://www.credly.com/badges/ad1ab716-ec2d-4e64-8d81-e5c9019efade/public_url',
      },
      {
        id: 2,
        title: 'Artificial Intelligence: How it Works and its Impact',
        imageUrl: AI,
        description: 'Offered by FIU to all learners, this badge introduces foundational AI concepts, such as history of the field, key functionalities, how AI is applied, and the potential impact of AI in several sectors.',
        link: 'https://www.credly.com/badges/faf91a18-7486-4d40-964a-88cf558467bc/public_url',
      },
      // more certificates...
    ];
  
    return (
      <div className="certifications">
        {certifications.map(certification => (
          <div key={certification.id} className="card">
            <img src={certification.imageUrl} alt={certification.title} className="card-img" />
            <div className="card-body">
              <h5 className="card-title">{certification.title}</h5>
              <p className="card-text">{certification.description}</p>
              <button className="button button-card" onClick={() => window.open(certification.link, "_blank")}>View Certificate</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Certifications;