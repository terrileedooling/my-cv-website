import React, { useState } from "react";
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";

function Tabs() {
    const [activeTab, setActiveTab] = useState('projects');
    const renderTabContent = () =>{
        return (
            <div 
                key={activeTab}
                className="tab-content transition-all duration-500 ease-in-out animate-fade-in"
            >
                {activeTab === 'projects' && (
                    <ul>
                        {[
                          { name: "Sales Tracker", desc: "A basic sales calculator for tracking payments throughout the day. ", url:"https://terrileedooling.github.io/salon-sales-tracking/"},
                          // { name: "To-Do App", desc: "a basic task manager with React hooks" },
                          { name: "Portfolio Website", desc: "This CV website", url:"https://terrileedooling.github.io/my-cv-website/" },
                          // { name: "Weather App", desc: "fetches real-time weather using an API" }
                        ].map((proj, index) => (
                          <li
                            key={proj.name}
                            className="tab-item"
                            style={{ animationDelay: `${index * 0.5}s` }}
                          >
                            <a href={proj.url} className="text-blue-600 font-medium hover:underline">
                              {proj.name}
                            </a>{" "}
                            – {proj.desc}
                          </li>
                        ))}
                    </ul>
                )}

                {activeTab === 'education' && (
                    
                    <ul>
                    {[
                      { name: "UCT BSc in Computer Science with co-major in Business Computing", desc: "2020-2024" },
                      { name: "Matric Certificate", desc: "Fish Hoek 2019" },
                    ].map((edu, index) => (
                      <li
                        key={edu.name}
                        className="tab-item"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      >
                        <a href="#education" className="text-blue-600 font-medium hover:underline">
                          {edu.name}
                        </a>{" "}
                        – {edu.desc}
                      </li>
                    ))}
                    </ul>
                )}

                {activeTab === 'experience' && (
                    <ul>
                    {[
                      { name: "Present Junior Web Developer", desc: "2024 - Present" },
                    ].map((exp, index) => (
                      <li
                        key={exp.name}
                        className="tab-item"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      >
                        <a href="#experience" className="text-blue-600 font-medium hover:underline">
                          {exp.name}
                        </a>{" "}
                        – {exp.desc}
                      </li>
                    ))}
                    </ul>
                )}
            </div>
        );
    };

    return (
        <section id="tabs" className="tab-section">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === "projects" ? "active" : ""}`}
              onClick={() => setActiveTab("projects")}
            >
              <FaCode /> 
              Projects
            </button>
            <button
              className={`tab-button ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              <FaGraduationCap /> 
              Education
            </button>
            <button
              className={`tab-button ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              <FaBriefcase /> 
              Experience
            </button>
          </div>
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          {renderTabContent()}
        </section>
      );
}

export default Tabs;
