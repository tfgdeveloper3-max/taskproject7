"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero area */}
            <section className="flex-1 flex items-center justify-center px-4 py-24">
                <div className="max-w-2xl w-full text-center">

                    {/* Animated check icon */}
                    {mounted && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 }}
                            className="flex justify-center mb-8"
                        >
                            <div className="relative">
                                {/* Pulse ring */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1.6, opacity: 0 }}
                                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                                    className="absolute inset-0 rounded-full bg-brand-blue/20"
                                />
                                <div className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center shadow-xl shadow-brand-blue/30">
                                    <CheckCircle size={44} className="text-white" strokeWidth={2.5} />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Heading */}
                    {mounted && (
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                        >
                            <h1 className="font-titillium font-bold text-4xl md:text-5xl text-gray-900 mb-4 leading-tight">
                                Thank You!
                            </h1>
                            <p className="text-gray-500 text-lg mb-2">
                                Your message has been received.
                            </p>
                            <p className="text-gray-400 text-base max-w-md mx-auto">
                                One of our publishing specialists will review your request and reach out to you within <span className="text-brand-blue font-semibold">24 hours</span>.
                            </p>
                        </motion.div>
                    )}

                    {/* Divider */}
                    {mounted && (
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="w-16 h-1 bg-brand-blue rounded-full mx-auto my-8"
                        />
                    )}

                    {/* What happens next card */}
                    {mounted && (
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 mb-8 text-left"
                        >
                            <p className="text-[11px] font-black uppercase tracking-widest text-brand-blue mb-5">
                                What Happens Next
                            </p>
                            <ul className="space-y-4">
                                {[
                                    {
                                        step: "1",
                                        title: "We review your request",
                                        desc: "Our team carefully reads every submission to match you with the right specialist.",
                                    },
                                    {
                                        step: "2",
                                        title: "We prepare your quote",
                                        desc: "A custom, no-obligation quote is put together based on your project details.",
                                    },
                                    {
                                        step: "3",
                                        title: "We reach out",
                                        desc: "Expect a call or email from us within 24 hours to walk you through next steps.",
                                    },
                                ].map((item) => (
                                    <li key={item.step} className="flex gap-4 items-start">
                                        <div className="w-8 h-8 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                                            <span className="text-brand-blue font-bold text-sm">{item.step}</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                                            <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Actions */}
                    {mounted && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.75 }}
                            className="flex flex-col sm:flex-row gap-3 justify-center"
                        >
                            <Link
                                href="/"
                                className="flex items-center justify-center gap-2 bg-brand-blue text-white px-7 py-3 rounded-lg font-semibold text-sm hover:bg-brand-blue-dark transition-colors shadow-lg shadow-brand-blue/25"
                            >
                                Back to Home
                                <ArrowRight size={16} />
                            </Link>
                            <a
                                href="tel:+12797770367"
                                className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-7 py-3 rounded-lg font-semibold text-sm hover:border-brand-blue hover:text-brand-blue transition-colors shadow-sm"
                            >
                                <Phone size={15} />
                                Call Us Now
                            </a>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Footer strip */}
            <footer className="border-t border-gray-100 bg-white py-6 px-4">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Brand Publishers. All rights reserved.</p>
                    <div className="flex items-center gap-5">
                        <a
                            href="mailto:info@brandpublishers.com"
                            className="flex items-center gap-1.5 hover:text-brand-blue transition-colors"
                        >
                            <Mail size={14} />
                            info@brandpublishers.com
                        </a>
                        <a
                            href="tel:+12797770367"
                            className="flex items-center gap-1.5 hover:text-brand-blue transition-colors"
                        >
                            <Phone size={14} />
                            +1 (279) 777-0367
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}