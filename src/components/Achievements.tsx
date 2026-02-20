import React from 'react';

const Achievements: React.FC = () => {
    return (
        <section id="achievements" className="section">
            <div className="container">
                <div className="section-title">
                    <h2>Milestones & Achievements</h2>
                    <div className="underline"></div>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>ServiceNow Certification</h3>
                            <p className="timeline-date">Recent</p>
                            <p>Successfully earned certification as a ServiceNow professional, demonstrating knowledge in IT service management and automated workflows.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>Hackathon Participant</h3>
                            <p className="timeline-date">Ongoing</p>
                            <p>Actively engaged in hackathons to collaborate with peers, challenge myself under pressure, and quickly prototype innovative solutions.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>Smartbridge Internship</h3>
                            <p className="timeline-date">Present</p>
                            <p>Selected for a Full Stack Development internship, gaining invaluable industry exposure and practical experience in modern web development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
