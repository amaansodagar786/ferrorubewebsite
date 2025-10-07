import React, { useState, useRef, useEffect } from 'react';
import './Clients.scss';

const Clients = () => {
  const [isPaused, setIsPaused] = useState(false);
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  // Client logos - using Unsplash for placeholder logos
  const clientLogos = [
    { id: 1, name: 'Client 1', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop' },
    { id: 2, name: 'Client 2', logo: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=200&h=100&fit=crop' },
    { id: 3, name: 'Client 3', logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=100&fit=crop' },
    { id: 4, name: 'Client 4', logo: 'https://images.unsplash.com/photo-1563013541-3f3f2e56e69a?w=200&h=100&fit=crop' },
    { id: 5, name: 'Client 5', logo: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=200&h=100&fit=crop' },
    { id: 6, name: 'Client 6', logo: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=200&h=100&fit=crop' },
    { id: 7, name: 'Client 7', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop' },
    { id: 8, name: 'Client 8', logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=100&fit=crop' },
    { id: 9, name: 'Client 9', logo: 'https://images.unsplash.com/photo-1563013541-3f3f2e56e69a?w=200&h=100&fit=crop' },
    { id: 10, name: 'Client 10', logo: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=200&h=100&fit=crop' },
    { id: 11, name: 'Client 11', logo: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=200&h=100&fit=crop' },
    { id: 12, name: 'Client 12', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop' },
    { id: 13, name: 'Client 13', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop' },
    { id: 14, name: 'Client 14', logo: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=200&h=100&fit=crop' },
    { id: 15, name: 'Client 15', logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=100&fit=crop' },
    { id: 16, name: 'Client 16', logo: 'https://images.unsplash.com/photo-1563013541-3f3f2e56e69a?w=200&h=100&fit=crop' },
    { id: 17, name: 'Client 17', logo: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=200&h=100&fit=crop' },
    { id: 18, name: 'Client 18', logo: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=200&h=100&fit=crop' },
    { id: 19, name: 'Client 19', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop' },
    { id: 20, name: 'Client 20', logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=100&fit=crop' },
    { id: 21, name: 'Client 21', logo: 'https://images.unsplash.com/photo-1563013541-3f3f2e56e69a?w=200&h=100&fit=crop' },
    { id: 22, name: 'Client 22', logo: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=200&h=100&fit=crop' },
    { id: 23, name: 'Client 23', logo: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=200&h=100&fit=crop' },
    { id: 24, name: 'Client 24', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop' }
  ];

  // Split logos into two rows correctly - 12 logos each
  const topRowLogos = [...clientLogos.slice(0, 12), ...clientLogos.slice(0, 12)];
  const bottomRowLogos = [...clientLogos.slice(12, 24), ...clientLogos.slice(12, 24)];

  useEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;

    if (!topRow || !bottomRow) return;

    let topRowPosition = 0;
    let bottomRowPosition = 0;
    let animationId;

    // Calculate initial position for bottom row to start from the right
    const bottomRowWidth = bottomRow.scrollWidth / 2;
    bottomRowPosition = -bottomRowWidth;
    bottomRow.style.transform = `translateX(${bottomRowPosition}px)`;

    const animate = () => {
      if (!isPaused) {
        // Top row: left to right (decreasing translateX)
        topRowPosition -= 1;
        topRow.style.transform = `translateX(${topRowPosition}px)`;

        // Bottom row: right to left (increasing translateX)
        bottomRowPosition += 1;
        bottomRow.style.transform = `translateX(${bottomRowPosition}px)`;

        // Reset positions when one full set has scrolled
        const topRowWidth = topRow.scrollWidth / 2;
        const currentBottomRowWidth = bottomRow.scrollWidth / 2;

        if (Math.abs(topRowPosition) >= topRowWidth) {
          topRowPosition = 0;
        }

        if (bottomRowPosition >= 0) {
          bottomRowPosition = -currentBottomRowWidth;
        }
      }
    };

    animationId = setInterval(animate, 16);

    return () => {
      if (animationId) clearInterval(animationId);
    };
  }, [isPaused]);

  return (
    <section className="clients-section">
      <div className="container">
        <div className="clients-header">
          <h2 className="clients-title">Major Customers/Consultants</h2>
          <div className="title-underline"></div>
        </div>

        <div 
          className="clients-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Top Row - Left to Right */}
          <div className="slider-row top-row">
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
          <div className="slider-row bottom-row">
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