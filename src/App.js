
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Your Name</h1>
        <p>Junior Developer | Web Enthusiast</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with a strong desire to build clean and useful web experiences.
          Currently working as a Junior Developer and leveling up daily.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript / React</li>
          <li>HTML / CSS / Tailwind</li>
          <li>Git & GitHub</li>
          <li>REST APIs</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li><a href="#">To-Do App</a> – a basic task manager with React hooks</li>
          <li><a href="#">Portfolio Website</a> – this CV site, built from scratch</li>
          <li><a href="#">Weather App</a> – fetches real-time weather using an API</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: youremail@example.com</p>
        <p>
          <a href="https://github.com/yourusername">GitHub</a> | <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
        </p>
      </section>
    </div>
  );
}

export default App;