"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import FreeQuoteModal from "./Freequotemodal";

const servicesMenu = [
    {
        label: "Writing Services",
        links: [
            "Book Writing",
            "Ghostwriting",
            "Children's Book Writing",
            "Sci-Fi Writing",
            "Memoir Writing",
            "Fiction Writing",
            "SEO Content Writing",
            "Mystery Writing",
            "Historical Writing",
            "Fantasy Writing",
            "Non-Fiction Writing",
            "Script Writing",
            "Horror Writing",
        ],
    },
    {
        label: "Editing & Publishing",
        links: [
            "Book Proofreading",
            "Book Editing",
            "Ebook Creation",
            "Audiobook Narration",
            "Book Formatting",
            "Children's Book Editing",
            "Book Publishing",
        ],
    },
    {
        label: "Design, Printing & Marketing",
        links: [
            "Book Cover Design",
            "Author Website Design",
            "Book Printing",
            "Book Marketing",
        ],
    },
];

const navLinks = [
    { name: "Home", scrollTo: "hero", hasDropdown: false },
    { name: "About Us", scrollTo: "about", hasDropdown: false },
    { name: "Services", scrollTo: "services", hasDropdown: false },
    { name: "Portfolio", scrollTo: "portfolio", hasDropdown: false },
    { name: "Contact", scrollTo: "contact", hasDropdown: false },
];

const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
};

