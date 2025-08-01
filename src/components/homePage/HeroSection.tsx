import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <div className="hero-section"> 
        <div className="hero-container"> 
            <div className="hero-content"> 
                <div className="hero-content-inner"> 
                    <img 
                        alt="ReThink Mental Health" 
                        src="/logo/ReThink-Logo.svg" 
                        className="hero-logo" 
                    /> 
                    <div className="hero-top-badge"> 
                        <div className="hero-badge-line"></div> 
                        <p className="hero-badge-text"> Compassionate, Committed, & Courageous</p> 
                    </div> 
                    <h1 className="hero-heading"> 
                        Welcome to ReThink Mental Health & Wellness
                    </h1> 
                    <p className="hero-description"> 
                        Expert psychiatry and medication management with integrative approaches. Our doors are open to everyone.
                    </p> 
                    <div className="hero-cta-buttons"> 
                        <a href="/AppointmentPage" className="hero-cta-appointment-button">  
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