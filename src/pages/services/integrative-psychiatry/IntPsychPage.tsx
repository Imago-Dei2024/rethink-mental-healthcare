import IntegrativePsychIntroSection from "../../../components/services/IntegrativePsychPage/IntegrativePsychIntroSection";
import IntegrativePsychHeroSection from "../../../components/services/IntegrativePsychPage/IntegrativePsychHeroSection";


function IntPsychPage () {
  return (
    <div> 
      <section id="int-psych-hero"> 
        <IntegrativePsychHeroSection />
      </section> 

      <section id="int-psych-intro-section"> 
        <IntegrativePsychIntroSection />
      </section>
    </div>
  )
}

export default IntPsychPage