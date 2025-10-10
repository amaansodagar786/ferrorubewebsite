import {React , useEffect} from 'react';
import './FloatingRoof.scss';

import drainsystem from "../../../assets/products/floating-roof/drain_system.jpg"
import flexible1 from "../../../assets/products/floating-roof/flo_img1.jpg"
import flexible2 from "../../../assets/products/floating-roof/flo_img2.jpg"
import flexible3 from "../../../assets/products/floating-roof/flo_img3.jpg"
import flexible4 from "../../../assets/products/floating-roof/flo_img4.jpg"
import flexible5 from "../../../assets/products/floating-roof/flo_img5.jpg"
import tech from "../../../assets/products/floating-roof/tech_3.jpg"


import conventional1 from "../../../assets/products/floating-roof/flo_img7.jpg"
import conventional2 from "../../../assets/products/floating-roof/tech_1.jpg"
import conventional3 from "../../../assets/products/floating-roof/flo_img9.jpg"
import conventional4 from "../../../assets/products/floating-roof/tech_2.jpg"


import heroimg from "../../../assets/products/floating-roof/floatingroofhero.png";
import mobilehero from "../../../assets/mobileslider/mobilefloating.png";








const FloatingRoof = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="floating-roof">
            {/* Hero Section */}
            <section className="floating-hero">
                <div className="floating-hero-background">
                    {/* Desktop Image */}
                    <img
                        src={heroimg}
                        alt="Floating Roof Drains"
                        className="floating-hero-img desktop"
                    />

                    {/* Mobile Image */}
                    <img
                        src={mobilehero}
                        alt="Floating Roof Drains Mobile"
                        className="floating-hero-img mobile"
                    />

                    {/* Gradient Overlay */}
                    <div className="floating-hero-overlay"></div>
                </div>

                <div className="floating-hero-content">
                    <h1 className="floating-hero-title">FLOATING ROOF DRAINS</h1>
                </div>
            </section>


            {/* First Section - Full width paragraph */}
            <section className="floating-intro-section">
                <div className="floating-container">
                    <div className="floating-intro-content">
                        <p className="floating-intro-text">
                            Ferro Tube offers proven technology, reliable, safe and easy to install Drain System for Floating Roof Tanks. The system is designed as per API 650 (latest) to remove rain water so as not to put unacceptable loadings on the floating roof of Storage Tank.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Left + Text Right Section */}
            <section className="floating-drain-section">
                <div className="floating-container">
                    <div className="floating-drain-layout">
                        <div className="floating-drain-image">
                            <img
                                src={drainsystem}
                                alt="Drain System"
                                className="floating-drain-img"
                            />
                        </div>
                        <div className="floating-drain-text">
                            <p className="floating-drain-para">
                                Our system is a steel pipe drain system with either Flexible hose swing joints or conventional steel swivel joints capable of withstanding an extremely wide range of service conditions. The system effectively provides positive roof drainage with trouble free long life. The system operates within a fixed position in a Tank and ensures no interference with Tank internals, a problem that can occur with a flexible hose drain system which does not incorporate flexible joints.
                            </p>
                            <p className="floating-drain-para">
                                Drain Systems are completely prefabricated as per the Tank data provided by the customer and supplied with an Installation Manual for final assembly and installation at site by the customer.
                            </p>
                            <p className="floating-drain-para">
                                As required by our customers, Ferro Tube will also supply only the Jumper assemblies for the system, such as Flexible Swing Joints and conventional Swivel Joints in Style- 40F,fitted with Elbows and ANSI 150# SORF flanges at ends.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Two Full Width Paragraphs */}
            <section className="floating-specs-section">
                <div className="floating-container">
                    <div className="floating-specs-content">
                        <p className="floating-specs-text">
                            As required by our customers, Ferro Tube will also supply only the Jumper assemblies for the system, such as Flexible Swing Joints and conventional Swivel Joints in Style- 40F, fitted with Elbows and ANSI 150# SORF flanges at ends.
                        </p>
                        <p className="floating-specs-text">
                            The systems are designed and sized to suit the individual Tank specifications and customer requirements. The MOC of the Jumper assemblies, Piping materials, Elbows and Flanges shall chemically be compatible to the product being stored and their thicknesses/ ratings are Sch 40/ 150# unless otherwise specifically indicated in customers order. Available sizes are 3”, 4” and 6”.Standard rating is 150#/ Sch 40.
                        </p>
                    </div>
                </div>
            </section>

            {/* Flexible Swing Joints - 60% Text + 40% Images */}
            <section className="floating-swing-section">
                <div className="floating-container">
                    <h2 className="floating-swing-heading">Flexible swing joints</h2>
                    <div className="floating-swing-layout">
                        <div className="floating-swing-text">
                            <p className="floating-swing-para">
                                The Flexible Swing Joints incorporate flexible hose material fixed within a
                                galvanized carrier frame (stainless steel if ordered) and are specially designed for
                                submerged services. The MOC of the Pins for galvanized carrier frame is always
                                stainless steel to provide trouble free operation during the entire designed life of 20
                                years. The configuration of swing joint is such that it can accommodate at least
                                ±15° left and right hand side deck's movement without any damage on the whole
                                Drain system. The system consist 4 nos. of swing joints where Tank diameter is
                                greater than the Tank height and 3 nos. where Tank diameter is less than height
                            </p>
                            <p className="floating-swing-para">
                                The hoses are composite type, suitable for 100% aromatics and constructed from
                                the layers of polypropylene and polyester films and fabric. Galvanized helix wires
                                (stainless steel if ordered) in both inner and outer surfaces provide rigidity and the
                                multilayer elastomeric material makes the hoses lighter in weight with high
                                flexibility. Both ends of hoses are swaged to carbon steel tail-pieces (stainless steel
                                if ordered) with ANSI 150# RF flanges.
                            </p>
                        </div>
                        <div className="floating-swing-images">
                            <div className="floating-swing-img-container">
                                <img
                                    src={flexible1}
                                    alt="Flexible Swing Joint 1"
                                    className="floating-swing-img-tall"
                                />
                                <img
                                    src={flexible2} alt="Flexible Swing Joint 2"
                                    className="floating-swing-img-wide"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mixed Layout - 65% Left + 35% Right */}
            <section className="floating-testing-section">
                <div className="floating-container">
                    <div className="floating-testing-layout">
                        <div className="floating-testing-left">
                            <img
                                src={tech}
                                alt="Testing Process"
                                className="floating-testing-main-img"
                            />
                            <div className="floating-testing-points">
                                <h4 className="floating-testing-title">Before dispatch, each system undergoes following shop floor tests :</h4>
                                <ul className="floating-testing-list">
                                    <li className="floating-testing-item">Trial assembly of system in its low leg position.</li>
                                    <li className="floating-testing-item">Hydro test at a pressure of 60 psi</li>
                                </ul>
                            </div>
                        </div>
                        <div className="floating-testing-right">
                            <p className="floating-testing-text">
                                Flexible swing joint assemblies are periodically life cycle tested for 10,000 cycles (90° repeatable tests) under 0.5 kg/cm²g internal hydro pressure to ensure and conformity to its designed life.
                            </p>
                            <div className="floating-testing-gallery">
                                <img
                                    src={flexible3}
                                    alt="Test Image 1"
                                    className="floating-testing-gallery-img"
                                />
                                <img
                                    src={flexible4} alt="Test Image 2"
                                    className="floating-testing-gallery-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="technical-data">
                <h2 className="technical-title">Technical Data</h2>

                <div className="table-wrapper">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Sl. no.</th>
                                <th>Size</th>
                                <th>A (MM)</th>
                                <th>B (MM)</th>
                                <th>C (MM)</th>
                                <th>D (MM)</th>
                                <th>Operating<br />temperature</th>
                                <th>Hydro test<br />pressure</th>
                                <th>Weight of each<br />assembly</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>3”</td>
                                <td>620</td>
                                <td>310</td>
                                <td>228</td>
                                <td>195</td>
                                <td>(-) 40°C to (+) 100°C</td>
                                <td>60 psi</td>
                                <td>36 Kgs.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>4”</td>
                                <td>750</td>
                                <td>375</td>
                                <td>268</td>
                                <td>235</td>
                                <td>(-) 40°C to (+) 100°C</td>
                                <td>60 psi</td>
                                <td>55 Kgs.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>6”</td>
                                <td>950</td>
                                <td>475</td>
                                <td>362</td>
                                <td>312</td>
                                <td>(-) 40°C to (+) 100°C</td>
                                <td>60 psi</td>
                                <td>99 Kgs.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="diagram-section">
                    {/* <div className="diagram">
                        <img src={sideView} alt="Side View" />
                        <p>Side View</p>
                    </div> */}
                    <div className="diagram">
                        <img src={flexible5} alt="Top View" />

                    </div>
                    {/* <div className="diagram">
                        <img src={endView} alt="End View" />
                        <p>End View</p>
                    </div> */}
                </div>
            </section>

            {/* Conventional Swivel Joints - 60% Text + 40% Images */}
            <section className="floating-conventional-section">
                <div className="floating-container">
                    <h2 className="floating-conventional-heading">Conventional swivel joints</h2>
                    <div className="floating-conventional-layout">
                        <div className="floating-conventional-text">
                            <p className="floating-conventional-para">
                                Swivel joints for Drain system are specially designed, compatible with the stored product and permanently lubricated for submerged application. Material of constructions are CS/ SS/ AS/ LTCS.
                            </p>
                            <p className="floating-conventional-para">
                                Ferro Tube swivel joints have double row of ball bearings. Each swivel joints are accurately CNC machined to highly close tolerances. Both the ball races are suitably hardened. Hence, the hardened, micro- finished and widespread row of ball bearing races provides increased load bearing capacity and also, long bearing life. Swivel joints are periodically life cycle tested for 20,000 cycles (360° rotational test) under 2 kg/cm²g internal hydro pressure to ensure and conformity to its designed life. Each assembly is hydro tested at a pressure 16 kg/cm²g before dispatch.
                            </p>
                            <p className="floating-conventional-para">
                                Available sizes are 3”, 4” and 6”. Standard rating is 150#/ Sch 40.
                            </p>
                        </div>
                        <div className="floating-conventional-images">
                            <div className="floating-conventional-img-stack">
                                <img
                                    src={conventional1}
                                    alt="Conventional Swivel Joint 1"
                                    className="floating-conventional-img-vertical"
                                />
                                <img
                                    src={conventional2} alt="Conventional Swivel Joint 2"
                                    className="floating-conventional-img-horizontal"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aluminum Swivel Joints - 40% Images + 60% Text */}
            <section className="floating-aluminum-section">
                <div className="floating-container">
                    <div className="floating-aluminum-layout">
                        <div className="floating-aluminum-images">
                            <div className="floating-aluminum-gallery">
                                <img
                                    src={conventional3}
                                    alt="Aluminum Joint 1"
                                    className="floating-aluminum-img-portrait"
                                />
                                <img
                                    src={conventional4} alt="Aluminum Joint 2"
                                    className="floating-aluminum-img-landscape"
                                />

                            </div>
                        </div>
                        <div className="floating-aluminum-text">
                            <h2 className="floating-aluminum-heading">Conventional aluminum swivel joints</h2>
                            <p className="floating-aluminum-para">
                                Ferro Tube also undertake the design, manufacturing and supply of complete aluminum Drain system using conventional aluminum swivel joints in style: 40F.
                            </p>
                            <p className="floating-aluminum-para">
                                MOC for swivel joints is cast aluminum alloy to BS: 1490 Gr. LM6 or LM25 and for all corresponding straight pipes (ANSI 150# flanged ends) is B 345 Gr. 6063- T6. Swivel joints are hard anodized and shall provide long bearing life. Gaskets are offered either expandable PTFE of PTFE with Viton inserted. On request, aluminum Drain Sump as per customer's drawing will also be supplied along with the Drain line.
                            </p>
                            <p className="floating-aluminum-para">
                                Cast aluminum swivel joints are periodically life cycle tested for 20,000 cycles (360° rotational test) under 2 kg/cm²g internal hydro pressure to ensure and conformity to its designed life. Each assembly is hydro tested at a pressure 16 kg/cm²g before dispatch.
                            </p>
                            <p className="floating-aluminum-para">
                                Available sizes are 3" and 4". Standard rating: 150#/ Sch40.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FloatingRoof;