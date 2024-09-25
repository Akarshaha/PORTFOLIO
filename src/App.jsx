import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css'; // Main CSS file

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const enableDarkMode = () => {
    setDarkMode(true);
  };

  const enableLightMode = () => {
    setDarkMode(false);
  };

  return (
    <Router>
      <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
        <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg">
          <Navbar.Brand as={Link} to="/">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Light and Dark Mode Toggle Buttons */}
          <div className="mode-toggle">
            {!darkMode && (
              <button onClick={enableDarkMode} className="dark-mode-button">
                🌜 Dark Mode
              </button>
            )}
            {darkMode && (
              <button onClick={enableLightMode} className="light-mode-button">
                🌞 Light Mode
              </button>
            )}
          </div>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
