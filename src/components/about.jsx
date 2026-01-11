import React from "react";
import { FaUser } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section fade-in">
      <div className="card">
        <h2><FaUser className="icon" /> About Me</h2>
        <div className="about-content">
          <p>
            Passionate developer with a strong focus on clean, maintainable code 
            and exceptional web experiences. Currently working as an Intermediate Developer, 
            I continuously push boundaries to build better, smarter solutions that 
            solve real-world problems.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            With expertise across the full development lifecycle, I specialize in 
            creating robust backend systems and intuitive frontend interfaces, 
            always striving for excellence in performance, scalability, and user experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;