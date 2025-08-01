import AboutPhilosophySection from "../../components/about/AboutPhilosophy";
import AboutHeroSection from "../../components/about/AboutHeroSection";
import MissionSection from "../../components/about/MissionSection";
import AboutOurTeamSection from "../../components/about/AboutOurTeamSection";
import LocationSection from "../../components/layout/LocationSection";

function AboutPage () {
  return (
    <div>
      <section id="about-hero-section" > 
        <AboutHeroSection /> 
      </section> 

      <section id="our-mission" > 
        <MissionSection />
      </section> 

      <section id="our-approach"> 
        <AboutPhilosophySection />
      </section>  

      <section id="our-team" > 
        <AboutOurTeamSection />
      </section> 

      <section id="our-office" > 
        <p>Our Office Section</p>
      </section> 

      <section id="our-location"> 
        <LocationSection />
      </section>

    </div>
  )
};

export default AboutPage