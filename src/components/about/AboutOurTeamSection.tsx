import './AboutOurTeamSection.css';

// Team member data structure
const teamMembers = [
  {
    id: 1,
    name: 'Karen Laber',
    title: 'PMHNP-BC, Founder',
    bio: 'Karen is a Psychiatric Mental Health Nurse Practitioner. With over 25 years of experience as an EMT, ER, ICU and flight nurse, Karen\'s experiences in these roles came with a great personal cost, as any nurse or responder can relate to.  She realized that there was a need for both culturally relevant and competent mental health care, where responders could get help from someone who understands the lifestyle and demands of responder life, and the impact it has. Her passion for treating first responders and their families led her to become a board certified psychiatric mental health nurse practitioner (PMHNP-BC), and together with her husband, they founded ReThink Mental Health and Wellness.  She enjoys teaching, especially peer support trainings for several local police, fire, and EMS, agencies. She also lectures for paramedic and nursing students sharing lessons she has learned in her career and how to avoid and overcome secondary trauma. She leads a secondary trauma and resiliency course on occasion with a local non-profit.  She is also certified in weight loss medicine and peptide therapy and believes mental health includes caring for the entire body. She takes an individualized, person-centered approach to care. She is married to a Police Officer and has two grown boys. She loves music, the outdoors, and is an avid big game hunter. Her pup Lilly also joins her at the office every day.',
    image: '/images/team/Karen-Laber.jpg',
  },
  {
    id: 2,
    name: 'Erin Webb',
    title: 'Psychiatric Nurse Practitioner - PMHNP-BC',
    bio: 'Erin is a Psychiatric Mental Health Nurse Practitioner with over 15 years of nursing experience working with military members and their families, as well as Veterans. As a Navy Veteran herself, Erin has a passion for serving those who serve our country and community. She believes in a holistic approach to mental wellness, recognizing that resilience and healing arent attained with a one-size-fits-all treatment plan, but rather one that has been tailored to each individuals unique desires, needs, and often age.  Erin also enjoys supporting and caring for young children and older adults.  Because of her current and past experience in the Navy, she understands the intricacies of caring for those, and the families of those, that serve, as well as first responders. Erin was born and raised in Arizona and lived all over the country during her nearly 12 years of active-duty service. Now in Colorado, she remains a member of the United States Navy Reserves. Erin is also married to a Navy Veteran, with whom she shares two children and two dogs. She enjoys spending time with her family, listening to true crime podcasts, gardening and crafting.',
    image: '/images/team/Erin-Webb.jpg',
  },
  {
    id: 3,
    name: 'Jackie Ewer',
    title: 'Psychiatric Mental Health Nurse Practitioner - RN, CCRN',
    bio: 'Jackie is long-time Registered Nurse and ReThinks Ketamine and IV Wellness Program Manager and, She has worked with clients of all ages throughout her career.  Her nursing expertise includes Trauma nursing, ICU, interventional radiology, medical robotics, she also has a deep passion for caring for those who have suffered spinal cord injuries, traumatic brain injuries (TBI), She also worked in mental health care where she has managed psychiatry practices , mobile IV and ketamine programs prior to joining our team at ReThink. Outside of her professional life, she enjoys spending time with her two sons, furry four-legged family members, traveling, live music, sports, and exploring new restaurants around town.',
    image: '/images/team/Jackie-Ewer.jpg',
  },
  {
    id: 4,
    name: 'Brooklyne Armbruster',
    title: 'Administrative Assistant',
    bio: 'Brooklyne is an integral part of our team here at ReThink. She keeps the office running smoothly and we would be lost without her! She welcomes everyone who walks through our door with her contagious smile and energy. Brooklyne proudly comes from a long line of Emergency Responders and Veterans who are her inspiration for working in healthcare. Her mom is a long-time ER/ICU nurse (and one of the funniest people in the world), and two very special grandfathers. One served our country in WWII as a paratrooper, and the other served in the Airforce in Vietnam, as well as being a Houston Police K9 Unit Officer. Brooklyne has an innate caregiver heart full of compassion, and coupled with her incredibly funny sense of humor, she keeps us all smiling! In her free time she enjoys paddleboarding, music, and animals. She is the parent of a cantankerous orange kitty named Tigger, AKA "Mista", who sadly, does NOT enjoy paddle boarding.  ',
    image: '/images/team/Brookelyne-Armbruster.jpg',
  },
  {
    id: 5,
    name: 'Lilly',
    title: 'Our Therapy Dog',
    bio: 'Lilly is ReThink Mental Health and Wellness resident therapy dog in training. She is certain that she is actually the Office Manager, door greeter, couch warmer, and generally in charge of all things. She is eagerly working on her service dog training and certification. During your appointment, you will likely meet her in our waiting room with one of her stuffed animals or patrolling the halls looking for someone to give hugs and kisses to! She will frequently present her beloved toys to you as a friendship gesture when you arrive. She joins Karen during client sessions and helps provide stress relief and comfort to clients. She especially loves to give hugs with her fluffy paws.  She has the gift of "lying puppy dog eyes", which she uses to make others believe she is in need of food and lacking attention. We assure you, she is fed and spoiled, so don\'t believe her!',
    image: '/images/team/Lilly-Bug.jpg',
  },
];

