import React from 'react';
import { motion } from 'framer-motion';
import './Work.css';
import { useNavigate } from 'react-router-dom';

const Work = () => {
    const navigate = useNavigate();

    const projects = [
        {
            id: 1,
            title: "Project Alpha",
            techStack: ["React", "Redux", "Node.js", "MongoDB"],
            image: "https://placehold.co/600x400/1a1a2e/FFF?text=Project+Alpha",
            link: "#"
        },
        {
            id: 2,
            title: "Project Beta",
            techStack: ["React", "Framer Motion", "Tailwind CSS"],
            image: "https://placehold.co/600x400/16213e/FFF?text=Project+Beta",
            link: "#"
        }
    ];

    return (
        <div className="work-page">
            <div className="work-header">
                <button className="back-btn" onClick={() => navigate('/')}>
                    ← Back to Home
                </button>
                <h1>Our <span className="highlight">Work</span></h1>
                <p>Explore some of our recent projects and success stories.</p>
            </div>

            <div className="projects-grid container">
                {projects.map((project) => (
                    <motion.div
                        className="project-card"
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <a href={project.link} className="visit-btn">Visit Website</a>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <div className="tech-stack">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Work;
