import HeroSection from "./components/HeroSection";
import PartnershipSection from "./components/PartnershipSection";
import AboutSection from "./components/Aboutsection";
import ServicesSection from "./components/ServicesSection";
import LawyersSection from "./components/LawyersSection";
import CasesSection from "./components/CasesSection";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import QualityLegalSection from "./components/QualityLegal";

export default function Home() {
  return (
    <div className="bg-[#F6F6F2]">
      <HeroSection
        title="Uphold Truth For Justice With Insured Legal Associates Law Firm"
        subtitle="Legal with Integrity"
        description="Choose us to overcome and ease the legal burden. Professional services prepared to be your lawyer firm."
        ctaLabel="Get Started"
        ctaHref="/lawyer"
        imageSrc="/Assets/image32.png"
      />
      <AboutSection
        subtitle="About Us"
        title="Helping To Overcome And Ease The Legal Burden"
        description="Insured Legal Associates has helped hundreds of clients resolve disputes, protect their rights, and secure justice. Our experienced team is dedicated to guiding you through every legal challenge."
        buttonLabel="See detail"
        imageSrc="/Assets/image1.png"
        detailText="Our firm has represented clients in landmark cases involving property, business, and family law. We are committed to providing clear advice, strong advocacy, and compassionate support from start to finish."
      />
      <PartnershipSection />
      <ServicesSection />
      <LawyersSection />
      <QualityLegalSection
        title="We Help You With Quality Legal Lawyer"
        description="Our lawyers have a proven record of success in court and negotiations. We deliver quality legal services tailored to your needs."
        button="Get Started"
      />
      <CasesSection />
      <TestimonialsSection />
      <ExperienceSection />
    </div>
  );
}
