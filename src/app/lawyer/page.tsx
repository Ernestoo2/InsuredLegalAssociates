import PageHero from "../components/PageHero";
import QualityLegalSection from "../components/QualityLegal";
import TestimonialsSection from "../components/TestimonialsSection";
import Image from "next/image";
import Link from "next/link";

const lawyers = [
  {
    id: "laitman-harry",
    name: "Laitman Harry",
    title: "Senior Business Lawyer",
    imageSrc: "/Assets/lawyer1.png",
  },
  {
    id: "nada-geomorgant",
    name: "Nada Geomorgant",
    title: "Senior Business Lawyer",
    imageSrc: "/Assets/lawyer2.png",
  },
  {
    id: "desy-willy",
    name: "Desy Willy",
    title: "Senior Business Lawyer",
    imageSrc: "/Assets/lawyer3.png",
  },
  {
    id: "hernando-jully",
    name: "Hernando Jully",
    title: "Senior Business Lawyer",
    imageSrc: "/Assets/lawyer5.png",
  },
  {
    id: "lydia-dary",
    name: "Lydia Dary",
    title: "Senior Business Lawyer",
    imageSrc: "/Assets/laywer4.png",
  },
  {
    id: "smilly-hani",
    name: "Smilly Hani",
    title: "Senior Business Lawyer",
    imageSrc: "/Assets/lawyer3.png",
  },
];

export default function LawyerPage() {
  return (
    <div >
      <PageHero
        title="Lawyer"
        description="Meet our team of experienced legal professionals, dedicated to providing you with expert guidance and support in every legal matter."
      />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <span className="block text-lg font-semibold text-[#253043] mb-1">Lawyer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2E45] mb-2">Professional Services Prepared To Be Your Lawyer Firm</h2>
          </div>
          <p className="text-[#253043] text-base max-w-md mt-4 md:mt-0">
            Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {lawyers.map((lawyer, idx) => (
            <Link key={lawyer.id} href={`/lawyer/${lawyer.id}`} className="flex flex-col items-center rounded-lg overflow-hidden p-6 gap-4 bg-[#F6F6F2]/20 hover:shadow-lg transition">
              <div className="relative w-40 h-40 mb-2 overflow-hidden rounded-full">
                <Image
                  src={lawyer.imageSrc}
                  alt={lawyer.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1E2E45] mb-1 text-center">{lawyer.name}</h3>
              <p className="text-[#253043] text-sm text-center">{lawyer.title}</p>
            </Link>
          ))}
        </div>
      </section>
      <QualityLegalSection
        title="We Help You With Quality Legal Lawyer"
        description="Our lawyers have successfully represented clients in complex cases, from business disputes to family law, always prioritizing client success and justice."
        button="Get Started"
      />
      <TestimonialsSection />
    </div>
  );
}
