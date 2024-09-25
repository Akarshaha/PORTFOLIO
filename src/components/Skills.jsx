import React from 'react';
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaJsSquare } from 'react-icons/fa';
import { SiJavascript, SiMysql } from 'react-icons/si';
import './Skills.css'; // Importing the CSS for custom styling

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <FaJava className="skill-icon" />
            <p>Java</p>
          </div>
          <div className="skill-item">
            <FaJsSquare className="skill-icon" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <FaHtml5 className="skill-icon" />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="skill-icon" />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <FaBootstrap className="skill-icon" />
            <p>Bootstrap</p>
          </div>
          <div className="skill-item">
            <FaReact className="skill-icon" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <SiMysql className="skill-icon" />
            <p>MySQL</p>
          </div>
          <div className="skill-item">
            <FaGitAlt className="skill-icon" />
            <p>Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
