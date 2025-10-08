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
  const [isPaused, setIsPaused] = useState(false);
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const animationRef = useRef(null);

  // Store animation positions in refs
  const topRowPosition = useRef(0);
  const bottomRowPosition = useRef(0);

  // Client logos
  const clientLogos = [
    { id: 1, name: 'Client 1', logo: client1 },
    { id: 2, name: 'Client 2', logo: client2 },
    { id: 3, name: 'Client 3', logo: client3 },
    { id: 4, name: 'Client 4', logo: client4 },
    { id: 5, name: 'Client 5', logo: client5 },
    { id: 6, name: 'Client 6', logo: client6 },
    { id: 7, name: 'Client 7', logo: client7 },
    { id: 8, name: 'Client 8', logo: client8 },
    { id: 9, name: 'Client 9', logo: client9 },
    { id: 10, name: 'Client 10', logo: client10 },
    { id: 11, name: 'Client 11', logo: client11 },
    { id: 12, name: 'Client 12', logo: client12 },
  ];

  // Top row: logos 1-6 repeated 3 times
  const topRowLogos = [
    ...clientLogos.slice(0, 6),
    ...clientLogos.slice(0, 6),
    ...clientLogos.slice(0, 6)
  ];

  // Bottom row: logos 7-12 repeated 3 times
  const bottomRowLogos = [
    ...clientLogos.slice(6, 12),
    ...clientLogos.slice(6, 12),
    ...clientLogos.slice(6, 12)
  ];

  useEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;

    if (!topRow || !bottomRow) return;

    // Get the width of one set of logos (6 logos)
    const getSingleSetWidth = (element) => {
      const firstLogo = element.querySelector('.client-logo');
      return firstLogo ? firstLogo.offsetWidth * 6 + (5 * 60) : 0; // 6 logos with 60px gap
    };

    const topRowSetWidth = getSingleSetWidth(topRow);
    const bottomRowSetWidth = getSingleSetWidth(bottomRow);

    // Initialize bottom row position to start from the right
    bottomRowPosition.current = -bottomRowSetWidth;
    bottomRow.style.transform = `translateX(${bottomRowPosition.current}px)`;

    const animate = () => {
      if (!isPaused) {
        // Top row: left to right
        topRowPosition.current -= 0.5;
        if (Math.abs(topRowPosition.current) >= topRowSetWidth) {
          topRowPosition.current = 0;
        }
        topRow.style.transform = `translateX(${topRowPosition.current}px)`;

        // Bottom row: right to left - FIXED LOGIC
        bottomRowPosition.current += 0.4;
        if (bottomRowPosition.current >= 0) {
          bottomRowPosition.current = -bottomRowSetWidth;
        }
        bottomRow.style.transform = `translateX(${bottomRowPosition.current}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Separate mouse handlers for each row to prevent conflicts
  const handleTopRowMouseEnter = () => setIsPaused(true);
  const handleTopRowMouseLeave = () => setIsPaused(false);
  const handleBottomRowMouseEnter = () => setIsPaused(true);
  const handleBottomRowMouseLeave = () => setIsPaused(false);

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
            <div
              className="slider-track"
              ref={topRowRef}
            >
              {topRowLogos.map((client, index) => (
                <div
                  key={`top-${client.id}-${index}`}
                  className="client-logo"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="logo-image"
                  />
                  <div className="logo-overlay">
                    <span>{client.name}</span>
                  </div>
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
            <div
              className="slider-track"
              ref={bottomRowRef}
            >
              {bottomRowLogos.map((client, index) => (
                <div
                  key={`bottom-${client.id}-${index}`}
                  className="client-logo"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="logo-image"
                  />
                  <div className="logo-overlay">
                    <span>{client.name}</span>
                  </div>
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