import React, { useState, useRef, useEffect } from 'react';
import './Clients.scss';

import client1 from "../../../assets/home/clients/client1.png"
import client2 from "../../../assets/home/clients/client2.png"
import client3 from "../../../assets/home/clients/client3.png"
import client4 from "../../../assets/home/clients/client4.png"
import client5 from "../../../assets/home/clients/client5.png"
import client6 from "../../../assets/home/clients/client6.jpg"
import client7 from "../../../assets/home/clients/client7.png"
import client8 from "../../../assets/home/clients/client8.png"
import client9 from "../../../assets/home/clients/client9.png"
import client10 from "../../../assets/home/clients/client10.png"
import client11 from "../../../assets/home/clients/client11.png"
import client12 from "../../../assets/home/clients/client1.png"

const Clients = () => {
  const [isPaused, setIsPaused] = useState(false); // kept for any UI needs
  const isPausedRef = useRef(false);                // used inside animation loop (no rerun)
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const animationRef = useRef(null);

  // positions
  const topRowPosition = useRef(0);
  const bottomRowPosition = useRef(0);

  // store set widths so animate can reference them without re-running effect
  const topRowSetWidthRef = useRef(0);
  const bottomRowSetWidthRef = useRef(0);

  // Client logos
  const clientLogos = [
    { id: 1, name: 'Indraprastha gas limited', logo: client1 },
    { id: 2, name: 'Bharat Petroleum', logo: client2 },
    { id: 3, name: 'GNFC', logo: client3 },
    { id: 4, name: 'Engineers India Limited', logo: client4 },
    { id: 5, name: 'Client 5', logo: client5 },
    { id: 6, name: 'Client 6', logo: client6 },
    { id: 7, name: 'Client 7', logo: client7 },
    { id: 8, name: 'Client 8', logo: client8 },
    { id: 9, name: 'Client 9', logo: client9 },
    { id: 10, name: 'Client 10', logo: client10 },
    { id: 11, name: 'Client 11', logo: client11 },
    { id: 12, name: 'Client 12', logo: client12 },
  ];

  const topRowLogos = [
    ...clientLogos.slice(0, 6),
    ...clientLogos.slice(0, 6),
    ...clientLogos.slice(0, 6)
  ];

  const bottomRowLogos = [
    ...clientLogos.slice(6, 12),
    ...clientLogos.slice(6, 12),
    ...clientLogos.slice(6, 12)
  ];

  useEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;
    if (!topRow || !bottomRow) return;

    // compute width of a single repeated set (6 logos)
    const getSingleSetWidth = (element) => {
      const logos = element.querySelectorAll('.client-logo');
      if (!logos || logos.length === 0) return 0;
      // take first 6 logos (one set)
      const firstSix = Array.from(logos).slice(0, 6);
      const logosWidth = firstSix.reduce((acc, el) => acc + el.offsetWidth, 0);
      // try to read gap from computed style, else fallback to 60
      const computedGap = parseInt(getComputedStyle(element).gap || '') || 60;
      return logosWidth + computedGap * (firstSix.length - 1);
    };

    const updateWidthsAndPositions = () => {
      topRowSetWidthRef.current = getSingleSetWidth(topRow);
      bottomRowSetWidthRef.current = getSingleSetWidth(bottomRow);

      // initialize positions only once (or when resize happens)
      topRowPosition.current = 0;
      bottomRowPosition.current = -bottomRowSetWidthRef.current;

      topRow.style.transform = `translateX(${topRowPosition.current}px)`;
      bottomRow.style.transform = `translateX(${bottomRowPosition.current}px)`;

      console.log('Widths updated:', topRowSetWidthRef.current, bottomRowSetWidthRef.current);
    };

    updateWidthsAndPositions();

    // animation loop (reads pause from isPausedRef, so no effect re-run needed)
    const animate = () => {
      if (!isPausedRef.current) {
        // top row: move left to right visually (we decrease x for continuous left movement)
        topRowPosition.current -= 0.5;
        if (Math.abs(topRowPosition.current) >= topRowSetWidthRef.current) {
          topRowPosition.current = 0;
        }
        topRow.style.transform = `translateX(${topRowPosition.current}px)`;

        // bottom row: move right to left (we increase x)
        bottomRowPosition.current += 0.4;
        if (bottomRowPosition.current >= 0) {
          bottomRowPosition.current = -bottomRowSetWidthRef.current;
        }
        bottomRow.style.transform = `translateX(${bottomRowPosition.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // recompute widths on resize so the loop stays correct
    window.addEventListener('resize', updateWidthsAndPositions);

    // cleanup
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', updateWidthsAndPositions);
    };
  }, []); // run once on mount

  // handlers update both ref and state (state kept for any UI)
  const handleTopRowMouseEnter = () => {
    isPausedRef.current = true;
    setIsPaused(true);
    console.log('Top row paused');
  };
  const handleTopRowMouseLeave = () => {
    isPausedRef.current = false;
    setIsPaused(false);
    console.log('Top row resumed');
  };
  const handleBottomRowMouseEnter = () => {
    isPausedRef.current = true;
    setIsPaused(true);
    console.log('Bottom row paused');
  };
  const handleBottomRowMouseLeave = () => {
    isPausedRef.current = false;
    setIsPaused(false);
    console.log('Bottom row resumed');
  };

  return (
    <section className="clients-section">
      <div className="container">
        <div className="clients-header">
          <h2 className="clients-title">Major Customers/Consultants</h2>
          <div className="title-underline"></div>
        </div>

        <div className="clients-slider">
          {/* Top Row - Left to Right */}
          <div
            className="slider-row top-row"
            onMouseEnter={handleTopRowMouseEnter}
            onMouseLeave={handleTopRowMouseLeave}
          >
            <div className="slider-track" ref={topRowRef}>
              {topRowLogos.map((client, index) => (
                <div key={`top-${client.id}-${index}`} className="client-logo">
                  <img src={client.logo} alt={client.name} className="logo-image" />
                  <div className="logo-overlay"><span>{client.name}</span></div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Right to Left */}
          <div
            className="slider-row bottom-row"
            onMouseEnter={handleBottomRowMouseEnter}
            onMouseLeave={handleBottomRowMouseLeave}
          >
            <div className="slider-track" ref={bottomRowRef}>
              {bottomRowLogos.map((client, index) => (
                <div key={`bottom-${client.id}-${index}`} className="client-logo">
                  <img src={client.logo} alt={client.name} className="logo-image" />
                  <div className="logo-overlay"><span>{client.name}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="clients-info">
          <p>Trusted by industry leaders worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
