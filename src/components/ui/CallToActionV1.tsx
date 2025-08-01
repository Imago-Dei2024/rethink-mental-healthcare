import './CallToActionV1.css';

const CallToActionV1 = () => {
  return (
    <section className="call-to-action-v1-section">
      {/* Background with gradient */}
      <div 
        className="call-to-action-v1-background"
        style={{ 
          backgroundImage: "url('/images/background/about-ocean-footer.jpg')"
        }}
      >
        
      </div>
      
      <div className="call-to-action-v1-container">
        <div className="call-to-action-v1-content-wrapper">
          {/* Decorative elements */}
          <div className="call-to-action-v1-decorative-left"></div>
          <div className="call-to-action-v1-decorative-right"></div>
          
          {/* Content with animations */}
          <div className="call-to-action-v1-content">
            <div className="call-to-action-v1-badge">
              <div className="call-to-action-v1-badge-line"></div>
              <span className="call-to-action-v1-badge-text">GET STARTED</span>
              <div className="call-to-action-v1-badge-line"></div>
            </div>
            
            <h2 className="call-to-action-v1-title">
              Schedule Your <span className="call-to-action-v1-title-gradient">Appointment Today</span>
            </h2>
            
            <p className="call-to-action-v1-description">
              Take the first step toward better mental health. Our team is ready to provide compassionate, personalized care.
            </p>
            
            <div className="call-to-action-v1-buttons">
              <a
                href="/appointment"
                className="call-to-action-v1-button"
              >
                <span>Book an Appointment</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="call-to-action-v1-button-icon" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="/contact"
                className="call-to-action-v1-button"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionV1;