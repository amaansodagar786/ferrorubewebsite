import React, { useEffect } from "react";
import "./SwivelJoints.scss";

// Sample hero and section images
const heroImg = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const img1 = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const img2 = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const img3 = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const img4 = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

const SwivelJoints = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="swivel-joints">
            {/* HERO */}
            <section className="swivel-joints-hero">
                <img src={heroImg} alt="Swivel Joints hero" className="hero-img" />
                <div className="hero-center">
                    <h1>SWIVEL JOINTS</h1>
                </div>
            </section>

            {/* PARAGRAPH SECTION */}
            <section className="swivel-joints-paragraphs">
                <div className="paragraphs-container">
                    <p>
                        The critical component of a loading arm is Swivel Joint. Ferro Tube offers a wide range of swivel joints in terms of their size, type and MOC to meet the customers every requirement. Available sizes are 2", 3", 4" and 6".
                    </p>
                    <p>
                        Ferro Tube swivel joints have double row of ball bearings. Each swivel joints are accurately CNC machined to highly close tolerances. Both the ball races are hardened suitably. Hence, the hardened, micro - finished and widespread row of ball bearing races provides increased load bearing capacity and also, long bearing life.
                    </p>
                    <p>
                        A grease nipple which accepts standard grease gun is provided between the ball races for periodic field greasing. Standard seals are Viton and other available seals are Buna - N, EPT, EPDM or as specified by the customers.
                    </p>
                </div>
            </section>

            {/* SECTION 1: LEFT TEXT - RIGHT IMAGE */}
            <section className="swivel-joints-row">
                <div className="text-col">
                    <h2>Standard Swivel Joint</h2>
                    <ul>
                        <li>2 piece design</li>
                        <li>2 nos. of seals</li>
                        <li>Main seal is O-ring and other seal is dust seal</li>
                        <li>Long trouble free performance</li>
                        <li>Good load bearing capacity</li>
                    </ul>
                </div>

                <div className="media-col">
                    <div className="shape shape-1-a" aria-hidden />
                    <div className="shape shape-1-b" aria-hidden />
                    <div className="image-frame">
                        <img src={img1} alt="Standard Swivel Joint" />
                    </div>
                </div>
            </section>

            {/* SECTION 2: LEFT IMAGE - RIGHT TEXT */}
            <section className="swivel-joints-row reverse">
                <div className="media-col">  {/* ← MEDIA FIRST */}
                    <div className="shape shape-2-a" aria-hidden />
                    <div className="shape shape-2-b" aria-hidden />
                    <div className="image-frame">
                        <img src={img2} alt="Split Flange Swivel Joint" />
                    </div>
                </div>

                <div className="text-col">  {/* ← TEXT SECOND */}
                    <h2>Split Flange Swivel Joint</h2>
                    <ul>
                        <li>3 piece design</li>
                        <li>Main seal can be replaced without dismantling the whole assembly</li>
                        <li>Main seal is gasket</li>
                        <li>Other seal is dust seal</li>
                        <li>Secondary and back-up seals are O-rings</li>
                        <li>Improved load bearing capacity and long leak-proof life</li>
                    </ul>
                </div>
            </section>

            {/* SECTION 3: LEFT TEXT - RIGHT IMAGE */}
            <section className="swivel-joints-row">
                <div className="text-col">
                    <h2>Cast Aluminum Alloy Swivel Joint</h2>
                    <ul>
                        <li>3 piece design</li>
                        <li>Main seal can be replaced without dismantling the whole assembly</li>
                        <li>Main seal is gasket</li>
                        <li>Other seal is dust seal</li>
                        <li>Secondary and back-up seals are O-rings</li>
                        <li>Improved load bearing capacity and long leak-proof life</li>
                    </ul>
                </div>

                <div className="media-col">
                    <div className="shape shape-3-a" aria-hidden />
                    <div className="shape shape-3-b" aria-hidden />
                    <div className="image-frame">
                        <img src={img3} alt="Cast Aluminum Alloy Swivel Joint" />
                    </div>
                </div>
            </section>

            {/* SECTION 4: LEFT IMAGE - RIGHT TEXT */}
            <section className="swivel-joints-row reverse">
                <div className="media-col">  {/* ← MEDIA FIRST */}
                    <div className="shape shape-4-a" aria-hidden />
                    <div className="shape shape-4-b" aria-hidden />
                    <div className="image-frame">
                        <img src={img4} alt="Heavy Duty Split Flange Swivel Joint" />
                    </div>
                </div>

                <div className="text-col">  {/* ← TEXT SECOND */}
                    <h2>Heavy Duty Split Flange Swivel Joint</h2>
                    <ul>
                        <li>3 piece design</li>
                        <li>Specially designed for heavy load bearing applications, such as unsupported loading arms</li>
                        <li>Number of seals are same as split flange swivel joint except two additional O-rings for top cover</li>
                        <li>Greater load bearing capacity and long leak-proof life</li>
                    </ul>
                </div>
            </section>

            <section className="swivel-joints-paragraphs">
                <div className="paragraphs-container">
                    <h1>Available styles for swivel joints</h1>
                    <p>
                        Ferro Tube swivel joints are available in one, two or three planes of rotation for unlimited flexibility.
                    </p>
                    <p>
                        Various styles are illustrated below.
                    </p>
                    <p>
                        Each style can be supplied either in flanged ends (ANSI 150# or TTMA) or butt weld ends to suit customers every requirement. Standard
                        combination of different metals, such as carbon steel, stainless steel or aluminum and seal materials, such as Buna-N, Viton, EPDM, EPT etc.
                        virtually meets almost all technical parameters for the products to be handled.
                    </p>
                    <p>Available sizes are 2", 3", 4" and 6".</p>
                </div>
            </section>
        </div>
    );
};

export default SwivelJoints;