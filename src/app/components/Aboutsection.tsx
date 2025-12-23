import Image from "next/image";
import Link from "next/link";

export type AboutSectionProps = {
  subtitle?: string;
  title: string;
  description: string;
  buttonLabel: string;
  imageSrc: string;
  detailText: string;
  hideButton?: boolean;
};

export default function AboutSection({
  subtitle ,
  title,
  description,
  buttonLabel,
  imageSrc,
  detailText,
  hideButton = false,
}: AboutSectionProps) {
  return (
    <section id="Aboutsection" className="w-full py-16 bg-[#F6F6F2]">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="relative w-full md:w-[380px] h-[320px] md:h-[340px] flex-shrink-0">
          <Image
            src={imageSrc}
            alt="About section"
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 380px"
          />
        </div>
        <div className="hidden md:block w-px h-[220px] bg-[#253043]/30 mx-4" />
        <div className="flex-1 flex flex-col items-start gap-2">
          <span className="uppercase tracking-widest text-sm text-[#9A9162] font-medium mb-2">{subtitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2E45] mb-2 leading-tight">{title}</h2>
          <p className="text-[#1e3b63] text-base md:text-lg mb-4">{description}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-8 px-4 text-center md:text-left">
        <p className="text-[#253043] text-base md:text-lg mb-4">{detailText}</p>
      </div>
      {!hideButton && (
        <Link href="/about" className="bg-[#1E2E45] flex w-48 mx-auto justify-center hover:bg-[#253043] text-white font-semibold px-8 py-3 rounded transition my-8">{buttonLabel}</Link>
      )}
    </section>
  );
}