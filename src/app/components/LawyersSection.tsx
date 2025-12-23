import Image from "next/image";

export type Lawyer = {
  name: string;
  title: string;
  imageSrc: string;
};

const lawyers: Lawyer[] = [
  {
    name: "Jeffrey Smith",
    title: "Senior Attorney",
    imageSrc: "/Assets/image25.png",
  },
  {
    name: "Nida Gonsangit",
    title: "Legal Advisor",
    imageSrc: "/Assets/image24.png",
  },
  {
    name: "Doss Willy",
    title: "Family Law Specialist",
    imageSrc: "/Assets/image25.png",
  },
];

export default function LawyersSection() {
  return (
    <section className="w-full py-20 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#1E2E45]">Professional Lawyers<br />And Advisors With More Experience</h2>
        <p className="text-center text-[#253043] text-base mb-12">Our team of experienced legal professionals is dedicated to providing you with expert guidance and support in every legal matter.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {lawyers.map((lawyer, idx) => (
            <div key={idx} className="flex flex-col items-center rounded-lg overflow-hidden p-6 gap-4">
              <div className="relative w-40 h-40 mb-2 overflow-hidden">
                <Image
                  src={lawyer.imageSrc}
                  alt={lawyer.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 128px"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1E2E45] mb-1 text-center">{lawyer.name}</h3>
              <p className="text-[#253043] text-sm text-center">{lawyer.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 