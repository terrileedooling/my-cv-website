import React from "react";
// import  "../profile-photo.jpeg";
// import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content animate-fade-in">
                <div className="hero-text">
                    <h1>Hi, I'm Terri-Lee Dooling</h1>
                    <p className="tagline">
                        Junior Dev with Senior Dreams and Infinite Tabs Open.
                    </p>
                </div>
                <div className="hero-image">
                    <img src="/profile-photo.jpeg" alt="Terri-Lee Dooling" />
                </div>
            </div>
        </section>
    );
};

export default Hero;