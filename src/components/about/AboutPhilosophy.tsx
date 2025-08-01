import './AboutPhilosophySection.css';

const AboutPhilosophySection = () => {
  return (
    <section className="about-philosophy-section">
      <div className="about-philosophy-container">
        <div className="about-philosophy-grid">
          <div className="about-philosophy-content">
            <div className="about-philosophy-badge">
              <div className="about-philosophy-badge-line"></div>
              <span className="about-philosophy-badge-text">OUR APPROACH</span>
            </div>
            
            <h2 className="about-philosophy-title">
              Our Philosophy on <span className="about-philosophy-title-highlight">Mental Health Care</span>
            </h2>
            
            {/* Decorative element */}
            <div className="about-philosophy-decorative-element"></div>
            
            <div className="about-philosophy-items">
              <div className="about-philosophy-item">
                <h3 className="about-philosophy-item-header">
                  <div className="about-philosophy-icon-container teal">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="about-philosophy-icon teal"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v8"></path>
                      <path d="M8 12h8"></path>
                    </svg>
                  </div>
                  Holistic Understanding
                </h3>
                <p className="about-philosophy-item-text">
                  Mental health is more than just emotions and coping skills. It means understanding all aspects of your unique journey. 
                  There is only one you, and you are celebrated and valued at ReThink. Your physical, spiritual, and mental health all 
                  are a part of who you are, and an imbalance in one affects the others.
                </p>
              </div>
              
              <div className="about-philosophy-item">
                <h3 className="about-philosophy-item-header">
                  <div className="about-philosophy-icon-container purple">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="about-philosophy-icon purple"
                    >
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                    </svg>
                  </div>
                  Safe & Judgment-Free
                </h3>
                <p className="about-philosophy-item-text">
                  We provide a safe and judgment-free environment for you to explore the issues at hand. We are here to see you 
                  as a whole person, and that means incorporating your personal values into your treatment.
                </p>
              </div>
              
              <div className="about-philosophy-item">
                <h3 className="about-philosophy-item-header">
                  <div className="about-philosophy-icon-container indigo">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="about-philosophy-icon indigo"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  Integrative Approach
                </h3>
                <p className="about-philosophy-item-text">
                  Our integrative approach combines the best of conventional medicine with evidence-based complementary therapies. 
                  We believe that effective treatment requires addressing the root causes of distress, not just managing symptoms.
                </p>
              </div>
            </div>
          </div>
          
          <div className="about-philosophy-image-section">
            <div className="about-philosophy-image-wrapper">
              {/* Border glow effect */}
              <div className="about-philosophy-image-border"></div>
              
              {/* Image with hover effect */}
              <div className="about-philosophy-image-container">
                <img 
                  src="/images/About-Us/Our-Phil.jpg"
                  alt="Our integrative approach to mental health care"
                  className="about-philosophy-image"
                />
                
                {/* Overlay gradient */}
                <div className="about-philosophy-image-overlay"></div>
                
                {/* Quote overlay */}
                <div className="about-philosophy-quote-overlay">
                  <blockquote className="about-philosophy-blockquote">
                    &quot;Mental health isn&apos;t about fixing what&apos;s broken. It&apos;s about nurturing what&apos;s strong.&quot;
                  </blockquote>
                  <p className="about-philosophy-quote-attribution">— ReThink Mental Health Philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophySection;