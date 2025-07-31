import styles from './AboutHeroSection.module.css';

function AboutHeroSection () {
  return (
    <div> 
        <section id="hero-about" className={styles.aboutHeroSection}>
            {/* Background with gradient */}
            <div 
                className={styles.backgroundContainer}
                style={{ 
                backgroundImage: "url('images/background/hero-ocean.jpg')"
                }}
            >
                
                {/* Subtle animated light effect */}
                <div className={styles.lightEffect}>
                <svg width="100%" height="100%" className={styles.animatedGlow}>
                    <defs>
                    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>
                    </defs>
                    <ellipse cx="50%" cy="50%" rx="60%" ry="40%" fill="url(#glow)" />
                </svg>
                </div>
                
                {/* Subtle diagonal lines */}
                <div className={styles.diagonalLineBottom}></div>
                <div className={styles.diagonalLineTop}></div>
            </div>
            
            <div className={styles.contentContainer}>
                <div className={styles.contentInner}>
                {/* Title with animation */}
                <div className={styles.card}>
                    <div className={styles.badge}>
                    <div className={styles.badgeLine}></div>
                    <span className={styles.badgeText}>OUR STORY</span>
                    <div className={styles.badgeLine}></div>
                    </div>
                    <h1 className={styles.title}>
                    About <span className={styles.titleGradient}>ReThink Mental Health</span>
                    </h1>
                    <p className={styles.description}>
                    Expert care delivered with compassion, innovation, and a dedication to your wellbeing.
                    </p>
                </div> 
                </div>
            </div>
        </section>

    </div>
  )
}

export default AboutHeroSection