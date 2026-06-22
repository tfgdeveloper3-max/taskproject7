"use client";

import Image from "next/image";
import { useState } from "react";
import FreeQuoteModal from "./Freequotemodal";

function openLiveChat() {
    if (typeof window === "undefined") return;

    if (window.LiveChatWidget) {
        window.LiveChatWidget.call("maximize");
        return;
    }

    const lc = (window as any).LC_API;
    if (lc && typeof lc.open_chat_window === "function") {
        lc.open_chat_window();
        return;
    }

    const selectors = [
        "#chat-widget-container button",
        "[id^='chat-widget']",
        "iframe[title*='chat' i]",
    ];
    for (const sel of selectors) {
        const el = document.querySelector<HTMLElement>(sel);
        if (el) { el.click(); return; }
    }
}

export default function CTABannerSection() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    return (
        <div className="relative" style={{ paddingTop: "80px" }}>
            <section
                className="relative bg-brand-blue"
                style={{ overflow: "visible" }}
            >
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: "52px 52px",
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto pl-0 pr-6 sm:pr-10 lg:pr-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ minHeight: "300px" }}>

                        <div className="flex items-end justify-start">
                            <div
                                className="animate-float"
                                style={{ marginTop: "80px" }}
                            >
                                <Image
                                    src="/images/Cta-Book.png"
                                    alt="The Hunt Book"
                                    width={700}
                                    height={860}
                                    className="w-[700px] sm:w-[880px] lg:w-[660px] xl:w-[900px] h-auto  object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center py-10 lg:py-14 lg:pl-4">
                            <h2 className="font-titillium font-bold text-[1.8rem] sm:text-[1.8rem] lg:text-[2.3rem] xl:text-[2.8rem] leading-[1.1] text-white mb-4">
                                Every Day You Wait Is Another Day Your
                                Readers Haven't Found You.
                            </h2>
                            <p className="text-white/85 text-[1rem] leading-relaxed mb-7 max-w-md">
                                Your story has the power to inspire, educate, and connect, but only if it's seen. Let our publishing experts transform your manuscript into a professionally published book that's built to reach the audience it deserves.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={openLiveChat}
                                    className="inline-flex items-center bg-white text-gray-900 font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                >
                                    Live Chat
                                </button>
                                <button
                                    onClick={() => setIsQuoteModalOpen(true)}
                                    className="inline-flex items-center border-2 border-white text-white font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                                >
                                    Get Your Free Publishing Plan
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <FreeQuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </div>
    );
}