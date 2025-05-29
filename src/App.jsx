import React from 'react';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Tabs from './components/tabs';
import './App.css';
import { FaLink, FaPhone, FaEnvelope } from "react-icons/fa"

function App() {
  
  return (
    <div className="app">
      <Hero />
      <About />
      <Skills />
      <Tabs />

      <section className="contact animate-bounce-scale">
        <h2> < FaPhone /> Contact</h2>
        <p>Email: terrileedooling@gmail.com</p>
        <p>
          <a href="https://github.com/terrileedooling">GitHub</a> | <a href="https://www.linkedin.com/in/terri-lee-d-0b6700236/">LinkedIn</a>
        </p>
      </section>

      {/* <section className="contact-form animate-bounce-scale">
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your message..." required />
          <button type="submit">Send</button>
        </form>
      </section> */}
    </div>
  );
}

export default App;