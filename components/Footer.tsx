"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
};

const quickLinks = [
    { name: "Home", scrollTo: "hero" },
    { name: "About Us", scrollTo: "about" },
    { name: "Services", scrollTo: "services" },
    { name: "Portfolio", scrollTo: "portfolio" },
    { name: "Contact", scrollTo: "contact" },
];

const serviceColumns = [
    [
        "Book Writing", "Ghostwriting", "Children's Book Writing", "Sci-Fi Writing",
        "Memoir Writing", "Fiction Writing", "SEO Content Writing",
    ],
    [
        "Mystery Writing", "Historical Writing", "Fantasy Writing", "Non-Fiction Writing",
        "Script Writing", "Horror Writing", "Book Proofreading",
    ],
    [
        "Book Editing", "Ebook Creation", "Audiobook Narration", "Book Formatting",
        "Children's Book Editing", "Book Publishing", "Book Cover Design",
    ],
    [
        "Author Website Design", "Book Printing", "Book Marketing",
    ],
];

export default function FooterSection() {
    return (
        <>
            <section className="bg-white py-14 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    <div>
                        <h2 className="font-titillium font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-3">
                            Never Miss an Update
                        </h2>
                        <p className="text-gray-500 text-[1rem] leading-relaxed mb-6 max-w-sm">
                            Don't miss upcoming events, workshops, and exclusive announcements.
                        </p>
                        <div className="flex gap-2 max-w-sm">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-blue/20 bg-brand-blue-light"
                            />
                            <button className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200">
                                Sign up
                            </button>
                        </div>
                    </div>

                    <div className="lg:pl-8 flex justify-end">
                        <div className="w-[320px]">
                            <div className="flex flex-col gap-3 mb-8 items-start">
                                <div className="flex items-center gap-3 text-gray-600 text-sm">
                                    <div className="bg-brand-blue rounded-full p-1.5 flex-shrink-0">
                                        <Phone size={13} className="text-white" />
                                    </div>
                                    <span>(323) 989-9924</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 text-sm">
                                    <div className="bg-brand-blue rounded-full p-1.5 flex-shrink-0">
                                        <Mail size={13} className="text-white" />
                                    </div>
                                    <span>info@premiumbookwriter.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 text-sm">
                                    <div className="bg-brand-blue rounded-full p-1.5 flex-shrink-0">
                                        <MapPin size={13} className="text-white" />
                                    </div>
                                    <span>1001 Wilshire Boulevard, Los Angeles <br /> CA 90017, United States</span>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src="/images/payment.png"
                                    alt="Secure payment methods"
                                    width={260}
                                    height={40}
                                    quality={100}
                                    className="h-20 w-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-brand-blue text-white pt-12 pb-6 px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Quick Links */}
                    <div className="mb-8">
                        <p className="text-white text-center font-bold text-sm uppercase tracking-widest mb-4 opacity-60">
                            Quick Links
                        </p>
                        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.scrollTo)}
                                        className="text-white/80 hover:text-white text-sm transition-colors duration-150"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t border-white/20 pt-8 mb-8">
                        <p className="text-center text-white text-lg font-medium mb-8">
                            Our Wide Variety of{" "}
                            <span className="font-bold">Services</span>{" "}
                            Includes:
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {serviceColumns.map((col, ci) => (
                                <ul key={ci} className="flex flex-col gap-2">
                                    {col.map((s) => (
                                        <li key={s}>
                                            <span className="text-white/70 text-sm">{s}</span>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-white/20 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="flex items-center gap-5">
                            <a href="/terms" className="text-white/70 hover:text-white text-sm transition-colors duration-150">Terms & Conditions</a>
                            <a href="/privacy" className="text-white/70 hover:text-white text-sm transition-colors duration-150">Privacy Policy</a>
                        </div>
                        <p className="text-white/70 text-sm">© Copyright 2026 Premium Book Writer</p>
                    </div>

                </div>
            </footer>
        </>
    );
}