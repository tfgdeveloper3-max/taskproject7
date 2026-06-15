"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#", hasDropdown: false },
    { name: "Services", href: "#", hasDropdown: true },
    { name: "Portfolio", href: "#", hasDropdown: false },
    { name: "Pricing", href: "#", hasDropdown: false },
    { name: "Blog", href: "#", hasDropdown: false },
    { name: "Contact", href: "#", hasDropdown: false },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <a href="#" className="flex items-center gap-2 shrink-0">
                        <div className="w-8 h-8 bg-brand-blue rounded-md flex items-center justify-center">
                            <span className="text-white font-bold text-sm">B</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">
                            Logo HERE
                        </span>
                    </a>

                    <div className="hidden lg:flex items-center gap-7">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-1 text-[15px] font-semibold text-gray-700 hover:text-brand-blue transition-colors duration-200"
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={14} className="mt-0.5" />}
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-5">
                        <a
                            href="tel:+11234567890"
                            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors"
                        >
                            <Phone size={16} />
                            <span>+1 (123) 456-7890</span>
                        </a>
                        <a
                            href="#"
                            className="bg-brand-blue text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-blue-dark transition-colors duration-200 shadow-md shadow-brand-blue/25"
                        >
                            Get a Free Quote
                        </a>
                    </div>

                    <button
                        className="lg:hidden p-2 text-gray-700 hover:text-brand-blue transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
                        }`}
                >
                    <div className="pt-2 border-t border-gray-200">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex items-center justify-between py-3 text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors"
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={14} />}
                            </a>
                        ))}
                        <div className="pt-3 mt-2 border-t border-gray-200 space-y-3">
                            <a
                                href="tel:+11234567890"
                                className="flex items-center gap-2 text-sm font-medium text-gray-600"
                            >
                                <Phone size={16} />
                                <span>+1 (123) 456-7890</span>
                            </a>
                            <a
                                href="#"
                                className="block bg-brand-blue text-white px-6 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-brand-blue-dark transition-colors"
                            >
                                Get a Free Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}