const slugify = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [activeService, setActiveService] = useState(servicesMenu[0].label);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

    const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleServicesEnter = () => {
        if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
        setServicesOpen(true);
    };

    const handleServicesLeave = () => {
        servicesCloseTimer.current = setTimeout(() => setServicesOpen(false), 150);
    };

    const activeLinks = servicesMenu.find((s) => s.label === activeService)?.links ?? [];

    const navTextColor = "text-white";
    const navHoverColor = "hover:text-blue-300";

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-[#0E1626]/95 backdrop-blur-md shadow-sm"
                        : "bg-[#0E1626]"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-24 lg:h-28">

                        <a href="/" className="flex items-center shrink-0 h-full py-2">
                            <img src="/images/logo.png" alt="Logo" className="h-30 w-auto object-contain" />
                        </a>

                        <div className="hidden lg:flex items-center gap-7">
                            <ul className="flex items-center gap-7">
                                {navLinks.map((link) => {
                                    if (link.hasDropdown) {
                                        return (
                                            <li
                                                key={link.name}
                                                className="relative"
                                                onMouseEnter={handleServicesEnter}
                                                onMouseLeave={handleServicesLeave}
                                            >
                                                <button
                                                    onClick={() => scrollToSection(link.scrollTo)}
                                                    className={`flex items-center gap-1 text-[15px] font-semibold transition-colors duration-200 ${navTextColor} ${navHoverColor}`}
                                                >
                                                    {link.name}
                                                    <ChevronDown
                                                        size={14}
                                                        className={`mt-0.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                                                    />
                                                </button>

                                                <AnimatePresence>
                                                    {servicesOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: -8 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -6 }}
                                                            transition={{ duration: 0.2 }}
                                                            onMouseEnter={handleServicesEnter}
                                                            onMouseLeave={handleServicesLeave}
                                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 flex rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                                                            style={{ width: "680px", background: "#fff" }}
                                                        >
                                                            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-blue" />
                                                            <div className="w-[240px] shrink-0 pt-6 pb-4 border-r border-gray-100 bg-gray-50/50">
                                                                {servicesMenu.map((srv) => (
                                                                    <button
                                                                        key={srv.label}
                                                                        onMouseEnter={() => setActiveService(srv.label)}
                                                                        className={`w-full flex items-center justify-between px-5 py-3 text-[13px] font-semibold transition-colors text-left ${activeService === srv.label
                                                                                ? "bg-brand-blue/10 text-brand-blue"
                                                                                : "text-gray-700 hover:bg-gray-100"
                                                                            }`}
                                                                    >
                                                                        {srv.label}
                                                                        <ChevronRight size={13} className="opacity-50 shrink-0" />
                                                                    </button>
                                                                ))}
                                                            </div>
                                                            <div className="flex-1 pt-6 pb-4 px-5">
                                                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-4">
                                                                    {activeService}
                                                                </p>
                                                                <AnimatePresence mode="wait">
                                                                    <motion.ul
                                                                        key={activeService}
                                                                        initial={{ opacity: 0, x: -6 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        exit={{ opacity: 0, x: -4 }}
                                                                        transition={{ duration: 0.15 }}
                                                                        className="grid grid-cols-2 gap-x-4"
                                                                    >
                                                                        {activeLinks.map((link) => (
                                                                            <li key={link}>
                                                                                <Link
                                                                                    href={`/InnerServices/${slugify(link)}`}
                                                                                    className="flex items-center gap-2 py-1.5 text-[13px] text-gray-600 hover:text-brand-blue hover:bg-brand-blue/5 rounded px-2 transition-colors group"
                                                                                >
                                                                                    <span className="w-1 h-1 rounded-full bg-brand-blue opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                                                                    {link}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </motion.ul>
                                                                </AnimatePresence>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </li>
                                        );
                                    }

                                    return (
                                        <li key={link.name}>
                                            <button
                                                onClick={() => scrollToSection(link.scrollTo)}
                                                className={`flex items-center text-[15px] font-semibold transition-colors duration-200 ${navTextColor} ${navHoverColor}`}
                                            >
                                                {link.name}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="hidden lg:flex items-center">
                            <button
                                onClick={() => setIsQuoteModalOpen(true)}
                                className="bg-[#002da0] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#002487] shadow-md transition-colors"
                            >
                                Get a Free Quote
                            </button>
                        </div>

                        <button
                            className="lg:hidden p-2 text-white hover:text-blue-300 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden bg-[#0E1626] border-t border-white/10 shadow-lg"
                        >
                            <div className="px-4 py-4 flex flex-col gap-1 items-center">
                                {navLinks.map((link) => {
                                    if (link.hasDropdown) {
                                        return (
                                            <div key={link.name} className="w-full border-b border-white/10">
                                                <div className="flex items-center justify-between">
                                                    <button
                                                        onClick={() => { scrollToSection(link.scrollTo); setIsMobileMenuOpen(false); }}
                                                        className="flex-1 py-3 text-sm font-semibold text-white hover:text-blue-300 text-center transition-colors"
                                                    >
                                                        {link.name}
                                                    </button>
                                                    <button
                                                        className="p-3 text-white/60 hover:text-blue-300"
                                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                    >
                                                        <ChevronDown
                                                            size={16}
                                                            className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                                                        />
                                                    </button>
                                                </div>
                                                <AnimatePresence>
                                                    {mobileServicesOpen && (
                                                        <motion.ul
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="pl-2 overflow-hidden"
                                                        >
                                                            {servicesMenu.map((srv) => (
                                                                <li key={srv.label}>
                                                                    <button
                                                                        className="w-full text-left px-3 py-2.5 text-[13px] font-semibold text-white/80 hover:text-blue-300 flex items-center justify-between transition-colors"
                                                                        onClick={() =>
                                                                            setMobileSubOpen(
                                                                                mobileSubOpen === srv.label ? null : srv.label
                                                                            )
                                                                        }
                                                                    >
                                                                        {srv.label}
                                                                        <ChevronDown
                                                                            size={12}
                                                                            className={`transition-transform ${mobileSubOpen === srv.label ? "rotate-180" : ""
                                                                                } text-white/40`}
                                                                        />
                                                                    </button>
                                                                    <AnimatePresence>
                                                                        {mobileSubOpen === srv.label && (
                                                                            <motion.ul
                                                                                initial={{ opacity: 0, height: 0 }}
                                                                                animate={{ opacity: 1, height: "auto" }}
                                                                                exit={{ opacity: 0, height: 0 }}
                                                                                className="pl-4 overflow-hidden"
                                                                            >
                                                                                {srv.links.map((linkItem) => (
                                                                                    <li key={linkItem}>
                                                                                        <Link
                                                                                            href={`/InnerServices/${slugify(linkItem)}`}
                                                                                            className="block px-3 py-2 text-[12px] text-white/50 hover:text-blue-300 transition-colors"
                                                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                                                        >
                                                                                            {linkItem}
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}
                                                                            </motion.ul>
                                                                        )}
                                                                    </AnimatePresence>
                                                                </li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    }

                                    return (
                                        <button
                                            key={link.name}
                                            onClick={() => { scrollToSection(link.scrollTo); setIsMobileMenuOpen(false); }}
                                            className="flex items-center justify-center w-full py-3 text-sm font-semibold text-white hover:text-blue-300 border-b border-white/10 transition-colors text-center"
                                        >
                                            {link.name}
                                        </button>
                                    );
                                })}

                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsQuoteModalOpen(true);
                                    }}
                                    className="w-full bg-[#002da0] text-white px-6 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-[#002487] shadow-md transition-colors mt-3"
                                >
                                    Get a Free Quote
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <FreeQuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </>
    );
}