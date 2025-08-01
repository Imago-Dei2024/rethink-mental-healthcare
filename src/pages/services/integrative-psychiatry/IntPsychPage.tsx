import IntegrativePsychIntroSection from "../../../components/services/IntegrativePsychPage/IntegrativePsychIntroSection";
import IntegrativePsychHeroSection from "../../../components/services/IntegrativePsychPage/IntegrativePsychHeroSection";
import IntegrativePsychTreatmentSection from "../../../components/services/IntegrativePsychPage/IntegrativePsychTreatmentSection";


function IntPsychPage () {
  return (
    <div> 
      <section id="int-psych-hero"> 
        <IntegrativePsychHeroSection />
      </section> 

      <section id="int-psych-intro-section"> 
        <IntegrativePsychIntroSection />
      </section> 

      <section id="conditions-we-treat"> 
        <IntegrativePsychTreatmentSection /> 
      </section>
    </div>
  )
}

export default IntPsychPage