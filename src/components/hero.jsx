import React from "react";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Terri-Lee Dooling</h1>
        <p className="hero-subtitle">
          Mid-Level Web Developer · Full-Stack · Passionate about Clean Code & Modern Solutions
        </p>
        <a href="#about" className="hero-cta">
          Explore My Work <FaArrowDown style={{ marginLeft: '10px' }} />
        </a>
      </div>
    </section>
  );
}

export default Hero;