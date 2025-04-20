import React, { use, useState } from 'react';
import Header from './components/header';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('projects');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'projects':
        return (
          <ul>
            <li><a href="#">To-Do App</a> – a basic task manager with React hooks</li>
            <li><a href="#">Portfolio Website</a> – this CV site, built from scratch</li>
            <li><a href="#">Weather App</a> – fetches real-time weather using an API</li>
          </ul>
        );
      case 'education':
        return (
          <ul>
            <li><a href="#">2020-2024 UCT BSc in Computer Science with co-major in Business Computing</a></li>
            <li><a href="#">2019 Matric Certificate</a></li>
          </ul>
        );
      case 'experience':
        return (
          <ul>
            <li><a href="#">2024 - Present Junior Web Developer</a></li>
          </ul>
        );
      default:
        return null;
    }
  };
  return (
    <div class="app">
      <Header />

      <section class="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with a strong desire to build clean and useful web experiences.
          Currently working as a Junior Developer and leveling up daily.
        </p>
      </section>

      <section class="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript, PHP, Java, Python, C#</li>
          <li>React, Vue.js, .NET</li>
          <li>REST APIs, Database Design</li>
          <li>Git & GitHub</li>
          <li>REST APIs</li>
        </ul>
      </section>

      <section class="tab-section">
        <div class="tab-buttons">
          <button class={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>Projects</button>
          <button class={activeTab === 'education' ? 'active' : ''} onClick={() => setActiveTab('education')}>Education</button>
          <button class={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>Experience</button>
        </div>
        <div class="tab-content">
          {renderTabContent()}
        </div>
      </section>




      <section class="contact">
        <h2>Contact</h2>
        <p>Email: terrileedooling@gmail.com</p>
        <p>
          <a href="https://github.com/terrileedooling">GitHub</a> | <a href="https://linkedin.com/in/comingsoon">LinkedIn</a>
        </p>
      </section>

      <section class="contact-form">
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