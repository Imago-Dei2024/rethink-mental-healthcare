import './ServicesHeroSection.css';

const ServicesHeroSection = () => {
  return (
    <section id="hero-services" className="services-hero-section">
      {/* Background with gradient */}
      <div 
        className="services-hero-background-container"
        style={{ 
          backgroundImage: "url('/images/background/services-hero.jpg')"
        }}
      >
        
        {/* Subtle animated light effect */}
        <div className="services-hero-light-effect">
          <svg width="100%" height="100%" className="services-hero-animated-glow">
            <defs>
              <radialGradient id="services-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            <ellipse cx="50%" cy="50%" rx="60%" ry="40%" fill="url(#services-glow)" />
          </svg>
        </div>
        
        {/* Subtle diagonal lines */}
        <div className="services-hero-diagonal-line-bottom"></div>
        <div className="services-hero-diagonal-line-top"></div>
      </div>
      
      <div className="services-hero-content-container">
        <div className="services-hero-content-inner">
          {/* Title with animation */}
          <div className="services-hero-card">
            <div className="services-hero-badge">
              <div className="services-hero-badge-line"></div>
              <span className="services-hero-badge-text">OUR SERVICES</span>
              <div className="services-hero-badge-line"></div>
            </div>
            <h1 className="services-hero-title">
              Comprehensive <span className="services-hero-title-gradient">Mental Health Services</span>
            </h1>
            <p className="services-hero-description">
              From integrative psychiatry to innovative treatments, we offer personalized care tailored to your unique needs and journey.
            </p>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;