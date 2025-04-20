import React, { useState } from "react";

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
                          { name: "To-Do App", desc: "a basic task manager with React hooks" },
                          { name: "Portfolio Website", desc: "this CV site, built from scratch" },
                          { name: "Weather App", desc: "fetches real-time weather using an API" }
                        ].map((proj, index) => (
                          <li
                            key={proj.name}
                            className="tab-item"
                            style={{ animationDelay: `${index * 0.5}s` }}
                          >
                            <a href="#" className="text-blue-600 font-medium hover:underline">
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
                      { name: "Weather App", desc: "fetches real-time weather using an API" }
                    ].map((edu, index) => (
                      <li
                        key={edu.name}
                        className="tab-item"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      >
                        <a href="#" className="text-blue-600 font-medium hover:underline">
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
                      { name: "Matric Certificate", desc: "Fish Hoek 2019" },
                      { name: "Weather App", desc: "fetches real-time weather using an API" }
                    ].map((exp, index) => (
                      <li
                        key={exp.name}
                        className="tab-item"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      >
                        <a href="#" className="text-blue-600 font-medium hover:underline">
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
        <section className="tab-section">
          <div className="tab-buttons">
            <button
                className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                activeTab === "projects"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:scale-105"
                }`}
                onClick={() => setActiveTab("projects")}
            >
                Projects
            </button>
            <button
                className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                activeTab === "education"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:scale-105"
                }`}
                onClick={() => setActiveTab("education")}
            >
                Education
            </button>
            <button
                className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                activeTab === "experience"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:scale-105"
                }`}
                onClick={() => setActiveTab("experience")}
            >
                Experience
            </button>
          </div>
            <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            {renderTabContent()}
        </section>
      );
}

export default Tabs;
