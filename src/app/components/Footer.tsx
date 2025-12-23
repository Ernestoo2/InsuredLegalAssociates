import Image from "next/image";
import Link from "next/link";
import { FaBalanceScale, FaGavel, FaUniversity, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { services } from "../services/_components/type";

// Update the type to allow About Us to have a description and social links
export type FooterSection = {
  title: string;
  description?: string;
  links?: { label: string; href?: string; icon?: React.ReactNode }[];
  socialLinks?: { label: string; href: string; icon: React.ReactNode }[];
};



const footerSections: FooterSection[] = [
  {
    title: "About Us",
    links: [
      { label: "Who we are", href: "/about", icon: <FaBalanceScale className="inline mr-2" /> },
      { label: "Business Law", icon: <FaGavel className="inline mr-2" /> },
      { label: "Education Law", icon: <FaUniversity className="inline mr-2" /> }
    ],
    socialLinks: [
      { label: "Facebook", href: "https://facebook.com", icon: <FaFacebook className="inline mr-2" /> },
      { label: "Twitter", href: "https://twitter.com", icon: <FaTwitter className="inline mr-2" /> },
      { label: "LinkedIn", href: "https://linkedin.com", icon: <FaLinkedin className="inline mr-2" /> }
    ]
  },
  {
    title: "Services",
    links: services.map((service)  => ({ 
      label: service.title,
      href: `/services/${service.id}`
    }))
  }, 
  {
    title: "Page",
    links: [
      { label: "Lawyer", href: "/lawyer" },
      { label: "Cases", href: "/cases" }
    ]
  },
  {
    title: "Links",
    links: [
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" }
    ]
  },
  {
    title: "Contact Us",
    links: [
      { label: "Email: officiallucymorrison@gmail.com", icon: <FaEnvelope className="inline mr-2" /> },
      { label: "Phone: 08104980428", icon: <FaPhone className="inline mr-2" /> },
      { label: "Address: 187 Adeola Odeku, Ikoyi", icon: <FaMapMarkerAlt className="inline mr-2" /> }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#253043] text-white py-10 px-8">
      <div className="w-1/2 mx-auto flex items-center justify-center gap-4 mb-6">
        <Image src="/Assets/Logo.png" width={40} height={40} alt="About Us logo" />
        <span className="font-bold text-xl">Insured Legal Associates</span>
      </div>
      <hr className="my-4 mx-auto w-1/2 items-center justify-center border border-white/20" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-6">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold mb-2">{section.title}</h4>
            {section.description && (
              <p className="text-xs text-white/60 mb-2">{section.description}</p>
            )}
            {section.links && (
              <ul className="space-y-1">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {link.icon}
                    {link.href ? (
                      <Link href={link.href} className="hover:underline">{link.label}</Link>
                    ) : (
                      link.label
                    )}
                  </li>
                ))}
              </ul>
            )}
            {/* Social media links only for About Us */}
            {section.socialLinks && (
              <div className="flex gap-3 mt-3">
                {section.socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="hover:text-blue-400 text-lg"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <hr className="my-4 border border-white/20" />
      <p className="text-center text-xs text-white/60">
        Copyright ©{new Date().getFullYear()} Insured Legal Associates. All rights reserved.
      </p>
    </footer>
  );
}