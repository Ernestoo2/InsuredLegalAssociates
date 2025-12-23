import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { services, ServicesProps } from "../services/_components/type";


export default function ServicesSection() {
  return (
    <section className="w-full p-16 bg-[#1E2E45]">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">
        {/* Left: Image with overlaid heading */}
        <div className="relative w-full md:w-[400px] h-[200px] md:h-[320px] flex-shrink-0 mb-8 md:mb-0">
          <Image
            src="/Assets/Maskgroup.png"
            alt="Professional Services"
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 340px"
          />
          <div className="absolute top-30 left-18 -right-20 inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-2 drop-shadow-lg">
              Professional Services<br />Prepared To Be Your Lawyer Firm
            </h2>
          </div>
        </div>
        {/* Right: List of service links */}
        <div className="flex-1 w-full max-w-md">
          {services.map((service : ServicesProps) => (
            <Link key={service.id} href={`/services/${service.id}`} className="flex items-center justify-between py-4 border-b border-white/30 last:border-b-0">
              <span className="text-white text-base md:text-lg">{service.title}</span>
              <FaArrowRight className="text-white text-lg" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 