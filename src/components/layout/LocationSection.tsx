import './LocationSection.css';

const LocationSection = () => {
  return (
    <section className="location-section">
      <div className="location-container">
        <div className="location-header">
          <div className="location-badge">
            <div className="location-badge-line"></div>
            <span className="location-badge-text">FIND US</span>
            <div className="location-badge-line"></div>
          </div>
          <h2 className="location-title">
            Our <span className="location-title-highlight">Location</span>
          </h2>
          <p className="location-subtitle">
            Conveniently located in Englewood, Colorado
          </p>
        </div>

        <div className="location-content">
          <div className="location-map-container">
            <div className="location-map-wrapper">
              {/* Replace with an embedded Google Map */}
              <div className="location-map-placeholder">
                {/* Map placeholder with pin drop animation */}
                <div className="location-map-background">
                  <div className="location-map-pin-container">
                    <div className="location-map-pin-wrapper">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="location-map-pin-icon" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <div className="location-map-pin-pulse"></div>
                    </div>
                  </div>
                  <div className="location-map-placeholder-text">
                    <p className="location-map-placeholder-title">Google Maps embed placeholder</p>
                    <p className="location-map-placeholder-subtitle">(Embed map showing 88 Inverness Circle East, Unit K103, Englewood, CO 80112)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="location-info-container">
            <div className="location-info-wrapper">
              <div className="location-info-accent"></div>
              <div className="location-info-content">
                <div className="location-info-inner">
                  <div>
                    <div className="location-info-header">
                      <div className="location-info-icon-container">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="url(#location-gradient)" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="location-info-icon"
                        >
                          <defs>
                            <linearGradient id="location-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#14b8a6" />
                            </linearGradient>
                          </defs>
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <h3 className="location-info-title">ReThink Mental Health</h3>
                    </div>
                    
                    <div className="location-info-details">
                      <div className="location-info-item">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="location-info-item-icon" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <div className="location-info-item-content">
                          <p className="location-info-item-label">Address:</p>
                          <p>88 Inverness Circle East, Unit K103</p>
                          <p>Englewood, CO 80112</p>
                        </div>
                      </div>
                      
                      <div className="location-info-item phone">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="location-info-item-icon center" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <div className="location-info-item-content">
                          <p className="location-info-item-label">Phone:</p>
                          <p>303-406-0784</p>
                        </div>
                      </div>
                      
                      <div className="location-info-item fax">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="location-info-item-icon center" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 008 7v5.5a2.5 2.5 0 01-5 0V5a1 1 0 00-1-1H3zM16 3a1 1 0 00-1 1v6h-1.5a1 1 0 00-1 1v7a1 1 0 001 1h2a2.5 2.5 0 010-5h-2v-2h1.5a2.5 2.5 0 010-5H16z" />
                        </svg>
                        <div className="location-info-item-content">
                          <p className="location-info-item-label">Fax:</p>
                          <p>720-307-2357</p>
                        </div>
                      </div>
                      
                      <div className="location-info-item email">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="location-info-item-icon center" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <div className="location-info-item-content">
                          <p className="location-info-item-label">Email:</p>
                          <a 
                            href="mailto:info@rethinkcare.org" 
                            className="location-info-email-link"
                          >
                            info@rethinkcare.org
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="https://maps.google.com/?q=88+Inverness+Circle+East,+Unit+K103,+Englewood,+CO+80112" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="location-info-maps-link"
                  >
                    <span className="location-info-maps-text">Open in Google Maps</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="location-info-maps-icon" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;