import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export type ExperienceItem = {
  label: string;
};

const experienceItems: ExperienceItem[] = [
  { label: "Success Handled Cases" },
  { label: "Responsible Raised" },
  { label: "Success Handled Cases" },
  { label: "Responsible Raised" },
];

export default function ExperienceSection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="relative w-full md:w-[340px] h-[260px] flex-shrink-0 mb-8 md:mb-0">
          <Image
            src="/Assets/balance.png"
            alt="Experience"
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 340px"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E2E45] mb-2">28 Years Has Been A Legal Attorney And Consulting</h2>
          <hr className="w-full border-t border-[#BDBDBD] my-2" />
          <ul className="mt-2 space-y-3">
            {experienceItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-[#253043] text-base">
                <FaCheckCircle className="text-[#9A9162]" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
} 