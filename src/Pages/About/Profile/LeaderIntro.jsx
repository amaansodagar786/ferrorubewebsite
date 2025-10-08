import {React , useEffect} from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import './LeaderIntro.scss';

const LeaderIntro = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // Dummy data
    const leader = {
        name: 'Dummy User',
        position: 'Founder & CEO',
        designation: 'Tech Entrepreneur, Visionary Leader',
        education: 'B.Tech in Computer Engineering, MIT University',
        introduction: `Person is a visionary leader with over 15 years in the tech industry.  
      He combines strategic thinking with hands-on execution to build scalable solutions.  
      Passionate about innovation and human-centric design, he leads teams with empathy and purpose.  
      In his free time, he mentors startups and writes on emerging technologies.`,
        imageUrl: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        email: 'dummy@example.com',
    };

    // Animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="leader-intro-page">
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
                        <img src={leader.imageUrl} alt={leader.name} />
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
                            <FaGraduationCap className="icon" />
                            <strong>Education:</strong> {leader.education}
                        </li>
                        <li>
                            <FaBriefcase className="icon" />
                            <strong>Career:</strong> {leader.position}
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
                    “I believe success is not just about technology, but about building lasting impact through people and trust.”
                </blockquote>
            </motion.section>

            {/* Back button or navigation */}
            <div className="back-nav">
                <a href="/about#leaders" className="back-button">← Back to Leadership Team</a>
            </div>
        </div>
    );
};

export default LeaderIntro;
