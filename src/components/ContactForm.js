import React, { useState } from 'react';

//Style import 
import '../styles/ContactForm.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/contact', { // update the URL to the endpoint on the server
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message); // show the message returned from the server
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="background">
    <div className="container">
      <div className="screen">
        <div className="screen-header">
          <div className="screen-header-left">
            <div className="screen-header-button close"></div>
            <div className="screen-header-button maximize"></div>
            <div className="screen-header-button minimize"></div>
          </div>
          <div className="screen-header-right">
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
          </div>
        </div>
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>CONTACT</span>
              <span>ME</span>
            </div>
            <div className="app-contact">
              <p>Nicolas Rodriguez</p>
              <p>nicolasmrodriguez3@gmail.com</p>
              <p>+1 972 469 5269</p>
            </div>
          </div>
          <div className="screen-body-item">
            <div className="app-form">
              <div className="app-form-group">
                <input className="app-form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name"/>
              </div>
              <div className="app-form-group">
                <input className="app-form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
              </div>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="CONTACT #" />
              </div>
              <div className="app-form-group message">
                <input className="app-form-control" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="message"/>
              </div>
              <form onSubmit={handleSubmit}>
              <div className="app-form-group buttons">
                <button type="submit" className="app-form-button">CANCEL</button>
                <button type="submit" className="app-form-button">SEND</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default ContactForm;
