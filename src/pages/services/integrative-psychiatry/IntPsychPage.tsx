import IntegrativePsychIntroSection from "../../../components/services/IntegrativePsychPage/IntegrativePsychIntroSection";
import IntegrativePsychHeroSection from "../../../components/services/IntegrativePsychPage/IntegrativePsychHeroSection";
import IntegrativePsychTreatmentSection from "../../../components/services/IntegrativePsychPage/IntegrativePsychTreatmentSection";
import IntegrativePsychApproachSection from "../../../components/services/IntegrativePsychPage/IntegrativePsychApproachSection";
import IntegrativePsychBenefitsSection from "../../../components/services/IntegrativePsychPage/IntegrativePsychBenefitsSection";
import IntegrativePsychGettingStartedSection from "../../../components/services/IntegrativePsychPage/IntegrativePsychGettingStartedSection";
import IntegrativePsychFAQSection from "../../../components/services/IntegrativePsychPage/IntegrativePsychFAQSection";


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

      <section id="int-psych-approach" >
        <IntegrativePsychApproachSection />
      </section>  

      <section id="int-psych-benefits"> 
        <IntegrativePsychBenefitsSection />
      </section> 

      <section id="int-psych-getting-started"> 
        <IntegrativePsychGettingStartedSection />
      </section> 

      <section id="int-psych-faq"> 
        <IntegrativePsychFAQSection />
      </section>
    </div>
  )
}

export default IntPsychPage