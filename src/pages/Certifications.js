import React from 'react'

//Style import
import '../styles/Projects.css'

const Certifications = () => {
    // You can replace this with real data
    const certifications = [
      {
        id: 1,
        title: 'Certification 1',
        imageUrl: '/path/to/image1.jpg',
        description: 'Description 1',
      },
      {
        id: 2,
        title: 'Certification 2',
        imageUrl: '/path/to/image2.jpg',
        description: 'Description 2',
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
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Certifications;