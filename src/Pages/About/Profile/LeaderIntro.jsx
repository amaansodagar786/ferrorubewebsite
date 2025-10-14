import {React , useEffect} from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import kishan from "../../../assets/home/about/kishan.png" 
// import kishan from "../../../assets/home/about/girdhar.png"
import './LeaderIntro.scss';

const LeaderIntro = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    // Updated data for Mr. Kishan Snehi
    const leader = {
        name: 'Mr. Kishan Snehi',
        position: 'Managing Director',
        designation: 'Mechanical Industry Expert, Strategic Leader',
        education: 'Bachelor\'s in Electrical Engineering from L.D.R.P Gandhinagar & Masters in CNC Technology',
        introduction: `Mr. Kishan Snehi brings with him over 8 years of extensive experience in the mechanical industry, with in-depth expertise across core industry segments and key business functions. His strategic leadership has been pivotal in enhancing operational efficiency and driving sustained growth at Ferro Tube & Forge Industries. Previously, he was associated with Multi Metal Industry as a CEO. He is highly experienced in designing & manufacturing of various types of loading & unloading arms and several other products. He has successfully overseen multiple functions, including sales, operations, and finance. His visionary leadership inspires the team to grow and transform the company's future.`,
        imageUrl: kishan, // Using the imported image
        email: 'md@ferrotubeindia.com', // Updated email format
        appointmentDate: 'April 1, 2025',
        previousRole: 'CEO at Multi Metal Industry',
        expertise: 'Designing & manufacturing of loading & unloading arms and various mechanical products',
        managedFunctions: 'Sales, Operations, Finance'
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
                            <FaBriefcase className="icon" />
                            <strong>Experience:</strong> Over 8 years in mechanical industry
                        </li>
                        <li>
                            <FaBriefcase className="icon" />
                            <strong>Previous Role:</strong> {leader.previousRole}
                        </li>
                        <li>
                            <FaBriefcase className="icon" />
                            <strong>Appointed as MD:</strong> {leader.appointmentDate}
                        </li>
                        <li>
                            <FaBriefcase className="icon" />
                            <strong>Key Expertise:</strong> {leader.expertise}
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
                    "I believe in driving sustained growth through strategic leadership, operational excellence, and empowering teams to transform the future of manufacturing."
                </blockquote> 
            </motion.section>

            {/* Back button or navigation */}
            <div className="back-nav">
                <a href="/about" className="back-button">← Back to About Section</a>
            </div>
        </div>
    );
};

export default LeaderIntro;