import './HomePageHeroSection.css';
// If this is a React Vite project (not Next.js), you should use react-router-dom's Link instead:
import { Link } from 'react-router-dom';

const HomePageHeroSection = () => {
  return (
    <section id="hero-home" className="home-page-hero-section">
      {/* Background with gradient */}
      <div 
        className="home-page-hero-background-container"
        style={{ 
          backgroundImage: "url('/images/background/hero-ocean.jpg')"
        }}
      >
        
        {/* Subtle animated light effect */}
        <div className="home-page-hero-light-effect">
          <svg width="100%" height="100%" className="home-page-hero-animated-glow">
            <defs>
              <radialGradient id="home-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            <ellipse cx="50%" cy="50%" rx="60%" ry="40%" fill="url(#home-glow)" />
          </svg>
        </div>
        
        {/* Subtle diagonal lines */}
        <div className="home-page-hero-diagonal-line-bottom"></div>
        <div className="home-page-hero-diagonal-line-top"></div>
      </div>
      
      <div className="home-page-hero-content-container">
        <div className="home-page-hero-content-inner">
          {/* Title with animation */}
          <div className="home-page-hero-card">
            <div className="home-page-hero-badge">
              <div className="home-page-hero-badge-line"></div>
              <span className="home-page-hero-badge-text">Compassionate, Committed, Courageous</span>
              <div className="home-page-hero-badge-line"></div>
            </div>
            <h1 className="home-page-hero-title">
              Welcome to <span className="home-page-hero-title-gradient">ReThink Mental Health</span>
            </h1>
            <p className="home-page-hero-description">
              Expert psychiatry and medication management with integrative approaches. Our doors are open to everyone.
            </p>
            <div className="home-page-hero-buttons"> {/* START CTA buttons container */}
              <Link to="/AppointmentPage"> {/* START appointment button link */}
                <button className="home-page-hero-button-primary">
                  Book Appointment
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="home-page-hero-button-icon">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link> {/* END appointment button link */}
              <Link to="/ServicesPage"> {/* START services button link */}
                <button className="home-page-hero-button-secondary">
                  Our Services
                </button>
              </Link> {/* END services button link */}
            </div> {/* END CTA buttons container */}
          </div> 
        </div>
      </div>
    </section>
  );
};

export default HomePageHeroSection;