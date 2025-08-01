import './AboutHeroSection.css';

function AboutHeroSection () {
  return (
    <div> 
        <section id="hero-about" className="about-hero-section">
            {/* Background with gradient */}
            <div 
                className="background-container"
                style={{ 
                backgroundImage: "url('images/background/hero-ocean.jpg')"
                }}
            >
                
                {/* Subtle animated light effect */}
                <div className="light-effect">
                <svg width="100%" height="100%" className="animated-glow">
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
                <div className="diagonal-line-bottom"></div>
                <div className="diagonal-line-top"></div>
            </div>
            
            <div className="content-container">
                <div className="content-inner">
                {/* Title with animation */}
                <div className="card">
                    <div className="badge">
                    <div className="badge-line"></div>
                    <span className="badge-text">OUR STORY</span>
                    <div className="badge-line"></div>
                    </div>
                    <h1 className="title">
                    About <span className="title-gradient">ReThink Mental Health</span>
                    </h1>
                    <p className="description">
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