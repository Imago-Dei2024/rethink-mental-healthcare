import './MissionSection.css';

const MissionSection = () => {
  return (
    <section id="mission" className="mission-section">
      <div className="mission-container">
        <div className="mission-header">
          <div className="mission-badge">
            <div className="mission-badge-line"></div>
            <span className="mission-badge-text">OUR PURPOSE</span>
            <div className="mission-badge-line"></div>
          </div>
          <h2 className="mission-main-title">
            Our <span className="mission-title-highlight">Mission</span>
          </h2>
          <p className="mission-subtitle">
            Why we do what we do
          </p>
        </div>
        
        <div className="mission-content-wrapper">
          {/* Background decoration */}
          <div className="mission-bg-decoration-top"></div>
          <div className="mission-bg-decoration-bottom"></div>
          
          {/* Card with content */}
          <div className="mission-card">
            <div className="mission-card-gradient-top"></div>
            
            <div className="mission-card-content">
              <div className="mission-card-header">
                <div className="mission-icon-container">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="url(#mission-gradient)" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="mission-icon"
                  >
                    <defs>
                      <linearGradient id="mission-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="mission-card-title">Transforming Mental Health Care</h3>
              </div>
              
              <div className="mission-text-content">
                <p className="mission-paragraph">
                  At ReThink Mental Health, our mission is to transform behavioral health care through a compassionate, 
                  holistic, and patient-centered approach. We believe that everyone matters and are committed to providing 
                  a safe, inclusive space where all individuals can find support, understanding, and empowerment. 
                </p>
                <p className="mission-paragraph">
                  Our dedicated team offers personalized care that respects the unique journey of each person, fostering well-being 
                  and resilience in a nurturing environment. Together, we work to <span className="mission-highlight">ReThink</span> and redefine mental health services, 
                  ensuring that our doors are always open to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;