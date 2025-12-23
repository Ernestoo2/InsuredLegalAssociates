import Image from "next/image";

export type HeroSectionProps = {
  title: string;
  subtitle?: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
};

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaLabel,
  ctaHref,
  imageSrc,
}: HeroSectionProps) {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4">
        <div className="flex-1 flex flex-col items-start justify-center gap-4">
          {subtitle && <span className="uppercase tracking-widest text-sm text-[#9A9162] font-medium mb-2">{subtitle}</span>}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2 text-left text-[#1E2E45]">
            {title}
          </h1>
          <p className="text-base md:text-lg text-[#1e3b63] mb-4 text-left">{description}</p>
          <a
            href={ctaHref}
            className="inline-block bg-[#1E2E45] hover:bg-[#253043] text-white font-semibold px-8 py-3 rounded transition text-left w-max"
          >
            {ctaLabel}
          </a>
        </div>
        <div className="relative w-full md:w-[400px] h-[320px] md:h-[400px] flex-shrink-0">
          <Image
            src={imageSrc}
            alt="Hero section"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>
    </section>
  );
} 