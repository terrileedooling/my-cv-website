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
                          { name: "Sales Tracker Web Application", desc: "\n\n A full-stack sales tracking web application built with React, Firebase Authentication, and Firestore. The system is designed for small businesses to manage products, sales and suppliers while providing real-time insights through a dashboard.\n\nThe application includes secure user authentication, full CRUD functionality, dynamic sales processing with stock management, and real-time data synchronization using Firebase.\n\nAccess Options:\nUsers can either create their own account or log in using the demo credentials below to explore the app immediately:\n \nEmail: test@example.com\nPassword: password123\n"
                            , url:"https://sales-tracker-3dc35.web.app/"},
                          {
                            name: "E-commerce Website",
                            desc: "\n\nA full-stack e-commerce web application built for a local business selling hair, beauty, and wellness products. The platform includes an admin login with product management capabilities and is currently in a late stage of development, running in a sandbox environment. This deployment is temporary and intended for testing prior to final production hosting.",
                            url: "https://terrileedooling.github.io/beleza-website/"
                          },
                          { name: "Sales Calculator", desc: "\n\n A basic sales calculator for tracking payments throughout the day which inspired the sales tracker web application. ", 
                            url:"https://terrileedooling.github.io/salon-sales-tracking/"
                          },
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
                            : {proj.desc}
                          </li>
                        ))}
                    </ul>
                )}

                {activeTab === 'education' && (
                    
                    <ul>
                    {[
                      { name: "UCT BSc in Computer Science with co-major in Business Computing", desc: "2020-2024 (Partially Complete)" },
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
                      { name: "FutureRent - Mid Web Developer (2024 - Present)", desc: "\n\n In my current role as a Mid Developer, I work across the full development lifecycle, from scoping and planning tasks and projects to implementing and maintaining backend and frontend solutions. My primary focus is backend development, where I design and build robust API endpoints with full CRUD functionality, manage database structures and business logic, and ensure system reliability, performance, and scalability. I also contribute to frontend development when required, integrating with third-party and internal APIs to deliver a seamless and intuitive user experience. My responsibilities include drafting technical proposals, designing system and process diagrams, providing general IT support, and reviewing and supporting teammates’ work. I regularly take ownership of projects, collaborate with cross-functional teams to deliver solutions, and work independently to implement high-quality, production-ready features in a fast-paced environment. This role has strengthened my technical expertise, problem-solving abilities, and capacity to manage multiple responsibilities while maintaining attention to detail."
                      },
                    ].map((exp, index) => (
                      <li
                        key={exp.name}
                        className="tab-item"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      >
                        <a href="#experience" className="text-blue-600 font-medium hover:underline">
                          {exp.name}
                        </a>{" "}
                        : {exp.desc}
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
