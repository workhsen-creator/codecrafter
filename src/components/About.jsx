import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const stats = [
        { number: '50+', label: 'Projects Delivered' },
        { number: '25+', label: 'Happy Clients' },
        { number: '5+', label: 'Years Experience' },
        { number: '24/7', label: 'Support Available' }
    ];

    const timelineItems = [
        {
            title: 'Our Story',
            description: 'CodeCrafters started with a simple vision: turning complex ideas into powerful digital experiences. Built from passion and precision, this studio was created to help businesses transform imagination into reality through clean, scalable web solutions.',
            icon: '📖'
        },
        {
            title: 'Philosophy',
            description: 'Great design means nothing without performance. Every project is crafted with attention to detail, combining modern aesthetics with strong, reliable functionality that scales as you grow.',
            icon: '💡'
        },
        {
            title: 'Mission',
            description: 'To build high-quality, future-ready digital solutions that help brands stand out and grow with confidence.',
            icon: '🎯'
        },
        {
            title: 'Commitment',
            description: 'You work directly with the creator. No middle layers. No confusion. Just clear communication, technical precision, and results that matter.',
            icon: '⭐'
        }
    ];

    const values = [
        {
            title: 'Fast Turnaround Time',
            description: 'We deliver high-quality digital solutions on time and without compromise - so your business keeps moving forward.',
            icon: '⚡'
        },
        {
            title: 'SEO-Focused Architecture',
            description: 'Built from the ground up with search visibility in mind, helping your business rank higher and reach the right audience.',
            icon: '🔍'
        },
        {
            title: 'Mobile-First Experience',
            description: 'Designed for today\'s users - seamless, responsive, and optimized for every device from day one.',
            icon: '📱'
        },
        {
            title: 'Clean & Scalable Code',
            description: 'Structured, maintainable code built to evolve with your business and support future growth effortlessly.',
            icon: '💻'
        },
        {
            title: 'Ongoing Support',
            description: 'We don\'t disappear after launch. We provide continuous support and improvements to keep your product performing at its best.',
            icon: '🛠️'
        }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        About <span className="gradient-text">CodeCrafters</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Your trusted partner in building modern websites that help small businesses grow.
                    </motion.p>
                </motion.div>

                <div className="timeline-container">
                    {timelineItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <div className="timeline-icon-wrapper">
                                <div className="timeline-icon">{item.icon}</div>
                                <div className="timeline-line"></div>
                            </div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Us Section */}
                <section className="why-choose-section">
                    <div className="why-choose-container">
                        {/* Section Header */}
                        <motion.div
                            className="why-choose-header"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="why-choose-title">
                                Why Choose <span className="gradient-text">Us</span>
                            </h3>
                            <p className="why-choose-subtitle">
                                We deliver practical, high-performance solutions designed to help your business grow.
                            </p>
                        </motion.div>

                        {/* Features Grid */}
                        <div className="why-choose-grid">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="why-choose-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="why-choose-icon">
                                        {value.icon}
                                    </div>
                                    <div className="why-choose-content">
                                        <h4 className="why-choose-feature-title">
                                            {value.title}
                                        </h4>
                                        <p className="why-choose-description">
                                            {value.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <motion.div
                    className="stats-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                        }
                    }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-card"
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 }
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <h4 className="gradient-text">{stat.number}</h4>
                            <p>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
