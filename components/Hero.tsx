"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Phone, Mail } from "lucide-react";
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

function useTypewriter(
    text: string,
    typingSpeed: number = 75,
    deletingSpeed: number = 40,
    pauseDuration: number = 2500
) {
    const [displayText, setDisplayText] = useState("");
    const [phase, setPhase] = useState<
        "typing" | "paused" | "deleting" | "waiting"
    >("typing");

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        switch (phase) {
            case "typing":
                if (displayText.length < text.length) {
                    timeout = setTimeout(() => {
                        setDisplayText(text.slice(0, displayText.length + 1));
                    }, typingSpeed);
                } else {
                    timeout = setTimeout(() => setPhase("paused"), pauseDuration);
                }
                break;
            case "paused":
                timeout = setTimeout(() => setPhase("deleting"), 100);
                break;
            case "deleting":
                if (displayText.length > 0) {
                    timeout = setTimeout(() => {
                        setDisplayText(text.slice(0, displayText.length - 1));
                    }, deletingSpeed);
                } else {
                    timeout = setTimeout(() => setPhase("waiting"), 300);
                }
                break;
            case "waiting":
                timeout = setTimeout(() => setPhase("typing"), 500);
                break;
        }

        return () => clearTimeout(timeout);
    }, [phase, displayText, text, typingSpeed, deletingSpeed, pauseDuration]);

    return displayText;
}

export default function Hero() {
    const typedText = useTypewriter("Bestselling Books", 75, 35, 2500);

    const [ctaBounce, setCtaBounce] = useState(false);
    const [sidebarBounce, setSidebarBounce] = useState(false);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setCtaBounce(true), 1800);
        const t2 = setTimeout(() => setSidebarBounce(true), 1500);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);

    return (
        <section id="hero" className="relative min-h-screen bg-brand-blue-light overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/images/Hero-bg.png"
                    alt=""
                    fill
                    className="object-cover object-center opacity-70 pointer-events-none"
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-light/40 via-transparent to-white/20 pointer-events-none" />

            <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 animate-sidebar-slide">
                <a
                    href="tel:3239899924"
                    className={`${sidebarBounce ? "animate-sidebar-bounce" : ""}
                        bg-brand-blue hover:bg-brand-blue-dark transition-colors duration-200
                        flex items-center justify-center w-[42px] h-[42px] rounded-r-xl shadow-lg`}
                    aria-label="Call Us"
                >
                    <Phone size={17} className="text-white" />
                </a>

                <a
                    href="mailto:info@premiumbookwriter.com"
                    className={`${sidebarBounce ? "animate-sidebar-bounce-d1" : ""}
                        bg-brand-blue hover:bg-brand-blue-dark transition-colors duration-200
                        flex items-center justify-center w-[42px] h-[42px] rounded-r-xl shadow-lg`}
                    aria-label="Email Us"
                >
                    <Mail size={17} className="text-white" />
                </a>

                <div
                    className={`${sidebarBounce ? "animate-sidebar-bounce-d2" : ""}
                        bg-brand-blue px-2 py-4 flex items-center justify-center rounded-r-xl shadow-lg`}
                >
                    <button
                        onClick={() => setIsQuoteModalOpen(true)}
                        className="text-white text-[9px] font-semibold tracking-[0.18em] uppercase whitespace-nowrap"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                        Contact Our Book Publishing Experts
                    </button>
                </div>
            </div>

            <div className="relative z-10 w-full pt-24 lg:pt-28 pb-10 lg:pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[calc(100vh-6rem)]">

                    <div className="flex flex-col justify-center px-8 sm:px-12 lg:pl-20 xl:pl-28 lg:pr-6">

                        <div className="mb-4 inline-flex">
                            <span className="border border-gray-300 text-gray-600 text-sm font-medium px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm">
                                The Hub Where Authors Become Successful
                            </span>
                        </div>

                        <h1 className="font-titillium font-[400] text-[2.6rem] sm:text-[3rem] md:text-[3.4rem] lg:text-[3.2rem] xl:text-[3.8rem] leading-[1.08] text-gray-900 tracking-tight">
                            Premium Book Writer
                            <br />
                            Shapes Stories Into
                            <br />
                            <span className="text-brand-blue-dark font-[600]">
                                {typedText}
                                <span className="typewriter-cursor">|</span>
                            </span>
                        </h1>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <div className="animate-slide-in-left">
                                <button
                                    onClick={() => setIsQuoteModalOpen(true)}
                                    className={`${ctaBounce ? "animate-bounce-continuous" : ""} inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue-dark transition-colors duration-200 shadow-lg shadow-brand-blue/25`}
                                >
                                    Get Started
                                    <ArrowRight size={16} />
                                </button>
                            </div>

                            <div className="animate-slide-in-left-d1">
                                <button
                                    onClick={openLiveChat}
                                    className={`${ctaBounce ? "animate-bounce-continuous-d1" : ""} inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue bg-transparent px-6 py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue hover:text-white transition-colors duration-200`}
                                >
                                    Live Chat
                                    <ArrowRight size={16} />
                                </button>
                            </div>

                            <div className="animate-slide-in-left-d2">
                                <a
                                    href="tel:3239899924"
                                    className={`${ctaBounce ? "animate-bounce-continuous-d2" : ""} inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue-dark transition-colors duration-200 shadow-lg shadow-brand-blue/25`}
                                >
                                    Call Us Now
                                    <Phone size={16} />
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 lg:mt-10 animate-fade-in-up-delay">
                            <Image
                                src="/images/Support.png"
                                alt="Trustpilot and Clutch ratings"
                                width={380}
                                height={90}
                                className="h-16 w-auto object-contain object-left"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end w-full overflow-visible pr-0">
                        <div className="relative w-full">
                            <div className="absolute -inset-6 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

                            <div className="animate-float relative z-10 w-full flex justify-end">
                                <Image
                                    src="/images/Hero-img.png"
                                    alt="Our Published Books Collection"
                                    width={900}
                                    height={700}
                                    className="w-[90%] sm:w-[85%] lg:w-[105%] xl:w-[110%] h-auto drop-shadow-2xl translate-x-4 lg:translate-x-0"
                                    priority
                                />
                            </div>

                            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-blue/10 rounded-full blur-xl pointer-events-none animate-float-delay" />
                            <div className="absolute -top-3 -left-3 w-14 h-14 bg-brand-blue/8 rounded-full blur-lg pointer-events-none animate-float" />
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