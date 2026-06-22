"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import FreeQuoteModal from "./Freequotemodal";
import { useState } from "react";

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

export default function AboutSection() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    return (
        <section id="about" className="bg-gray-100 py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">

                    <div className="relative" style={{ minHeight: "480px" }}>

                        {/* Background.png replacing the old blue box */}
                        <div className="absolute right-[13%] bottom-0 w-[72%] h-[82%] z-0">
                            <Image
                                src="/images/Background.png"
                                alt=""
                                fill
                                quality={100}
                                className="object-contain object-right-bottom"
                            />
                        </div>

                        <Image
                            src="/images/About-us.png"
                            alt="About our team"
                            fill
                            quality={100}
                            unoptimized
                            className="object-contain z-30 pointer-events-none"
                        />

                        {/* Floating card */}
                        <button
                            onClick={() => setIsQuoteModalOpen(true)}
                            className="
                                absolute top-0 left-[-30]
                                z-20
                                bg-white rounded-2xl shadow-xl
                                px-5 py-4
                                w-[190px]
                                rotate-6
                                hover:rotate-0
                                transition-transform duration-500 ease-out
                                cursor-pointer
                            "
                        >
                            <p className="text-gray-900 text-start font-bold text-sm leading-snug mb-1.5">
                                Your Book Is Closer
                                <br />
                                to Publication Than <br />
                                You Think
                            </p>
                            <p className="text-gray-400 text-start text-xs mb-3">
                                One Conversation Is All It Takes
                            </p>
                            <div className="flex items-center gap-2 text-brand-blue font-semibold text-xs">
                                <div className="bg-brand-blue rounded-full p-1.5">
                                    <Phone size={9} className="text-white" />
                                </div>
                                Contact Us
                            </div>
                        </button>

                    </div>

                    {/* RIGHT — Text */}
                    <div className="flex flex-col justify-center lg:pl-2">
                        <h2 className="font-titillium font-bold text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] leading-[1.1] text-gray-900 mb-5">
                            Inside Premium Book Writer:
                            What You Should Know
                        </h2>

                        <p className="text-gray-500 text-[1rem] leading-relaxed mb-7 max-w-lg">
                            At <b>Premium Book Writer</b>, we came together as a team of passionate writers, editors, and publishing professionals who believe in one shared goal helping authors bring their stories to life. Over time, we built a collaborative space where creativity, hard work, and dedication come together to turn manuscripts into meaningful published books.

                        </p>

                        <div className="grid grid-cols-2 gap-0 mb-8">
                            <div className="pr-8 border-r border-gray-600">
                                <h3 className="font-titillium font-bold text-base text-gray-900 mb-2">
                                    Our Mission
                                </h3>
                                <p className="text-gray-500 text-[1rem] leading-relaxed">
                                    At Premium Book Writer, we exist to bridge the gap between ideas and impact, we transform raw manuscripts into meaningful published books that speak to readers and stay with them long after the last page.
                                </p>
                            </div>
                            <div className="pl-8">
                                <h3 className="font-titillium font-bold text-base text-gray-900 mb-2">
                                    Our  Vision
                                </h3>
                                <p className="text-gray-500 text-[1rem] leading-relaxed">
                                    Our vision is to reshape modern publishing into a space where every meaningful story finds its audience and every author has the chance to be truly recognized.
                                </p>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => setIsQuoteModalOpen(true)}
                                className="inline-flex items-center bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg shadow-brand-blue/25"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <FreeQuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </section>
    );
}