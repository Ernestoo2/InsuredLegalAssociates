import Image from "next/image";
import Link from "next/link";

export type Case = {
  title: string;
  description: string;
  imageSrc: string;
  buttonLabel: string;
  buttonHref: string;
};

export const cases: Case[] = [
  {
    title: "The Case of William Accused Corruption of Money at Gony Bank",
    description: "Corruption Allegation: R v. William (2020) - Successfully defended a client against corruption charges, resulting in a full acquittal and restoration of reputation.",
    imageSrc: "/Assets/image1.png",
    buttonLabel: "See detail",
    buttonHref: "/cases"
  },
  {
    title: "The Case of William Accused Corruption of Money at Gony Bank",
    description: "Financial Crime Defense: R v. William (2020) - Our legal team uncovered critical evidence that led to the dismissal of all charges in a high-profile financial crime case.",
    imageSrc: "/Assets/image32.png",
    buttonLabel: "See detail",
    buttonHref: "/cases"
  },
];


export default function CasesSection() {
  return (
    <section className="w-full py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="block text-lg font-semibold text-[#253043] mb-1">Cases</span>
            <h2 className="text-2xl md:text-3xl font-bold text-left text-[#1E2E45]">We Have Handled Cases<br />From Some Of Our Clients</h2>
          </div>
          <Link href="/about" className="text-[#1E2E45] text-sm font-medium flex items-center gap-1 hover:underline">
            See more <span className="ml-1">&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col overflow-hidden ${idx === 1 ? ' md:mt-12' : ''}`}
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-6 gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#1E2E45] mb-2">{item.title}</h3>
                  <p className="text-[#253043] text-sm mb-4">{item.description}</p>
                </div>
                <Link
                  href={item.buttonHref}
                  className="inline-block bg-[#1E2E45] hover:bg-[#253043] text-white font-semibold px-6 py-2 rounded transition w-max"
                >
                  {item.buttonLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 