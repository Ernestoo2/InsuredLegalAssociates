import React from "react";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  description: string; 
  backgroundImage?: string;
}

export default function PageHero({
  title,
  description,
  backgroundImage = "/Assets/backgroundprop.png", 
}: PageHeroProps) {
  return (
    <section className="relative w-full h-[300px] flex items-center px-16 mb-8">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          style={{ filter: "brightness(0.5)" }}
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex items-center w-full">
        <h1 className="text-5xl font-bold text-white mr-12">{title}</h1>
        <div className="h-24 border-l border-white/50 mx-8" />
        <p className="text-white/90 max-w-xl">{description}</p>
      </div>
    </section>
  );
}
