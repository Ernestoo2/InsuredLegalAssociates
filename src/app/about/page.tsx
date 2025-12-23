import PageHero from "../components/PageHero";
import AboutSection from "../components/Aboutsection";
import PartnershipSection from "../components/PartnershipSection";
import QualityLegalSection from "../components/QualityLegal";
import Image from "next/image";
import TestimonialsSection from "../components/TestimonialsSection";
import ExperienceSection from "../components/ExperienceSection";
import VisionMissionSection from "./_components/VisionMissionSection";
import SuccessStorySection from "./_components/SuccessStorySection";

export default function AboutPage() {
  return (
    <div className="bg-[#F6F6F2]">
      <PageHero
        title="About Us"
        description="Insured Legal Associates is committed to delivering justice and peace of mind to every client. Our team has resolved high-profile disputes, protected family interests, and set legal precedents in business law."
      
      />
      <AboutSection
        subtitle="About Us"
        title="Helping To Overcome And Ease The Legal Burden"
        description="Insured Legal Associates is dedicated to helping clients overcome legal challenges and achieve peace of mind. Our experienced team has resolved complex disputes, protected family interests, and set legal precedents in business law. We are committed to providing clear guidance and strong advocacy for every client."
        buttonLabel="See detail"
        imageSrc="/Assets/image1.png"
        detailText="Our firm has represented clients in landmark cases involving property, business, and family law. We pride ourselves on delivering personalized solutions, expert advice, and unwavering support from consultation to resolution."
        hideButton={true}
      />
      <PartnershipSection />
      {/* Welcome Message Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10 bg-[#F6F6F2]">
        <div className="relative w-full md:w-[260px] h-[260px] flex-shrink-0 mb-8 md:mb-0">
          <Image
            src="/Assets/image25.png"
            alt="Welcome Message"
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 260px"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-4">
          <span className="uppercase tracking-widest text-sm text-[#9A9162] font-medium mb-2">Welcome Message</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E2E45] mb-2">Hello People, Welcome To Insured Legal Associates</h2>
          <p className="text-[#253043] text-base md:text-lg mb-4">Our firm is dedicated to providing clear legal advice, strong advocacy, and compassionate support for every client, no matter the challenge.</p>
        </div>
      </section>
      <QualityLegalSection
        title="We Help You With Quality Legal Lawyer"
        description="Our lawyers are recognized for their expertise in property, business, and family law, helping clients achieve favorable outcomes in and out of court."
        button="Get Started"
      />
      <VisionMissionSection
        visionHeading="Our Vision"
        visionParagraphs={["We envision a world where justice is accessible to all, and every client receives the highest standard of legal care.", "Our commitment to integrity and excellence drives us to continually set new benchmarks in the legal profession."]}
        missionHeading="Our Mission"
        missionParagraphs={["To provide expert legal representation and personalized solutions for every client.", "We strive to empower individuals and businesses through education, advocacy, and unwavering support."]}
      />
      <SuccessStorySection
        mainImageSrc="/Assets/hammer1.png"
        mainHeading="The Best Award Has Been Given To Insured Legal Associates Legal Lawyer International"
        subHeading="Success Story"
        personImageSrc="/Assets/image24.png"
        testimonial="Insured Legal Associates guided me through a challenging legal process with professionalism and care. Their expertise made all the difference in achieving a positive outcome for my case."
        personName="Denny S"
        personTitle="Lead International Legal"
      />
      <TestimonialsSection />
    </div>
  );
}