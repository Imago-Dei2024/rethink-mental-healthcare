import './IntegrativePsychGettingStartedSection.css';

const IntegrativePsychGettingStartedSection = () => {
  return (
    <section className="integrative-psych-getting-started-section">
      <div className="integrative-psych-getting-started-container">
        <div className="integrative-psych-getting-started-header">
          <h2 className="integrative-psych-getting-started-title">
            Getting Started
          </h2>
          <p className="integrative-psych-getting-started-subtitle">
            Your Journey to Integrative Mental Health
          </p>
        </div>
        
        <div className="integrative-psych-getting-started-content">
          <div className="integrative-psych-getting-started-card">
            <ol className="integrative-psych-getting-started-list">
              <li className="integrative-psych-getting-started-item">
                <div className="integrative-psych-getting-started-number-container">
                  <div className="integrative-psych-getting-started-number">
                    <span className="integrative-psych-getting-started-number-text">1</span>
                  </div>
                </div>
                <div className="integrative-psych-getting-started-content-wrapper">
                  <h4 className="integrative-psych-getting-started-item-title">Initial Consultation</h4>
                  <p className="integrative-psych-getting-started-item-description">
                    Schedule a comprehensive initial assessment where we'll discuss your health history, current challenges, and goals for treatment.
                  </p>
                </div>
              </li>
              
              <li className="integrative-psych-getting-started-item">
                <div className="integrative-psych-getting-started-number-container">
                  <div className="integrative-psych-getting-started-number">
                    <span className="integrative-psych-getting-started-number-text">2</span>
                  </div>
                </div>
                <div className="integrative-psych-getting-started-content-wrapper">
                  <h4 className="integrative-psych-getting-started-item-title">Comprehensive Assessment</h4>
                  <p className="integrative-psych-getting-started-item-description">
                    We may recommend lab work, genetic testing, or other assessments to gather a complete picture of your health.
                  </p>
                </div>
              </li>
              
              <li className="integrative-psych-getting-started-item">
                <div className="integrative-psych-getting-started-number-container">
                  <div className="integrative-psych-getting-started-number">
                    <span className="integrative-psych-getting-started-number-text">3</span>
                  </div>
                </div>
                <div className="integrative-psych-getting-started-content-wrapper">
                  <h4 className="integrative-psych-getting-started-item-title">Personalized Treatment Plan</h4>
                  <p className="integrative-psych-getting-started-item-description">
                    Together, we'll develop a customized plan that addresses your specific needs, preferences, and goals.
                  </p>
                </div>
              </li>
              
              <li className="integrative-psych-getting-started-item">
                <div className="integrative-psych-getting-started-number-container">
                  <div className="integrative-psych-getting-started-number">
                    <span className="integrative-psych-getting-started-number-text">4</span>
                  </div>
                </div>
                <div className="integrative-psych-getting-started-content-wrapper">
                  <h4 className="integrative-psych-getting-started-item-title">Ongoing Support</h4>
                  <p className="integrative-psych-getting-started-item-description">
                    Regular follow-ups to monitor progress, adjust treatments as needed, and continue to optimize your mental health.
                  </p>
                </div>
              </li>
            </ol>
            
            <div className="integrative-psych-getting-started-cta">
              <a
                href="/appointment"
                className="integrative-psych-getting-started-button"
              >
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrativePsychGettingStartedSection;