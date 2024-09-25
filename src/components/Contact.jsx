import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_tv5hnhe', 'template_dnu4mml', e.target, 'nVw7Qrzpb7AC6zoWy')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message. Please try again.');
      });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
      <h2 >
         Contact Me  
      <i className="fa fa-phone-square" aria-hidden="true"></i>
      
      </h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">  Name:  </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/akarsha-h-a-586aa01a0/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/Akarshaha" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.instagram.com/Akarsha_gowda" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>


        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="contact-icon" />
            <p>Email: akarshagowda2017@gmail.com</p>
          </div>
          <div className="info-item">
            <FaPhone className="contact-icon" />
            <p>Phone: +91 9606584307</p>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Contact;
