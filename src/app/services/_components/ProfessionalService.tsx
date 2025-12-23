import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { services, servicesP } from "./type";



export default function ProfessionalServices() {
  // Split services into two columns for the original layout
  const left = services;
  const right = servicesP;

  return (
    <div className="p-16 ">
      <div className="w-full flex flex-col md:flex-row gap-8">
        {/* Left: Image */}
        <div className="w-full md:w-[420px] h-64 md:h-80 flex-shrink-0 relative mb-8 md:mb-0">
          <Image
            src="/Assets/hammertwo.png"
            alt="Professional Services"
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 420px"
          />
        </div>
        {/* Right: Heading and Service List */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="font-bold text-2xl md:text-4xl text-[#3A3A38] mb-8">Professional Services<br />Prepared To Be Your Lawyer Firm</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="flex flex-col gap-2">
              {left.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="flex items-center justify-between py-3 border-b border-[#3A3A38]/20 last:border-b-0 group hover:pl-2 transition-all"
                >
                  <span className="text-[#1E2E45] text-base md:text-lg ">{service.title}</span>
                  <FaArrowRight className="text-[#1E2E45] text-lg group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
            {/* Right column */}
            <div className="flex flex-col gap-2">
              {right.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="flex items-center justify-between py-3 border-b border-[#3A3A38]/20 last:border-b-0 group hover:pl-2 transition-all"
                >
                  <span className="text-[#1E2E45] text-base md:text-lg">{service.title}</span>
                  <FaArrowRight className="text-[#1E2E45] text-lg group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}