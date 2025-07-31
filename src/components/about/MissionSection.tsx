import styles from './MissionSection.module.css'; 

const MissionSection = () => {
  return (
    <div className={styles.missionSection}> 
      <div className={styles.missionHeader}> 
        <div className={styles.missionIconContainer}> 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="url(#mission-gradient)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={styles.missionIcon} 
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
        <h3 className={styles.missionTitle}>Transforming Mental Health Care</h3>
      </div> 

      <div className={styles.missionContent}> 
        <p className={styles.missionParagraph}> 
          At ReThink Mental Health, our mission is to transform behavioral health care through a compassionate, 
          holistic, and patient-centered approach. We believe that everyone matters and are committed to providing 
          a safe, inclusive space where all individuals can find support, understanding, and empowerment.
        </p>
        <p className={styles.missionParagraph}> 
          Our dedicated team offers personalized care that respects the unique journey of each person, fostering well-being 
          and resilience in a nurturing environment. Together, we work to <span className={styles.missionHighlight}>ReThink</span> and redefine mental health services, 
          ensuring that our doors are always open to everyone.
        </p>
      </div>
    </div>
  );
};

export default MissionSection