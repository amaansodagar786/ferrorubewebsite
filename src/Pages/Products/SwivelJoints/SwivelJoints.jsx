// File: src/components/SwivelJoints/SwivelJoints.jsx
import React, { useEffect } from "react";
import "./SwivelJoints.scss";

// Sample hero and section images
import heroimg from "../../../assets/products/swivel_joints/swivelhero.png" ;



import img1 from "../../../assets/products/swivel_joints/com_1.jpg"
import img2 from "../../../assets/products/swivel_joints/com_2.jpg"
import img3 from "../../../assets/products/swivel_joints/com_3.jpg"
import img4 from "../../../assets/products/swivel_joints/com_4.jpg"
import img5 from "../../../assets/products/swivel_joints/swi_1.jpg"

const swivelData = [
    {
        title: "Standard Swivel Joint",
        list: [
            "2 piece design",
            "2 nos. of seals",
            "Main seal is O-ring and other seal is dust seal",
            "Long trouble free performance",
            "Good load bearing capacity",
        ],
        img: img1,
        shapes: ["shape-1-a", "shape-1-b"],
    },
    {
        title: "Split Flange Swivel Joint",
        list: [
            "3 piece design",
            "Main seal can be replaced without dismantling the whole assembly",
            "Main seal is gasket",
            "Other seal is dust seal",
            "Secondary and back-up seals are O-rings",
            "Improved load bearing capacity and long leak-proof life",
        ],
        img: img2,
        shapes: ["shape-2-a", "shape-2-b"],
    },
    {
        title: "Cast Aluminum Alloy Swivel Joint",
        list: [
            "3 piece design",
            "Main seal can be replaced without dismantling the whole assembly",
            "Main seal is gasket",
            "Other seal is dust seal",
            "Secondary and back-up seals are O-rings",
            "Improved load bearing capacity and long leak-proof life",
        ],
        img: img3,
        shapes: ["shape-3-a", "shape-3-b"],
    },
    {
        title: "Heavy Duty Split Flange Swivel Joint",
        list: [
            "3 piece design",
            "Specially designed for heavy load bearing applications, such as unsupported loading arms",
            "Number of seals are same as split flange swivel joint except two additional O-rings for top cover",
            "Greater load bearing capacity and long leak-proof life",
        ],
        img: img4,
        shapes: ["shape-4-a", "shape-4-b"],
    },
];

const SwivelJoints = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="swivel-joints">
            {/* HERO */}
            <section className="swivel-joints-hero">
                <img src={heroimg} alt="Swivel Joints hero" className="hero-img" />
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

            {/* DYNAMIC SECTIONS */}
            {swivelData.map((item, idx) => (
                <section className={`swivel-joints-row`} key={idx}>
                    <div className="text-col">
                        <h2>{item.title}</h2>
                        <ul>
                            {item.list.map((li, index) => (
                                <li key={index}>{li}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="media-col">
                        <div className={`shape ${item.shapes[0]}`} aria-hidden />
                        <div className={`shape ${item.shapes[1]}`} aria-hidden />
                        <div className="image-frame">
                            <img src={item.img} alt={item.title} />
                        </div>
                    </div>
                </section>
            ))}

            {/* BOTTOM PARAGRAPH */}
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

            {/* BOTTOM FULL-WIDTH IMAGE */}
            <section className="swivel-bottom-image">
                <img src={img5} alt="Swivel Joint Styles" />
            </section>
        </div>
    );
};

export default SwivelJoints;
