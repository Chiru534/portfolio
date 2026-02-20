import React from 'react';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="container footer-content">
                <div className="footer-logo">Chiranjeevi<span>.</span></div>
                <p>&copy; {year} Chiranjeevi Madem. Designed with simplicity in mind.</p>
                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/chiranjeevi-madem/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Chiru534" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    <a href="tel:+917989013278" aria-label="Phone"><i className="fas fa-phone-alt"></i></a>
                    <a href="mailto:chiranjeevi.madem@example.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
