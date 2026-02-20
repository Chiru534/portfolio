import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="section bg-light">
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                    <div className="underline"></div>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a final-year B.Tech Computer Science student at JNTU Kakinada, driven by a curiosity to solve real-world problems through code. Currently, I'm expanding my practical knowledge as a Full Stack Development Intern at Smartbridge, Hyderabad.
                        </p>
                        <p>
                            My learning journey involves hands-on exploration of diverse technologies over claiming absolute mastery. I enjoy building things, from dockerized backends to creative side projects like an AI-powered recipe blog.
                        </p>
                        <p>
                            Beyond traditional software development, I am a Certified ServiceNow professional, with a growing interest and knowledge in IT service management and workflow automation. I'm always eager to learn better ways to build reliable and scalable applications.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-box">
                            <i className="fas fa-graduation-cap"></i>
                            <h3>Final Year</h3>
                            <p>B.Tech CS</p>
                        </div>
                        <div className="stat-box">
                            <i className="fas fa-laptop-code"></i>
                            <h3>Intern</h3>
                            <p>Smartbridge</p>
                        </div>
                        <div className="stat-box">
                            <i className="fas fa-certificate"></i>
                            <h3>Certified</h3>
                            <p>ServiceNow</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
