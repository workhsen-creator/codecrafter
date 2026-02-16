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
            description: "A comprehensive e-commerce platform built for high-performance retail. Features include real-time inventory management, seamless checkout process, and an intuitive admin dashboard.",
            techStack: ["React", "Node.js", "Redux", "MongoDB"],
            image: "https://placehold.co/800x600/1a1a2e/FFF?text=Project+Alpha",
            link: "#"
        },
        {
            id: 2,
            title: "Project Beta",
            description: "A dynamic portfolio website designing for creative professionals. Showcases work with stunning animations, interactive galleries, and a fully responsive layout.",
            techStack: ["React", "Framer Motion", "Tailwind CSS"],
            image: "https://placehold.co/800x600/16213e/FFF?text=Project+Beta",
            link: "#"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <div className="work-page">
            <button className="back-btn" onClick={() => navigate('/')}>
                ← Back to Home
            </button>

            <div className="container">
                <div className="work-header">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        My <span className="highlight">Projects</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Here are some of my recent works.
                    </motion.p>
                </div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projects.map((project) => (
                        <motion.div
                            className="project-card"
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} />
                                <div className="overlay" />
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="tech-stack">
                                    {project.techStack.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="view-btn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View Project
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Work;
