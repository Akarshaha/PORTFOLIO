import React from 'react';
import { Carousel } from 'react-bootstrap';
import './About.css'; // Importing CSS for custom styles

const About = () => {
  return (
    <section className="about-section">
      <div className="carousel-container">
        <Carousel>
          {/* First Slide with Graduation Icon and Details */}
          <Carousel.Item className="carousel-slide graduation-slide">
            <div className="carousel-content">
              <i className="fas fa-graduation-cap graduation-icon"></i> {/* Graduation Icon */}
              <h3>Graduated</h3>
              <p>Electronics and Communication Engineering </p>
              <p>CMR UNIVERSITY</p>
              <p>7.91 CGPA</p>
            </div>
          </Carousel.Item>

          {/* Second Slide with "Open to Work" Message */}
          <Carousel.Item className="carousel-slide work-slide">
            <div className="carousel-content">
            <i className="fa fa-briefcase" aria-hidden="true"></i>
              <p>Seeking opportunities in software development</p>
              <p>Available for full-time roles and internships</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default About;
