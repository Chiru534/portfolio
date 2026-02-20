import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const sections = document.querySelectorAll('section');
            let current = '';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id') || '';
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const headerOffset = 70;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="navbar" style={{ boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)', padding: scrolled ? '0.5rem 0' : '1rem 0' }}>
            <div className="container nav-container">
                <a href="#" className="logo">Chiranjeevi<span>.</span></a>
                <div className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <nav>
                    <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a></li>
                        <li><a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a></li>
                        <li><a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a></li>
                        <li><a href="#achievements" onClick={(e) => handleLinkClick(e, 'achievements')} className={`nav-link ${activeSection === 'achievements' ? 'active' : ''}`}>Achievements</a></li>
                        <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="nav-link btn-contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
