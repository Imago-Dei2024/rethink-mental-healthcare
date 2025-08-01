import './IntegrativePsychFAQSection.css';

const IntegrativePsychFAQSection = () => {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="faq-subtitle">
            Common Questions About Integrative Psychiatry
          </p>
        </div>
        
        <div className="faq-content">
          <div className="faq-items">
            <div className="faq-item">
              <div className="faq-item-content">
                <h3 className="faq-question">Is integrative psychiatry covered by insurance?</h3>
                <div className="faq-answer">
                  <p>Yes, many aspects of integrative psychiatric care are covered by insurance, including medication management and conventional therapeutic approaches. Some complementary treatments may not be covered. Our staff will help you understand your coverage options.</p>
                </div>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-item-content">
                <h3 className="faq-question">Do I have to stop taking my current medications?</h3>
                <div className="faq-answer">
                  <p>Absolutely not. We work with you where you are. If you're currently taking psychiatric medications, we'll carefully evaluate their effectiveness and side effects before recommending any changes. Any medication adjustments would be done gradually and with careful monitoring.</p>
                </div>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-item-content">
                <h3 className="faq-question">How long will treatment take?</h3>
                <div className="faq-answer">
                  <p>Treatment duration varies based on your individual needs, condition, and response to treatment. Some people notice improvements within a few weeks, while others may need longer-term support. We'll regularly assess your progress and adjust the treatment plan accordingly.</p>
                </div>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-item-content">
                <h3 className="faq-question">Is it safe to combine supplements with prescription medications?</h3>
                <div className="faq-answer">
                  <p>Safety is our primary concern. There can be interactions between supplements and medications, which is why all supplements should be discussed with your provider. Our expertise in both conventional and complementary approaches allows us to safely integrate these treatments when appropriate.</p>
                </div>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-item-content">
                <h3 className="faq-question">Do I need a referral to schedule an appointment?</h3>
                <div className="faq-answer">
                  <p>No, you do not need a referral to schedule an appointment with us. You can contact our office directly to set up an initial consultation. However, some insurance plans may require a referral for coverage, so it's worth checking with your insurance provider.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrativePsychFAQSection;