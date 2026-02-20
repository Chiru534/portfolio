import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="greeting">Hi, I'm</p>
                    <h1 className="name">Chiranjeevi</h1>
                    <h2 className="title">CS Student & Full Stack Intern</h2>
                    <p className="subtitle">Exploring scalable applications, AI-driven solutions, and the art of continuous learning.</p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Get in Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