const AboutOurTeamSection = () => {
  return (
    <section id="team" className="about-our-team-section">
      <div className="about-our-team-container">
        <div className="about-our-team-header">
          <div className="about-our-team-badge">
            <div className="about-our-team-badge-line"></div>
            <span className="about-our-team-badge-text">EXPERT CARE</span>
            <div className="about-our-team-badge-line"></div>
          </div>
          <h2 className="about-our-team-title">
            Meet Our <span className="about-our-team-title-highlight">Team</span>
          </h2>
          <p className="about-our-team-subtitle">
            Dedicated professionals committed to your care
          </p>
        </div>

        {/* Primary Care Providers Section */}
        <div className="about-our-team-primary-section">
          <div className="about-our-team-section-header">
            <div className="about-our-team-section-divider">
              <div className="about-our-team-divider-line"></div>
              <span className="about-our-team-section-title">Primary Care Providers</span>
              <div className="about-our-team-divider-line"></div>
            </div>
          </div>

          <div className="about-our-team-grid primary">
            {teamMembers.filter(member => [1, 2, 3].includes(member.id)).map((member) => (
              <div key={member.id} className="about-our-team-card">
                <div className="about-our-team-card-image-wrapper">
                  {/* Accent top line */}
                  <div className="about-our-team-card-accent"></div>
                  
                  {/* Image container with overlay hover effect */}
                  <div className="about-our-team-card-image-container">
                    <img 
                      src={member.image}
                      alt={`Photo of ${member.name}`}
                      className="about-our-team-card-image"
                    />
                    <div className="about-our-team-card-overlay"></div>
                  </div>
                </div>
                
                <div className="about-our-team-card-content">
                  <h3 className="about-our-team-card-name">{member.name}</h3>
                  <p className="about-our-team-card-title">{member.title}</p>
                  
                  <div className="about-our-team-card-bio-container">
                    <p className="about-our-team-card-bio-preview">{member.bio}</p>
                    
                    <details className="about-our-team-card-details">
                      <summary className="about-our-team-card-details-summary">
                        <span>Read more</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="about-our-team-card-details-icon" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </summary>
                      <p className="about-our-team-card-details-content">{member.bio}</p>
                    </details>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Administration and Support Section */}
        <div className="about-our-team-support-section">
          <div className="about-our-team-section-header">
            <div className="about-our-team-section-divider">
              <div className="about-our-team-divider-line"></div>
              <span className="about-our-team-section-title">Office Administration and Support</span>
              <div className="about-our-team-divider-line"></div>
            </div>
          </div>

          <div className="about-our-team-grid support">
            {teamMembers.filter(member => [4, 5].includes(member.id)).map((member) => (
              <div key={member.id} className="about-our-team-card">
                <div className="about-our-team-card-image-wrapper">
                  {/* Accent top line */}
                  <div className="about-our-team-card-accent"></div>
                  
                  {/* Image container with overlay hover effect */}
                  <div className="about-our-team-card-image-container">
                    <img 
                      src={member.image}
                      alt={`Photo of ${member.name}`}
                      className="about-our-team-card-image"
                    />
                    <div className="about-our-team-card-overlay"></div>
                  </div>
                </div>
                
                <div className="about-our-team-card-content">
                  <h3 className="about-our-team-card-name">{member.name}</h3>
                  <p className="about-our-team-card-title">{member.title}</p>
                  
                  <div className="about-our-team-card-bio-container">
                    <p className="about-our-team-card-bio-preview">{member.bio}</p>
                    
                    <details className="about-our-team-card-details">
                      <summary className="about-our-team-card-details-summary">
                        <span>Read more</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="about-our-team-card-details-icon" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </summary>
                      <p className="about-our-team-card-details-content">{member.bio}</p>
                    </details>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurTeamSection;