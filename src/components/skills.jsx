import React from "react";
import { FaBrain, FaJs, FaPhp, FaJava, FaPython, FaReact, FaVuejs, FaGitAlt, FaCode } from "react-icons/fa";
import { SiDotnet, SiPostman, SiMysql, SiGithub } from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
        title: "Languages",
        skills: [
          { name: "PHP", icon: <FaPhp className="php-icon" /> },
          { name: "Java", icon: <FaJava className="java-icon" /> },
          { name: "JavaScript", icon: <FaJs className="js-icon" /> },
          { name: "Python", icon: <FaPython className="python-icon" /> },
          { name: "C#", icon: <FaCode className="csharp-icon" /> },
        ],
      },
      {
        title: "Frameworks & Libraries",
        skills: [
          { name: "React", icon: <FaReact className="react-icon" /> },
          { name: "Vue.js", icon: <FaVuejs className="vue-icon" /> },
          { name: ".NET", icon: <SiDotnet className="dotnet-icon" /> },
        ],
      },
      {
        title: "Tools & Platforms",
        skills: [
          { name: "Git", icon: <FaGitAlt className="git-icon" /> },
          { name: "GitHub", icon: <SiGithub className="github-icon" /> },
          { name: "Postman", icon: <SiPostman className="postman-icon" /> },
          { name: "MySQL", icon: <SiMysql className="mysql-icon" /> },
        ],
      },
    ];

  return (
    <section className="skills">
      <h2> < FaBrain /> Skills</h2>
      {skillCategories.map((category, idx) => (
        <div key={idx} className="skill-category">
          <h3>{category.title}</h3>
          <ul className="skills-list">
            {category.skills.map((skill, i) => (
              <li key={i} className="skill-item">
                <span className="skill-icon">{skill.icon}</span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;