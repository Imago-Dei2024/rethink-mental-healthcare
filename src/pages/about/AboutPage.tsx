import AboutPhilosophySection from "../../components/about/AboutPhilosophy";
import AboutHeroSection from "../../components/about/AboutHeroSection";
import MissionSection from "../../components/about/MissionSection";
import AboutOurTeamSection from "../../components/about/AboutOurTeamSection";
import LocationSection from "../../components/layout/LocationSection";
import CallToActionV1 from "../../components/ui/CallToActionV1";
import Footer from "../../components/layout/Footer";

function AboutPage () {
  return (
    <div>
      <main> 
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

        <section id="call-to-action-v1"> 
          <CallToActionV1 />
        </section> 
      </main> 

      <footer> 
        <Footer />
      </footer>
    </div>
  )
};

export default AboutPage