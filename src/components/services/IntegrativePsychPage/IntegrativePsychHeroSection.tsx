import './IntegrativePsychHeroSection.css';

function IntegrativePsychHeroSection () {
  return (
    <div> 
        <section id="hero-integrative-psych" className="integrative-psych-hero-section">
            {/* Background with gradient */}
            <div 
                className="integrative-psych-hero-background-container"
                style={{ 
                backgroundImage: "url('images/background/gradient-7.jpg')"
                }}
            >
                
                {/* Subtle animated light effect */}
                <div className="integrative-psych-hero-light-effect">
                <svg width="100%" height="100%" className="integrative-psych-hero-animated-glow">
                    <defs>
                    <radialGradient id="integrative-psych-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>
                    </defs>
                    <ellipse cx="50%" cy="50%" rx="60%" ry="40%" fill="url(#integrative-psych-glow)" />
                </svg>
                </div>
                
                {/* Subtle diagonal lines */}
                <div className="integrative-psych-hero-diagonal-line-bottom"></div>
                <div className="integrative-psych-hero-diagonal-line-top"></div>
            </div>
            
            <div className="integrative-psych-hero-content-container">
                <div className="integrative-psych-hero-content-inner">
                {/* Title with animation */}
                <div className="integrative-psych-hero-card">
                    <div className="integrative-psych-hero-badge">
                    <div className="integrative-psych-hero-badge-line"></div>
                    <span className="integrative-psych-hero-badge-text">HOLISTIC CARE</span>
                    <div className="integrative-psych-hero-badge-line"></div>
                    </div>
                    <h1 className="integrative-psych-hero-title">
                    <span className="integrative-psych-hero-title-gradient">Integrative Psychiatry</span>
                    </h1>
                    <p className="integrative-psych-hero-description">
                    A whole-person approach to mental wellness, combining traditional psychiatry with evidence-based complementary therapies for optimal healing.
                    </p>
                </div> 
                </div>
            </div>
        </section>

    </div>
  )
}

export default IntegrativePsychHeroSection