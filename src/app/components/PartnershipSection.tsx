import Image from "next/image";

export type Partner = {
  name: string;
  imageSrc: string;
};

const partners: Partner[] = [
  { name: "Daerazo", imageSrc: "/Assets/daerazo.png" },
  { name: "Miguxian", imageSrc: "/Assets/Group2.png" },
  { name: "Jeninalyn", imageSrc: "/Assets/jeninalyn.png" },
  { name: "Superanzo", imageSrc: "/Assets/superanzo.png" },
];

export default function PartnershipSection() {
  return (
    <section id="partnership" className="w-full py-20 ">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-14 text-[#1E2E45]">Our Partnership</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 flex items-center justify-center mb-2">
                <Image src={partner.imageSrc} alt={partner.name} width={96} height={96} className="object-contain" />
              </div>
              <span className="font-medium text-[#1E2E45] text-base md:text-lg text-center">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 