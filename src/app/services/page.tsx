
import ExperienceSection from "../components/ExperienceSection";
import PageHero from "../components/PageHero";
import QualityLegalSection from "../components/QualityLegal";
import TestimonialsSection from "../components/TestimonialsSection";
import ProfessionalServices from "./_components/ProfessionalService";

export default function ServicesPage() {
  
  return (
    <>
      <PageHero
        title="Our Services"
        description={"Family Law: Compassionate guidance through family-related legal matters.\nBusiness Law: Legal support for startups, corporations, and partnerships.\nPrivate Investigator: Confidential investigation services with professional insight."}
      />

      <ProfessionalServices/>
      
       <ExperienceSection/>

       <QualityLegalSection
        title="We Help You With Quality Legal Lawyer"
        description="Our lawyers have a track record of winning complex cases and providing strategic advice to individuals and businesses. Let us help you achieve the best possible outcome."
        button="Get Started"
      />

      <TestimonialsSection />
    </>
  );
}
