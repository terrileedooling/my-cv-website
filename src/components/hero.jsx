import React from "react";
import profilePhoto from "../assets/profile-photo.png";

const Hero = () => {
    return (
        <>
            <style>{`
                .hero-section {
                    max-width: 100%;
                    background: linear-gradient(to bottom right, #fdfbfb, #ebedee);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 50vh;
                }

                .hero-content {
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                    flex-wrap: wrap;
                    max-width: 1000px;
                    animation: slideFadeIn 1s ease-in-out forwards;
                }

                .hero-text {
                    flex: 1;
                    min-width: 280px;
                }

                .hero-text h1 {
                    font-size: 3rem;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 1rem;
                    animation: fadeIn 1.2s ease forwards;
                }

                .tagline {
                    font-size: 1.3rem;
                    color: #555;
                    line-height: 1.6;
                    animation: fadeIn 1.4s ease forwards;
                }

                .hero-image {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .hero-image img {
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    object-fit: cover;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                    transition: transform 0.3s ease;
                }

                .hero-image img:hover {
                    transform: scale(1.05);
                }

                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideFadeIn {
                    0% {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @media (max-width: 768px) {
                    .hero-content {
                        flex-direction: column-reverse;
                        text-align: center;
                        gap: 2rem;
                    }

                    .hero-text h1 {
                        font-size: 2.4rem;
                    }

                    .tagline {
                        font-size: 1.1rem;
                    }

                    .hero-image img {
                        width: 200px;
                        height: 200px;
                    }
                }
            `}</style>

            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                    <h1>Hi, I'm Terri-Lee Dooling</h1>
                        <p className="tagline">
                            Junior Dev with Senior Dreams and Infinite Tabs Open.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={profilePhoto} alt="Terri-Lee Dooling" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;