import React from 'react';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Tabs from './components/tabs';
import ContactForm from './components/contact';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function App() {
  return (
    <div className="app">
      <Hero />
      
      <div className="container">
        <About />
        <Skills />
        <Tabs />
        
        <section className="contact-info-section">
          <div className="contact-info-card">
            <h2 className="contact-title">
              <FaPhone className="contact-icon" /> Get In Touch
            </h2>
            <div className="contact-details">
              <a href="mailto:terrileedooling@gmail.com" className="contact-item">
                <FaEnvelope className="icon" />
                <span>terrileedooling@gmail.com</span>
              </a>
              <div className="social-links">
                <a href="https://github.com/terrileedooling" className="social-link">
                  <FaGithub className="icon" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/terri-lee-d-0b6700236/" className="social-link">
                  <FaLinkedin className="icon" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <ContactForm />
      </div>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} Terri-Lee Dooling. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;