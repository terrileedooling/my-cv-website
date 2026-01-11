import React from "react";
import { 
  FaBrain, 
  FaJs, 
  FaPhp, 
  FaJava, 
  FaPython, 
  FaReact, 
  FaVuejs, 
  FaGitAlt, 
  FaCode,
  FaServer,
  FaDatabase,
  FaToolbox 
} from "react-icons/fa";
import { 
  SiDotnet, 
  SiPostman, 
  SiMysql, 
  SiGithub,
  SiTailwindcss,
  SiFirebase,
  SiVite 
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="category-icon" />,
      skills: [
        { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
        { name: "Java", icon: <FaJava />, color: "#007396" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "C#", icon: <SiDotnet />, color: "#239120" },
      ],
    },
    {
      title: "Frontend & Frameworks",
      icon: <FaReact className="category-icon" />,
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Vue.js", icon: <FaVuejs />, color: "#42B883" },
        { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Vite", icon: <SiVite />, color: "#646CFF" },
      ],
    },
    {
      title: "Backend & Databases",
      icon: <FaServer className="category-icon" />,
      skills: [
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "REST APIs", icon: <FaCode />, color: "#FF6B6B" },
        { name: "Firestore", icon: <SiFirebase />, color: "#FFA000" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <FaToolbox className="category-icon" />,
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "GitHub", icon: <SiGithub />, color: "#181717" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Vite", icon: <SiVite />, color: "#646CFF" },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <div className="card">
        <h2><FaBrain className="icon" /> Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="skill-item"
                    style={{ '--skill-color': skill.color }}
                  >
                    <div 
                      className="skill-icon-wrapper"
                      style={{ backgroundColor: `${skill.color}15` }} /* 15 = 0.09 opacity */
                    >
                      {React.cloneElement(skill.icon, { 
                        style: { color: skill.color } 
                      })}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <p>
            Continuously expanding my expertise across the full stack, with a strong focus on 
            creating scalable, maintainable solutions using modern technologies and best practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;