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
                    <li><a href="#">To-Do App</a> – a basic task manager with React hooks</li>
                    <li><a href="#">Portfolio Website</a> – this CV site, built from scratch</li>
                    <li><a href="#">Weather App</a> – fetches real-time weather using an API</li>
                  </ul>
                )}

                {activeTab === 'education' && (
                  <ul>
                    <li>2022 – Software Development Diploma – ABC College</li>
                    <li>2020 – Matric Certificate – XYZ High School</li>
                    <li><a href="#">2020-2024 UCT BSc in Computer Science with co-major in Business Computing</a></li>
                    <li><a href="#">2019 Matric Certificate</a></li>
                  </ul>
                )}

                {activeTab === 'experience' && (
                  <ul>
                    <li><a href="#">2024 - Present Junior Web Developer</a></li>
                    <li>2025 – Present: Junior Developer at Great Company</li>
                    <li>2024 – Internship at Coding Bootcamp</li>
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
                activeTab === "Experience"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:scale-105"
                }`}
                onClick={() => setActiveTab("Experience")}
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
