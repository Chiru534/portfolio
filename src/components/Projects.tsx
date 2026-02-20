import React from 'react';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-title">
                    <h2>Projects & Explorations</h2>
                    <div className="underline"></div>
                    <p className="section-subtitle">A showcase of things I've built while learning.</p>
                </div>
                <div className="projects-grid">

                    <div className="project-card">
                        <div className="project-content">
                            <div className="project-icon"><i className="fas fa-briefcase"></i></div>
                            <h3>Smartbridge Internship Projects</h3>
                            <p>Contributed to full stack development tasks during my ongoing internship at Smartbridge, focusing on building user-centric interfaces and connecting them with functional backends.</p>
                            <ul className="project-tech">
                                <li>Full Stack</li>
                                <li>Team Collaboration</li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-content">
                            <div className="project-icon"><i className="fas fa-utensils"></i></div>
                            <h3>AI-Powered Recipe Blog</h3>
                            <p>A creative side project that leverages artificial intelligence to generate unique recipe ideas and content, providing an interactive blogging experience.</p>
                            <ul className="project-tech">
                                <li>AI Integration</li>
                                <li>Web Application</li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-content">
                            <div className="project-icon"><i className="fas fa-server"></i></div>
                            <h3>Dockerized Backend Experiments</h3>
                            <p>Explored containerization by developing backend services using FastAPI and MongoDB, and packaging them into Docker containers for reliable local development.</p>
                            <ul className="project-tech">
                                <li>FastAPI</li>
                                <li>MongoDB</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-content">
                            <div className="project-icon"><i className="fas fa-cloud-upload-alt"></i></div>
                            <h3>Deployed Web Applications</h3>
                            <p>Hands-on experience with modern cloud hosting by successfully deploying several web applications and APIs on platforms like Vercel and Render.</p>
                            <ul className="project-tech">
                                <li>Vercel</li>
                                <li>Render</li>
                                <li>Deployment</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
