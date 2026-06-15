"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function FooterSection() {
    return (
        <>
            <section className="bg-white py-14 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    <div>
                        <h2 className="font-titillium font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-3">
                            Join Over 200,000<br />
                            Self-Published Authors
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
                            Subscribe to our weekly newsletter to receive articles on writing, author marketing, and the
                            business of self-publishing.
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
                                    <span>(000) 123-456-789</span>
                                </div>

                                <div className="flex items-center gap-3 text-gray-600 text-sm">
                                    <div className="bg-brand-blue rounded-full p-1.5 flex-shrink-0">
                                        <Mail size={13} className="text-white" />
                                    </div>
                                    <span>info@publishing.com</span>
                                </div>

                                <div className="flex items-center gap-3 text-gray-600 text-sm">
                                    <div className="bg-brand-blue rounded-full p-1.5 flex-shrink-0">
                                        <MapPin size={13} className="text-white" />
                                    </div>
                                    <span>Place Your Location</span>
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

                    <p className="text-center text-white text-lg font-medium mb-8">
                        Our Wide Variety of{" "}
                        <span className="font-bold underline-offset-2">Services</span>{" "}
                        Includes:
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
                        <ul className="flex flex-col gap-2">
                            {["Book Publishing", "Amazon (KDP) Publishing", "Barnes & Noble Publishing", "Kobo Book Publishing", "Apple Book Publishing", "Memoir Writing", "Children Book Writing"].map((s, i) => (
                                <li key={i}>
                                    <a href="#" className="text-white/80 hover:text-white text-sm transition-colors duration-150">{s}</a>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-2">
                            {["Mystery Writing", "Historical Writing", "Fantasy Writing", "Sc-Fi Writing", "Non-Fiction Writing", "Narrative Writing", "Script Writing"].map((s, i) => (
                                <li key={i}>
                                    <a href="#" className="text-white/80 hover:text-white text-sm transition-colors duration-150">{s}</a>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-2">
                            {["SEO Content Writing", "Book Editing", "Children's Book Editing", "Book Proofreading", "Book Formatting", "Book Marketing", "Audiobook Narration"].map((s, i) => (
                                <li key={i}>
                                    <a href="#" className="text-white/80 hover:text-white text-sm transition-colors duration-150">{s}</a>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-2">
                            {["Draft2Digital Publishing", "Ghostwriting", "Fiction Writing", "Horror Writing", "Book Cover Design", "Book Printing", "Author Website Design"].map((s, i) => (
                                <li key={i}>
                                    <a href="#" className="text-white/80 hover:text-white text-sm transition-colors duration-150">{s}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t border-white/20 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="flex items-center gap-5">
                            <a href="/terms" className="text-white/70 hover:text-white text-sm transition-colors duration-150">Terms & Conditions</a>
                            <a href="/privacy" className="text-white/70 hover:text-white text-sm transition-colors duration-150">Privacy Policy</a>
                        </div>
                        <p className="text-white/70 text-sm">© Copyright 2026 sample publishing</p>
                    </div>

                </div>
            </footer>
        </>
    );
}