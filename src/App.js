import React from 'react';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Tabs from './components/tabs';
import './App.css';

function App() {
  
  return (
    <div class="app">
      <Hero />
      {/* <Header /> */}
      <About />
      <Skills />
      <Tabs />

      <section class="contact animate-bounce-scale">
        <h2>Contact</h2>
        <p>Email: terrileedooling@gmail.com</p>
        <p>
          <a href="https://github.com/terrileedooling">GitHub</a> | <a href="https://linkedin.com/in/comingsoon">LinkedIn</a>
        </p>
      </section>

      <section class="contact-form animate-bounce-scale">
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your message..." required />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;