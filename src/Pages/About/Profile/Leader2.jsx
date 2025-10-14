import { React, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaEnvelope, FaAward } from 'react-icons/fa';
import './Leader2.scss';
import girdhar from "../../../assets/home/about/girdhar.png"

const Leader2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Updated data for Mr. Girdhar Patel
    const leader = {
        name: 'Mr. Girdhar Patel',
        position: 'Partner',
        designation: 'Electrical Industry Expert, Senior Mechanical Engineer',
        education: 'Extensive technical education in Electrical and Mechanical Engineering',
        introduction: `Mr. Girdhar Patel is a Partner at Ferro Tube and Forge Industries. He brings with him over 50+ years of extensive experience in the Electrical industry, with in-depth expertise across core industry segments and key business functions. He has vast experience in handling different types of mechanical engineering problems & projects. He is also a partner at Multimetal Industries. His vast knowledge in the development of forged components, in the design of high-pressure hydraulic fittings, valves & other equipment. His vast experience of 45+ years of practical production and inspection is very crucial for company's growth and future.`,
        imageUrl: girdhar,
        email: 'ferrotubeind@gmail.com',
        experience: '50+ years in Electrical Industry',
        expertise: 'Development of forged components, design of high-pressure hydraulic fittings, valves & equipment',
        currentRole: 'Partner at Ferro Tube and Forge Industries & Multimetal Industries',
        specialization: 'Mechanical engineering problems & projects, production and inspection'
    };

    // Animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="leader2-intro-page">
            {/* Hero / Header section */}
            <motion.section
                className="intro-hero"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
            >
                <div className="hero-content">
                    <div className="hero-img-wrapper">
                        <div className="leader-image">
                            <img src={leader.imageUrl} alt={leader.name} />
                        </div>
                    </div>
                    <div className="hero-text">
                        <h1>{leader.name}</h1>
                        <h3>{leader.position}</h3>
                        <p className="designation">{leader.designation}</p>
                    </div>
                </div>
            </motion.section>

            {/* Introduction & quick info */}
            <div className="intro-main">
                <motion.div
                    className="intro-text"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p>{leader.introduction}</p>
                </motion.div>

                <motion.div
                    className="info-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <ul>
                        <li>
                            <FaGraduationCap className="icon education-icon" />
                            <strong>Education:</strong> {leader.education}
                        </li>
                        <li>
                            <FaAward className="icon" />
                            <strong>Experience:</strong> {leader.experience}
                        </li>
                        <li>
                            <FaBriefcase className="icon" />
                            <strong>Current Role:</strong> {leader.currentRole}
                        </li>
                        <li>
                            <FaBriefcase className="icon" />
                            <strong>Key Expertise:</strong> {leader.expertise}
                        </li>
                        <li>
                            <FaBriefcase className="icon" />
                            <strong>Specialization:</strong> {leader.specialization}
                        </li>
                        <li>
                            <FaEnvelope className="icon" />
                            <strong>Email:</strong> <a href={`mailto:${leader.email}`}>{leader.email}</a>
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* Message / Vision section */}
            <motion.section
                className="intro-vision"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
            >
                <blockquote>
                    "With over five decades of experience, I believe in the power of practical knowledge, precision engineering, and continuous innovation to drive sustainable growth in the manufacturing industry."
                </blockquote>
            </motion.section>

            {/* Back button or navigation */}
            <div className="back-nav">
                <a href="/about" className="back-button">← Back to About Section</a>
            </div>
        </div>
    );
};

export default Leader2;