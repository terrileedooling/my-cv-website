import React from "react";
import { FaArrowDown } from "react-icons/fa";
import profilePhoto from "../assets/profile-photo.png";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Hi, I'm <span className="highlight-name">Terri-Lee Dooling</span>
                        </h1>
                        <p className="hero-subtitle">
                            Intermediate Developer · Full-Stack · Passionate about Clean Code & Modern Solutions
                        </p>
                        <p className="hero-tagline">
                            Intermediate developer with Senior Dreams and Infinite Tabs Open.
                        </p>
                        <a href="#about" className="hero-cta">
                            Explore My Work <FaArrowDown className="cta-icon" />
                        </a>
                    </div>
                    
                    <div className="hero-image">
                        <div className="image-wrapper">
                            <img 
                                src={profilePhoto} 
                                alt="Terri-Lee Dooling" 
                                className="profile-photo"
                            />
                            <div className="image-decoration"></div>
                        </div>
                    </div>
                </div>
                
                <div className="hero-scroll-indicator">
                    <a href="#about" className="scroll-down">
                        <span>Scroll down</span>
                        <FaArrowDown className="scroll-icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;