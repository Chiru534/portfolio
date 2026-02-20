import React from 'react';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="section bg-light">
            <div className="container">
                <div className="section-title">
                    <h2>Skills & Technologies</h2>
                    <div className="underline"></div>
                    <p className="section-subtitle">The tools I'm continually learning and using.</p>
                </div>

                <div className="skills-container">
                    <div className="skill-category">
                        <div className="skill-category-header">
                            <i className="fas fa-code"></i>
                            <h3>Languages</h3>
                        </div>
                        <ul className="skill-list">
                            <li><span className="skill-name">Python</span></li>
                            <li><span className="skill-name">SQL</span></li>
                            <li><span className="skill-name">JavaScript (Basic)</span></li>
                        </ul>
                    </div>

                    <div className="skill-category">
                        <div className="skill-category-header">
                            <i className="fas fa-tools"></i>
                            <h3>Tools & Services</h3>
                        </div>
                        <ul className="skill-list">
                            <li><span className="skill-name">Docker</span></li>
                            <li><span className="skill-name">Vercel</span></li>
                            <li><span className="skill-name">Render</span></li>
                            <li><span className="skill-name">GitHub</span></li>
                        </ul>
                    </div>

                    <div className="skill-category">
                        <div className="skill-category-header">
                            <i className="fas fa-layer-group"></i>
                            <h3>Platforms</h3>
                        </div>
                        <ul className="skill-list">
                            <li><span className="skill-name">ServiceNow</span> <span className="badge">Certified</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
