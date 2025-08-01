import AboutPhilosophySection from "../../components/about/AboutPhilosophy";
import AboutHeroSection from "../../components/about/AboutHeroSection";
import MissionSection from "../../components/about/MissionSection";

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
        <p>Team Section</p>
      </section> 

      <section id="our-office" > 
        <p>Our Office Section</p>
      </section> 

      <section id="our-location"> 
        <p>Our Location Section</p>
      </section>

    </div>
  )
};

export default AboutPage