import styles from './HeroSection.module.css'; 

const HeroSection = () => {
  return (
    <div className={styles.heroSection}> 
        <div className={styles.heroContainer}> 
            <div className={styles.heroContent}> 
                <div className={styles.heroContentInner}> 
                    <img 
                        alt="ReThink Mental Health" 
                        src="/logo/ReThink-Logo.svg" 
                        className={styles.heroLogo} 
                    /> 
                    <div className={styles.heroTopBadge}> 
                        <div className={styles.heroBadgeLine}></div> 
                        <p className={styles.heroBadgeText}> Compassionate, Committed, & Courageous</p> 
                    </div> 
                    <h1 className={styles.heroHeading}> 
                        Welcome to ReThink Mental Health & Wellness
                    </h1> 
                    <p className={styles.heroDescription}> 
                        Expert psychiatry and medication management with integrative approaches. Our doors are open to everyone.
                    </p> 
                    <div className={styles.heroCtaButtons}> 
                        <a href="/AppointmentPage" className={styles.heroCtaAppointmentButton}>  
                            Book Appointment 
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection