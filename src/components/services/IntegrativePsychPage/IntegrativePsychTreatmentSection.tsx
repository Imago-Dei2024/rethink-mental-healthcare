import './IntegrativePsychTreatmentSection.css';

const IntegrativePsychTreatmentSection = () => {
  return (
    <section className="integrative-psych-treatment-section">
      <div className="integrative-psych-treatment-container">
        <div className="integrative-psych-treatment-header">
          <h2 className="integrative-psych-treatment-title">
            Conditions We Treat
          </h2>
          <p className="integrative-psych-treatment-subtitle">
            Comprehensive Care for Various Mental Health Challenges
          </p>
        </div>
        
        <div className="integrative-psych-treatment-grid">
          <div className="integrative-psych-treatment-card">
            <h3 className="integrative-psych-treatment-card-title">Anxiety Disorders</h3>
            <p className="integrative-psych-treatment-card-description">
              Including generalized anxiety, panic disorder, social anxiety, and specific phobias
            </p>
          </div>
          
          <div className="integrative-psych-treatment-card">
            <h3 className="integrative-psych-treatment-card-title">Depression</h3>
            <p className="integrative-psych-treatment-card-description">
              From mild to severe depression, treatment-resistant depression, and seasonal affective disorder
            </p>
          </div>
          
          <div className="integrative-psych-treatment-card">
            <h3 className="integrative-psych-treatment-card-title">Mood Disorders</h3>
            <p className="integrative-psych-treatment-card-description">
              Bipolar disorder, cyclothymia, and persistent mood disorders
            </p>
          </div>
          
          <div className="integrative-psych-treatment-card">
            <h3 className="integrative-psych-treatment-card-title">Trauma & PTSD</h3>
            <p className="integrative-psych-treatment-card-description">
              Addressing both acute and complex trauma with evidence-based approaches
            </p>
          </div>
          
          <div className="integrative-psych-treatment-card">
            <h3 className="integrative-psych-treatment-card-title">ADHD</h3>
            <p className="integrative-psych-treatment-card-description">
              Comprehensive assessment and management for adults and adolescents
            </p>
          </div>
          
          <div className="integrative-psych-treatment-card">
            <h3 className="integrative-psych-treatment-card-title">Stress-Related Conditions</h3>
            <p className="integrative-psych-treatment-card-description">
              Burnout, adjustment disorders, and stress management
            </p>
          </div>
        </div>
        
        <div className="integrative-psych-treatment-footer">
          <p>Our integrative approach can be beneficial for many other conditions. Contact us to discuss your specific needs.</p>
        </div>
      </div>
    </section>
  );
};

export default IntegrativePsychTreatmentSection;