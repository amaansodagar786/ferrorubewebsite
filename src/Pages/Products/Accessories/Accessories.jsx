import React, { useEffect } from "react";
import "./Accessories.scss";

import heroimg from "../../../assets/products/accessories/accessorieshero.png" ;

import img1 from "../../../assets/products/accessories/7.png" ;
import img2 from "../../../assets/products/accessories/6.png" ;
import img3 from "../../../assets/products/accessories/5.png" ;
import img4 from "../../../assets/products/accessories/5.png" ;
import img5 from "../../../assets/products/accessories/com_6.jpg" ;
import img6 from "../../../assets/products/accessories/9.png" ;
import img7 from "../../../assets/products/accessories/8.png" ;
import img8 from "../../../assets/products/accessories/10.png" ;
import img9 from "../../../assets/products/accessories/9.png" ;
import img10 from "../../../assets/products/accessories/10.png" ;





const accessoriesData = [
    {
        title: "API Coupler",
        paragraphs: [
            `API Bottom Loading Coupler, size: 4” in accordance with API RP-1004 is designed for effortless and leak-proof tight connection to the Tank Trucks mating API Adaptor. The unit provides dependable and low maintenance service.`,
            `The coupler contains 3 trigger mechanisms to prevent accidental opening of the valve and 5 interlock lugs for secure holding during loading operations. Hence, unless the coupler is tightly connected to an API adaptor, its valve cannot be opened and also, cannot be disconnected unless the valve is closed.`,
            `The unit has hard anodized aluminum body, sleeve and valve with a 4” TTMA mounting flange. Stainless steel internals with chrome plated handle. All seals are Viton and bushings are PTFE. Hydro tested at a pressure of 16 kg/cm² (g) before dispatch.`,
        ],
        image: img1,
    },
    {
        title: "API Adaptor",
        paragraphs: [
            `API Adaptor, size: 4” in accordance with API RP-1004 is designed for mounting on the inlet nozzle of Tank Truck for making effortless and leak-proof tight connection to the API Coupler.`,
            `The unit provides dependable and low maintenance service.`,
            `The unit has hard anodized aluminum body and valve with a 4” TTMA mounting flange. Stainless steel internals. All seals are Viton and bushings are PTFE. Hydro tested at a pressure of 16 kg/cm² (g) before dispatch.`,
        ],
        image: img2,
    },
    {
        title: "Spring Balance unit",
        paragraphs: [
            `API Bottom Loading Coupler, size: 4” in accordance with API RP- 1004 is designed for
effortless and leak-proof tight connection to the Tank Trucks mating API Adaptor.
The unit provides dependable and low maintenance service.`,
            `The coupler contains 3 trigger mechanisms to prevent accidental opening of the
valve and 5 interlock lugs for secure holding during loading operations. Hence,
unless the coupler is tightly connected to an API adaptor, its valve cannot be
opened and also, cannot be disconnected unless the valve is closed.`,
            `The unit has hard anodized aluminum body, sleeve and valve with a 4” TTMA
mounting flange. Stainless steel internals with chrome plated handle. All seals are
Viton and bushings are PTFE. Hydro tested at a pressure of 16 kg/cm² (g) before
dispatch.`,
        ],
        image: img3,
    },
    {
        title: "Torsion spring unit",
        paragraphs: [
            `Most popular and have several advantages. Small and compact unit requires
little operating space. Operating principle is simple- lowering the arm winds the
spring tighter and lifting the arm spring unwinds. We offer 3 different sizes of
spring assemblies with progressive higher lifting capacities.`,
        ],
        image: img4,
    },
    {
        title: "Compression spring unit",
        paragraphs: [
            `It comprises a long compression spring encased in a round shaped pipe that
compresses the spring as the arm lowered. Adjusting screws are located outside the
casing for adjustment of spring tension with a standard tool. 3 different sizes of
spring assemblies are offered with progressive higher lifting capacities.`,
        ],
        image: img5,
    },
    {
        title: "Vacuum breaker",
        paragraphs: [
            `Vacuum breaker permits quick draining of the residual product from the arm after the
loading operation is completed.`,

            `Materials of construction are aluminum, brass and stainless steel. Standard size is ½”.`,

            `Ferro Tube offers spring type, small and compact model of vacuum breakers which
are highly effective and provides dependable and long maintenance free
performance`,
        ],
       image: img6,
    },
    {
        title: "Position Sensor",
        paragraphs: [
            `Position Sensor and Overspill Protection Device can be incorporated with our all Top
loading arms as per customers’ requirement.`,
            `Position sensor detects the position of loading arm and Overspill device detects the
product level and prevent from overflow during filling operation. Both these devices
are designed for rugged services, provides dependable and trouble free
performance.`,
        ],
        image: img7,
    },
    {
        title: "Overspill Protection Device",
        paragraphs: [
            `Main component of these devices is Sensor. Sensors are proximity type and transmits
NAMUR signal. Each sensor is encased in their respective PTFE lined metallic Housing
along with accessories for generating signal at a desired set point. Sensor Housings
are mounted on the loading arms at their respective strategic locations.`,

            `The cables ends of each sensor are terminated at a Barrier/ Isolated Switch Amplifier
rated 24V DC or 220V AC as per power supply at customer’s installations. Barrier is
housed inside a flameproof (Ex-d, IIA/ IIB) and weatherproofs (IP 65) Junction box
which mounted on a permanent Platform structure. However, the cabling beyond the
junction box to batch controller falls under the scope of customers.`,
        ],
        image: img8,
    },
];


const Accessories = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="accessories-page">
            {/* HERO SECTION */}
            <section className="accessories-hero">
                <img src={heroimg} alt="Accessories Hero" className="hero-img" />
                <div className="hero-center">
                    <h1>ACCESSORIES</h1>
                </div>
            </section>

            {/* ACCESSORY SECTIONS */}
            {accessoriesData.map((item, index) => (
                <section
                    key={index}
                    className={`accessory-row ${index % 2 === 1 ? "reverse" : ""
                        }`}
                >
                    <div className="text-col">
                        <h2>{item.title}</h2>
                        {item.paragraphs.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>

                    <div className="media-col">
                        <div className={`shape shape-${index + 1}-a`} aria-hidden />
                        <div className={`shape shape-${index + 1}-b`} aria-hidden />
                        <div className="image-frame">
                            <img src={item.image} alt={item.title} />
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Accessories;
