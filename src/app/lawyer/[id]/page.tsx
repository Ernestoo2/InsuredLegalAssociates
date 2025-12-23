"use client"
import PageHero from "../../components/PageHero";
import QualityLegalSection from "../../components/QualityLegal";
import TestimonialsSection from "../../components/TestimonialsSection";
import ExperienceSection from "../../components/ExperienceSection";
import Image from "next/image";
import { useParams } from "next/navigation";
import CasesSection from "@/app/components/CasesSection";

const lawyers = [
  {
    id: "laitman-harry",
    name: "Laitman Harry",
    title: "Senior Business Lawyer",
    imageSrc: "/Assets/lawyer1.png",
    bio: "Laitman Harry has over a decade of experience representing clients in business litigation, contract disputes, and regulatory matters. He is known for his strategic thinking and commitment to client success.",
    experience: 12,
    cases: 662,
    clients: 128,
  },
  {
    id: "nada-geomorgant",
    name: "Nada Geomorgant",
    title: "Senior Business Lawyer",
    imageSrc: "/Assets/lawyer2.png",
    bio: "Nada Geomorgant specializes in corporate law, mergers and acquisitions, and employment disputes. Her clients value her attention to detail and results-driven approach.",
    experience: 12,
    cases: 662,
    clients: 128,
  },
  {
    id: "desy-willy",
    name: "Desy Willy",
    title: "Senior Business Lawyer",
    imageSrc: "/Assets/lawyer3.png",
    bio: "Desy Willy has successfully defended clients in high-profile financial crime cases and is recognized for her expertise in complex litigation.",
    experience: 12,
    cases: 662,
    clients: 128,
  },
  {
    id: "hernando-jully",
    name: "Hernando Jully",
    title: "Senior Business Lawyer",
    imageSrc: "/Assets/lawyer5.png",
    bio: "Hernando Jully is a trusted advisor in commercial law, helping businesses navigate legal challenges and achieve their goals.",
    experience: 12,
    cases: 662,
    clients: 128,
  },
  {
    id: "lydia-dary",
    name: "Lydia Dary",
    title: "Senior Business Lawyer",
    imageSrc: "/Assets/laywer4.png",
    bio: "Lydia Dary is dedicated to providing compassionate legal support in family and employment law, ensuring her clients' voices are heard.",
    experience: 12,
    cases: 662,
    clients: 128,
  },
  {
    id: "smilly-hani",
    name: "Smilly Hani",
    title: "Senior Business Lawyer",
    imageSrc: "/Assets/lawyer3.png",
    bio: "Smilly Hani is an expert in dispute resolution and has helped clients achieve favorable outcomes in mediation and arbitration.",
    experience: 12,
    cases: 662,
    clients: 128,
  },
];



export default function LawyerDetailPage() {
  const params = useParams();
  const lawyer = lawyers.find(l => l.id === params?.id) || lawyers[0];

  return (
    <div>
      <PageHero
        title="Lawyer Detail"
        description="Meet our experienced lawyers, each with a proven record of success in their field."
      />
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-80  overflow-hidden">
          <Image
            src={lawyer.imageSrc}
            alt={lawyer.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E2E45] mb-1">{lawyer.name}</h2>
          <span className="text-[#253043] text-base mb-2">{lawyer.title}</span>
          <p className="text-[#253043] text-base mb-4">{lawyer.bio}</p>
          <div className="flex gap-8 mt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1E2E45]">{lawyer.experience}+</div>
              <div className="text-[#253043] text-xs">Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1E2E45]">{lawyer.cases}+</div>
              <div className="text-[#253043] text-xs">Cases Handled</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1E2E45]">{lawyer.clients}+</div>
              <div className="text-[#253043] text-xs">Happy Client</div>
            </div>
          </div>
        </div>
      </section>
      <CasesSection/>
      <ExperienceSection />
      <QualityLegalSection
        title="We Help You With Quality Legal Lawyer"
        description="Our lawyers are recognized for their expertise, dedication, and client-focused service. Learn more about our team and their achievements."
        button="Get Started"
      />
      <TestimonialsSection />
    </div>
  );
}
