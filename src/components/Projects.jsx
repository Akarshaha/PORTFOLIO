import React from 'react';
import { Carousel } from 'react-bootstrap'; // Assuming you're using React Bootstrap for carousel
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css'; // Make sure to create this CSS file for custom styles
import img from './Images/pexels-padrinan-1591056.jpg'
import img2 from './Images/rfid-access-control-card.jpg'

const Project = () => {
    return (
        <div className="project-component">
            <Carousel className="full-page-carousel">
                <Carousel.Item>
                    <div className="project-slide">
                        <img 
                            className="project-image" 
                            src={img} // Update this path
                            alt="My Blog Project"
                        />
                        <div className="project-description">
                            <h1 style={{color:'blue'}}>My Blog  [_
                            <a 
                                href="https://my-page-lac.vercel.app/" // Update this link
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-link"
                                style={{color:'red'}}
                            >      link </a>
                            _]</h1>
                            
                            <p style={{fontSize:'2em'}}>My Blog is a dynamic application where users can sign up, log in, and upload news or incidents.</p> 
                            <p style={{fontSize:'1.5em', color:'white'}}>This is a react application. Built with Appwrite for backend services, it features authentication for creating, logging in, and logging out. The app uses TinyMCE for content creation, React Hook Form, Redux Toolkit for state management, React Router, Tailwind CSS for styling, HTML React Parser, and is deployed on Vercel.</p>                      
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    
                        {/* Empty slide */}
                        <div className="project-slide">
                        <img 
                            className="project-image" 
                            src={img2} // Update this path
                            alt="My Blog Project"
                        />
                        <div className="project-description">
                            <h1 style={{color:'blue'}}>RFID-Based Door Authentication System Using Java - IOT-Based Project </h1>
                            
                            <p style={{fontSize:'2em'}}>This project works on radio frequency identification(RFID) and fingerprint sensors, These both help in detecting unauthorized access to the premises.</p> 
                            <p style={{fontSize:'1.5em', color:'white'}}>	Developed an automated access control system using RFID card technology with GSM Module And Integrated the Hardware Components (GSM Module and RFID Tags) and Software Development using  C++ .
.</p>                      
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Project;
