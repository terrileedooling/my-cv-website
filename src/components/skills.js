import React from "react";

function Skills() {
    return (
        <section class="skills animate-bounce-scale">
        <h2>Skills</h2>
        <ul>
        {["JavaScript, PHP, Java, Python, C#", "React, Vue.js, .NET", "REST APIs, Database Design", "Git & GitHub"].map(
            (skill, idx) => (
                <li
                    key={idx}
                    className="bg-gray-100 p-2 rounded-md mb-2 transition-transform duration-200 hover:scale-105 hover:bg-blue-50"
                >
                    {skill}
                </li>
            )
        )}
        </ul>
      </section>
    );
}

export default Skills;