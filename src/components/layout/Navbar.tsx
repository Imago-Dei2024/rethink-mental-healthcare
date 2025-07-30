import * as React from "react";
import { NavigationMenu } from "radix-ui";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "./styles.css";



const Navbar = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger"> 
            About Us <CaretDownIcon className="CarretDown" aria-hidden />
          </NavigationMenu.Trigger>  

          <NavigationMenu.Content className="NavigationMenuContent"> 
            <ul className="List one"> 
              <li style={{gridRow: "span 3"}}> 
                <NavigationMenu.Link asChild> 
                  <a className="Callout" href="/AboutPage#about-hero-section"> 
                    <img 
                      src="/logo/ReThink-Logo.svg" 
                      alt="ReThink Logo" 
                      width="38"
                      height="38" 
                      style={{ fill : 'white' }} 
                      /> 
                    <div className="CalloutHeading">Who We Are</div> 
                    <p className="CallOutText"> 
                      Discover our mission, our approach, and the communities we empower.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>  

              <ListItem href="/AboutPage#our-mission" title="Our Mission"> 
                Our Mission & Purpose. Why we do what we do.
              </ListItem>

              <ListItem href="/AboutPage#our-approach" title="Our Approach"> 
                Our Approach & Philosphy. Our Innovative Approach to Mental Health. 
              </ListItem>

              <ListItem href="/AboutPage#our-team" title="Our Team"> 
                Meet the dedicated professionals behind our clinic.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger"> 
            Our Services <CaretDownIcon className="CaretDown" aria-hidden /> 
          </NavigationMenu.Trigger> 
          <NavigationMenu.Content className="NavigationMenuContent"> 
            <ul className="List two"> 
              <li style={{ gridRow: "span 4" }}></li>

              <ListItem 
                title="Integrative Psychiatry"
                href="/IntPsychPage#int-psych-hero" 
                > 
                A holistic approach to mental wellness, combining traditional and complementary therapies.
              </ListItem> 

              <ListItem 
                title="Ketamine Therapy" 
                href="/KetaminePage#ketamine-hero" 
                > 
                An innovative, rapid acting treatment for depression and other mood disorders 
              </ListItem> 

              <ListItem 
                title="Addiction Treatment" 
                href="/AddictionPage#addiction-hero" 
                > 
                Compassionate, Evidenced based care to help support you on your journey 
              </ListItem> 

              <ListItem 
                title="Qb Test for ADHD" 
                href="/QBTestingPage#qb-hero" 
                > 
                Objective, data-driven testing for accurate ADHD diagnosis and treatment monitoring. 
              </ListItem>  

              <ListItem 
                title="First Responder Program" 
                href="/FirstResponderPage#first-responder-hero" 
                > 
                Specialized, confidential care for law enforcement, firefighters, and paramedics. 
              </ListItem> 

              <ListItem 
                title="Spravato® (Esketamine)" 
                href="/SpravatoPage#spravato-hero" 
                > 
                An FDA-approved nasal spray for treatment-resistant depression. 
              </ListItem> 

              <ListItem 
                title="Genetic Testing" 
                href="/GeneticTestingPage#genetic-hero" 
                > 
                Personalize your treatment plan based on your unique genetic profile. 
              </ListItem> 

              <ListItem 
                title="Nutrition Counseling" 
                href="/NutritionPage#nutrition-hero" 
                > 
                Explore the connection between diet and mental health with our expert guidance 
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link  
            className="NavigationMenuLink" 
            href="/FirstResponderPage#first-responder-hero" 
            > 
            First Responders 
          </NavigationMenu.Link> 
        </NavigationMenu.Item> 

        <NavigationMenu.Item> 
          <NavigationMenu.Trigger className="NavigationMenuTrigger"> 
            Wellness <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger> 
          <NavigationMenu.Content className="NavigationMenuContent"> 
            <ul className="List three">
              <li style={{ gridRow: "span 1" }}> </li> 

              <ListItem 
                title="Thorn & Fullscript" 
                href="/ThorneFullscriptPage#thorne-fullscript-hero" 
                > 
                Access high-quality supplements and wellness products. 
              </ListItem> 

              <ListItem 
                title="NAD+ Therapy" 
                href="/NadPage#nad-hero" 
                > 
                Boost cellular health and cognitive function with NAD+ infusions. 
              </ListItem> 
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator"> 
          <div className="Arrow" />
        </NavigationMenu.Indicator> 
      </NavigationMenu.List> 

      <div className="ViewportPosition"> 
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>

	  </NavigationMenu.Root>
  );
}; 

type ListItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  ),
);

export default Navbar