import React, { useState } from "react";
import { FaBriefcase, FaCode, FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";

function Tabs() {
    const [activeTab, setActiveTab] = useState('projects');
    
    const projects = [
        { 
            name: "Sales Tracker Web Application", 
            desc: "A full-stack sales tracking web application built with React, Firebase Authentication, and Firestore. The system is designed for small businesses to manage products, sales and suppliers while providing real-time insights through a dashboard.\n\nThe application includes secure user authentication, full CRUD functionality, dynamic sales processing with stock management, and real-time data synchronization using Firebase.",
            credentials: "Demo: test@example.com / password123",
            url: "https://sales-tracker-3dc35.web.app/" 
        },
        {
            name: "E-commerce Website",
            desc: "A full-stack e-commerce web application built for a local business selling hair, beauty, and wellness products. The platform includes an admin login with product management capabilities and is currently in a late stage of development, running in a sandbox environment.",
            credentials: null,
            url: "https://terrileedooling.github.io/beleza-website/"
        },
        { 
            name: "Sales Calculator", 
            desc: "A basic sales calculator for tracking payments throughout the day which inspired the sales tracker web application.", 
            credentials: null,
            url: "https://terrileedooling.github.io/salon-sales-tracking/"
        },
        { 
            name: "Portfolio Website", 
            desc: "This CV website - a responsive portfolio showcasing my skills, projects, and experience with modern React and CSS.", 
            credentials: null,
            url: "https://terrileedooling.github.io/my-cv-website/" 
        }
    ];

    const education = [
        { 
            name: "UCT BSc in Computer Science with co-major in Business Computing", 
            period: "2020-2024",
            desc: "Partially Complete - Focused on software engineering principles, algorithms, data structures, and business applications of computing technology." 
        },
        { 
            name: "Matric Certificate", 
            period: "2019",
            desc: "Fish Hoek High School - Graduated with distinction in Mathematics and Computer Applications Technology." 
        }
    ];

    const experience = [
        { 
            name: "Intermediate Developer", 
            company: "FutureRent",
            period: "2024 - Present",
            desc: "In my current role as a Intermediate Web Developer, I work across the full development lifecycle, from scoping and planning tasks and projects to implementing and maintaining backend and frontend solutions. My primary focus is backend development, where I design and build robust API endpoints with full CRUD functionality, manage database structures and business logic, and ensure system reliability, performance, and scalability. I also contribute to frontend development when required, integrating with third-party and internal APIs to deliver a seamless and intuitive user experience. My responsibilities include drafting technical proposals, designing system and process diagrams, providing general IT support, and reviewing and supporting teammates' work. I regularly take ownership of projects, collaborate with cross-functional teams to deliver solutions, and work independently to implement high-quality, production-ready features in a fast-paced environment." 
        }
    ];

    const renderTabContent = () => {
        return (
            <div className="tab-content fade-in">
                {activeTab === 'projects' && (
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div 
                                key={project.name} 
                                className="project-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="project-header">
                                    <h3>{project.name}</h3>
                                    <a 
                                        href={project.url} 
                                        className="project-link"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <FaExternalLinkAlt /> Visit Project
                                    </a>
                                </div>
                                <p className="project-description">{project.desc}</p>
                                {project.credentials && (
                                    <div className="project-credentials">
                                        <strong>Demo Access:</strong> {project.credentials}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'education' && (
                    <div className="education-list">
                        {education.map((item, index) => (
                            <div 
                                key={item.name} 
                                className="education-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="education-header">
                                    <h3>{item.name}</h3>
                                    <span className="education-period">{item.period}</span>
                                </div>
                                <p className="education-description">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'experience' && (
                    <div className="experience-list">
                        {experience.map((item, index) => (
                            <div 
                                key={item.name} 
                                className="experience-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="experience-header">
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p className="experience-company">{item.company}</p>
                                    </div>
                                    <span className="experience-period">{item.period}</span>
                                </div>
                                <p className="experience-description">{item.desc}</p>
                                <div className="experience-skills">
                                    <span>Backend Development</span>
                                    <span>API Design</span>
                                    <span>Full-Stack</span>
                                    <span>System Architecture</span>
                                    <span>Team Collaboration</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <section id="tabs" className="tab-section">
            <div className="card">
                <h2>
                    {activeTab === 'projects' && <FaCode className="icon" />}
                    {activeTab === 'education' && <FaGraduationCap className="icon" />}
                    {activeTab === 'experience' && <FaBriefcase className="icon" />}
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h2>
                
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
                
                {renderTabContent()}
            </div>
        </section>
    );
}

export default Tabs;