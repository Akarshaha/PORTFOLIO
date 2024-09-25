import React, { useEffect, useState } from 'react';
import './Home.css'; // You'll create this for animations

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay of 500ms before showing the name
  }, []);

  return (
    <section className="home-section">
      <div className={`name-container ${isVisible ? 'fade-in' : ''}`}>
        <h1>Hi I'm Akarsha H A</h1>
        <p>A passionate Java full-stack developer with a knack of crafting robust and user-friendly applications.</p>
      </div>
    </section>
  );
};

export default Home;
