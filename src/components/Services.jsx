import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Services.css';

const Services = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Map vertical scroll (0 to 1) to horizontal movement (0% to -66.67%)
    // -66.67% because there are 3 items, and we want to stop when the last one is fully visible
    // Calculation: (3 items - 1 viewport) / 3 items * 100 = 66.67%
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-67%"]);

    const services = [
        {
            id: '01',
            title: 'Custom Web Development',
            description: 'We build fast, scalable, and secure websites tailored to your business goals — engineered for performance, growth, and long-term success.',
            icon: '🚀'
        },
        {
            id: '02',
            title: 'UI/UX Design',
            description: 'We design intuitive, user-centered experiences that not only look stunning but drive engagement, conversions, and customer satisfaction.',
            icon: '🎨'
        },
        {
            id: '03',
            title: 'E-commerce Solutions',
            description: 'We create powerful online stores optimized for seamless shopping experiences, secure payments, and maximum revenue growth.',
            icon: '🛍️'
        }
    ];

    return (
        <section ref={targetRef} className="services-section">
            <div className="sticky-wrapper">
                <div className="services-header">
                    <h2>Our <span className="gradient-text">Services</span></h2>
                    <div className="scroll-indicator">
                        <span>Scroll Down to Explore</span>
                        <div className="arrow-down">↓</div>
                    </div>
                </div>

                <motion.div style={{ x }} className="services-track">
                    {services.map((service) => (
                        <div className="service-card-horizontal" key={service.id}>
                            <div className="service-content">
                                <span className="service-number">{service.id}</span>
                                <div className="service-icon-large">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <a href="#contact" className="service-cta">
                                    LEARN MORE <span className="arrow">→</span>
                                </a>
                            </div>
                            <div className="service-background-text">
                                {service.title}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Progress Bar moved to bottom of sticky container */}
                <motion.div
                    className="progress-bar-container"
                    style={{ scaleX: scrollYProgress }}
                />
            </div>
        </section>
    );
};

export default Services;
