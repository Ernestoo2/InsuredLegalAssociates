"use client"
import PageHero from "../../components/PageHero";
import QualityLegalSection from "../../components/QualityLegal";
import TestimonialsSection from "../../components/TestimonialsSection";
import Image from "next/image";
import { services, servicesP } from "../_components/type";
import React, { useRef, useState } from "react";


const processSteps = [
    {
        icon: "/Assets/frame3.png",
        label: "Discuss Problem",
        iconComponent: (
            <Image src="/Assets/frame3.png" alt="Discuss" width={64} height={64} />
        ),
    },
    {
        icon: "/Assets/frame1.png",
        label: "Make Agreement",
        iconComponent: (
            <Image src="/Assets/frame1.png" alt="Agreement" width={64} height={64} />
        ),
    },
    {
        icon: "/Assets/frame4.png",
        label: "Practice Place",
        iconComponent: (
            <Image src="/Assets/frame4.png" alt="Practice" width={64} height={64} />
        ),
    },
    {
        icon: "/Assets/frame5.png",
        label: "Legal Lawyered",
        iconComponent: (
            <Image src="/Assets/frame5.png" alt="Lawyered" width={64} height={64} />
        ),
    },
];

const lawyers = [
    {
        name: "Desy Willy",
        title: "Senior Business Lawyer",
        imageSrc: "/Assets/lawyer3.png",
    },
    {
        name: "Nada Geomorgant",
        title: "Senior Business Lawyer",
        imageSrc: "/Assets/lawyer2.png",
    },
    {
        name: "Smilly Hani",
        title: "Senior Business Lawyer",
        imageSrc: "/Assets/lawyer3.png",
    },
];

export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params Promise using React.use (Next.js App Router convention)
    const { id } = React.use(params);
    const Allservices = [...services, ...servicesP]
    const service = Allservices.find((s) => s.id === id);

    if (!service) {
        return <div>Service not found</div>;
    }
    return (
        <div className="bg-[#F6F6F2]">
            {/* Hero Section */}
            <PageHero
                title="Services Detail"
                description="Our legal team recently helped a client resolve a complex contract dispute, ensuring their business continued to thrive. We provide expert legal support for all your service needs."
                backgroundImage="/Assets/backgroundprop.png"
            />

            {/* Service Detail Section */}
            <section className="px-4 py-16">
                <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="relative w-full h-80 overflow-hidden">
                        <Image
                            src={service.imageLeft}
                            alt="Service Detail Left"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 320px"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="relative w-full h-40 mb-4 overflow-hidden">
                            <Image
                                src={service.imageRight}
                                alt="Service Detail Right"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 160px"
                            />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1E2E45] mb-2">{service.title}</h2>
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-[#253043] text-base mb-2">{service.description}</p>
                    <p className="text-[#253043] text-sm mb-4">{service.detail}</p>
                    <div className="flex items-center gap-4 mt-2">
                        <span className="text-2xl font-bold text-[#1E2E45]">{service.price}</span>
                        <span className="text-[#253043] text-sm">/ encounter</span>
                    </div>
                    <button className="bg-[#9A9162] text-white font-semibold px-6 py-3 rounded w-max mt-4">Make Appointment</button>

                </div>
            </section>


            {/* Process Section - Zig-Zag Layout */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1E2E45] mb-2">Legal Lawyer Process</h2>
                    </div>
                    <p className="text-[#253043] text-base max-w-md mt-4 md:mt-0">
                        Our proven legal process has helped clients achieve justice in employment, business, and family law. We guide you from consultation to resolution with clarity and care.
                    </p>
                </div>
                <div className="w-full max-w-5xl mx-auto grid grid-cols-2 grid-rows-2 gap-12 py-8">
                    {processSteps.map((step) => (
                        <div
                            key={step.label}
                            className="flex flex-col items-center justify-center"
                        >
                            <div className="w-20 h-20 bg-[#253043] flex items-center justify-center rounded mb-3 shadow-lg">
                                <Image src={step.icon} alt={step.label} width={48} height={48} />
                            </div>
                            <span className="text-[#253043] text-base font-medium text-center block max-w-[120px] leading-tight">
                                {step.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Professional Legal Lawyer Section */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1E2E45] mb-2">Professional Legal Lawyer</h2>
                    <a href="#" className="text-[#1E2E45] text-sm font-medium flex items-center gap-1 hover:underline">See more <span className="ml-1">&rarr;</span></a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {lawyers.map((lawyer, idx) => (
                        <div key={idx} className="flex flex-col items-center rounded-lg overflow-hidden p-6 gap-4 bg-[#F6F6F2]/20 hover:shadow-lg transition">
                            <div className="relative w-32 h-32 mb-2 overflow-hidden rounded-full">
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
            </section>

            {/* Blue Callout Section */}
            <QualityLegalSection
                title="We Help You With Quality Legal Lawyer"
                description="Our lawyers have successfully represented clients in high-stakes litigation, business negotiations, and personal legal matters. Trust us for quality, results-driven legal counsel."
                button="Get Started"
            />

            {/* Testimonials Section */}
            <TestimonialsSection />
        </div>
    );
}
