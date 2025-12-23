"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/page", label: "Page" },
    { href: "/contact-us", label: "Contact Us" }
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="w-full bg-[#253043] text-white py-6 px-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">
                    <Image
                        src="/Assets/Logo.png"
                        width={25}
                        height={50}
                        alt="Logo"
                    />
                </span>
                <span className="font-semibold text-lg">Insured Legal Associates</span>
            </div>
            <nav>
                <ul className="flex gap-8 text-sm font-semibold">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={
                                    pathname === link.href
                                        ? "text-white border-b-2 border-white"
                                        : "text-white/70 hover:text-white"
                                }
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
