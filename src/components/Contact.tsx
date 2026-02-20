import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="section bg-light">
            <div className="container">
                <div className="section-title">
                    <h2>Get In Touch</h2>
                    <div className="underline"></div>
                    <p className="section-subtitle">I'm currently open to new opportunities and connecting with fellow developers.</p>
                </div>

                <div className="contact-card">
                    <div className="contact-info">
                        <p>Whether you have a question, an opportunity, or just want to say hi, feel free to reach out. I'll get back to you as soon as possible!</p>

                        <div className="contact-links">
                            <a href="tel:+917989013278" className="contact-link-item">
                                <div className="icon-circle"><i className="fas fa-phone-alt"></i></div>
                                <span>+91 7989013278</span>
                            </a>
                            <a href="mailto:chiranjeevi.madem@example.com" className="contact-link-item">
                                <div className="icon-circle"><i className="fas fa-envelope"></i></div>
                                <span>Email Me</span>
                            </a>
                            <a href="https://www.linkedin.com/in/chiranjeevi-madem/" className="contact-link-item" target="_blank" rel="noopener noreferrer">
                                <div className="icon-circle"><i className="fab fa-linkedin-in"></i></div>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/Chiru534" className="contact-link-item" target="_blank" rel="noopener noreferrer">
                                <div className="icon-circle"><i className="fab fa-github"></i></div>
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
