import React from 'react';

//Style import
import '../styles/ExCard.css'


const ExCard = (props) => {
  const {title, position, location, date, image, jobDescription} = props;

  return (
    <div style={{border: '1px solid #ccc', padding: '20px', margin: '20px 0'}} className="excard">
      <img src={image} alt="profile" className='ex__image'/>
      <h2>{title}</h2>
      <p>{position}</p>
      <p>{location}</p>
      <p>{date}</p>
      <p>{jobDescription}</p>
    </div>
  );
};

export default ExCard;
