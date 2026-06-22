"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
    ArrowRight,
    Phone,
    Mail,
    FileEdit,
    ImageIcon,
    LayoutTemplate,
    BookOpen,
    Megaphone,
    Monitor,
    Pencil,
    Feather,
    BookMarked,
    FileText,
    Volume2,
    Users,
    BookOpenCheck,
    Palette,
    Globe,
    Printer,
    BookText,
} from "lucide-react";

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

const steps = [
    {
        number: "01",
        title: "Discover & Strategize",
        desc: "We start by listening — learning about your brand, goals, and challenges. Then we craft a custom strategy that sets the foundation for success.",
    },
    {
        number: "02",
        title: "Design & Build",
        desc: "Our creative and technical teams bring your vision to life, designing solutions that are not just beautiful but also functional and results-driven.",
    },
    {
        number: "03",
        title: "Launch & Grow",
        desc: "Once everything's ready, we launch — but we don't stop there. We monitor, optimize, and scale your digital presence to keep you ahead.",
    },
];

const tabsData = [
    {
        name: "Writing Services",
        services: [
            { icon: <Pencil size={22} className="text-brand-blue" />, title: "Ghostwriting Services" },
            { icon: <Feather size={22} className="text-brand-blue" />, title: "Children's Book Writing" },
            { icon: <BookMarked size={22} className="text-brand-blue" />, title: "Memoir Writing" },
            { icon: <FileText size={22} className="text-brand-blue" />, title: "Fiction Writing" },
            { icon: <BookOpen size={22} className="text-brand-blue" />, title: "Non-Fiction Writing" },
            { icon: <FileEdit size={22} className="text-brand-blue" />, title: "Script Writing" },
        ],
    },
    {
        name: "Editing & Publishing",
        services: [
            { icon: <FileEdit size={22} className="text-brand-blue" />, title: "Book Editing" },
            { icon: <LayoutTemplate size={22} className="text-brand-blue" />, title: "Book Formatting" },
            { icon: <BookText size={22} className="text-brand-blue" />, title: "Ebook Publishing" },
            { icon: <Volume2 size={22} className="text-brand-blue" />, title: "Audiobook Narration" },
            { icon: <Users size={22} className="text-brand-blue" />, title: "Book Coaching" },
            { icon: <BookOpenCheck size={22} className="text-brand-blue" />, title: "Beta Reader Services" },
        ],
    },
    {
        name: "Design, Printing & Marketing",
        services: [
            { icon: <ImageIcon size={22} className="text-brand-blue" />, title: "Book Cover Design" },
            { icon: <Palette size={22} className="text-brand-blue" />, title: "Illustration Design" },
            { icon: <Monitor size={22} className="text-brand-blue" />, title: "Author Website" },
            { icon: <Megaphone size={22} className="text-brand-blue" />, title: "Book Marketing" },
            { icon: <Printer size={22} className="text-brand-blue" />, title: "Book Printing" },
            { icon: <Globe size={22} className="text-brand-blue" />, title: "SEO Content Writing" },
        ],
    },
];

export default function ServicesPage() {
    const typedText = useTypewriter("Writing Services", 75, 35, 2500);

    const [ctaBounce, setCtaBounce] = useState(false);
    const [sidebarBounce, setSidebarBounce] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const t1 = setTimeout(() => setCtaBounce(true), 1800);
        const t2 = setTimeout(() => setSidebarBounce(true), 1500);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);

    const getRotation = (index: number) => {
        const rotations = ["rotate-3", "rotate-0", "-rotate-3"];
        return rotations[index % 3];
    };

    return (
        <>

            {/* HERO SECTION */}
            <section className="relative min-h-screen bg-brand-blue-light overflow-hidden">
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
                        href="tel:+11234567890"
                        className={`${sidebarBounce ? "animate-sidebar-bounce" : ""}
                            bg-brand-blue hover:bg-brand-blue-dark transition-colors duration-200
                            flex items-center justify-center w-[42px] h-[42px] rounded-r-xl shadow-lg`}
                        aria-label="Call Us"
                    >
                        <Phone size={17} className="text-white" />
                    </a>

                    <a
                        href="mailto:info@brandpublishers.com"
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
                        <a
                            href="#"
                            className="text-white text-[9px] font-semibold tracking-[0.18em] uppercase whitespace-nowrap"
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                            Contact Our Book Publishing Experts
                        </a>
                    </div>
                </div>

                <div className="relative z-10 w-full pt-0 lg:pt-0 pb-10 lg:pb-12 flex items-center justify-center min-h-screen">
                    <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl px-6">

                        <div className="mb-4 inline-flex">
                            <span className="border border-gray-300 text-gray-600 text-sm font-medium px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm">
                                Book Publishing Services Simplified For You!
                            </span>
                        </div>

                        <h1 className="font-titillium font-[400] text-[2.6rem] sm:text-[3rem] md:text-[3.4rem] lg:text-[3.2rem] xl:text-[3.8rem] leading-[1.08] text-gray-900 tracking-tight">
                            Brand Publishers Bring
                            <br />
                            You Premium Book
                            <br />
                            <span className="text-brand-blue font-[600]">
                                {typedText}
                                <span className="typewriter-cursor">|</span>
                            </span>
                        </h1>

                        <div className="mt-7 flex flex-wrap gap-3 justify-center">
                            <div className="animate-slide-in-left">
                                <a
                                    href="#"
                                    className={`${ctaBounce ? "animate-bounce-continuous" : ""} inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue-dark transition-colors duration-200 shadow-lg shadow-brand-blue/25`}
                                >
                                    Get Started
                                    <ArrowRight size={16} />
                                </a>
                            </div>

                            <div className="animate-slide-in-left-d1">
                                <a
                                    href="#"
                                    className={`${ctaBounce ? "animate-bounce-continuous-d1" : ""} inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue bg-transparent px-6 py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue hover:text-white transition-colors duration-200`}
                                >
                                    Get a Free Quote
                                    <ArrowRight size={16} />
                                </a>
                            </div>

                            <div className="animate-slide-in-left-d2">
                                <a
                                    href="#"
                                    className={`${ctaBounce ? "animate-bounce-continuous-d2" : ""} inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-brand-blue-dark transition-colors duration-200 shadow-lg shadow-brand-blue/25`}
                                >
                                    Call Us Now
                                    <Phone size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES TABS SECTION */}
            <section id="services" className="bg-gray-100 py-16 px-4">
                <div className="text-center mb-10">
                    <h2 className="font-titillium font-bold text-3xl sm:text-[2.6rem] text-gray-900 mb-3">
                        Our Book Publishing Services
                    </h2>
                    <p className="text-gray-500 text-[1rem] max-w-lg mx-auto leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since 1966,
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    {tabsData.map((tab, index) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200 shadow-sm ${activeTab === index
                                ? "bg-brand-blue text-white"
                                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tabsData[activeTab].services.map((service, i) => (
                        <div key={`${activeTab}-${i}`} className="relative pt-5">

                            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 w-10 h-10">
                                <Image
                                    src="/images/pin.png"
                                    alt="pin"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain drop-shadow-md"
                                />
                            </div>

                            <div
                                className={`
                                    ${getRotation(i)} hover:rotate-0
                                    transition-transform duration-500 ease-out
                                    cursor-pointer
                                    bg-white rounded-2xl p-3 pt-12 shadow-md
                                `}
                                style={{ transformOrigin: "top center" }}
                            >
                                <div className="bg-gray-100 rounded-xl px-5 pt-12 pb-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="bg-white rounded-lg p-2 shadow-sm">
                                            {service.icon}
                                        </div>
                                        <h3 className="font-titillium font-bold text-gray-900 text-base">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-500 text-[1rem] leading-relaxed mb-5">
                                        Aliquam hendrerit erat convallis nunc aliquet, eget euismod lectus consequat. Vestibulum sed neque orci.
                                    </p>
                                    <a
                                        href="#"
                                        className="block w-full text-center bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm py-2.5 rounded-lg transition-colors duration-200"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>


            {/* CTA */}

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
                                <h2 className="font-titillium font-bold text-3xl sm:text-4xl lg:text-[2.8rem] xl:text-[3.2rem] leading-[1.1] text-white mb-4">
                                    Let's Create Something<br />
                                    Great Together
                                </h2>
                                <p className="text-white/85 text-sm leading-relaxed mb-7 max-w-md">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since 1966, when designers.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="#"
                                        className="inline-flex items-center bg-white text-gray-900 font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        Get Started
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex items-center border-2 border-white text-white font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                                    >
                                        Get a Free Quote
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            {/* HOW IT WORKS  */}

            <section className="bg-white py-20 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                        <div className="flex flex-col justify-center lg:pr-4">
                            <p className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-3">
                                HOW IT WORKS
                            </p>
                            <h2 className="font-titillium font-bold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.1] text-gray-900 mb-10">
                                The Path To Your Publishing
                                <br />
                                Breakthrough
                            </h2>
                            <div className="flex flex-col gap-8">
                                {steps.map((step) => (
                                    <div key={step.number} className="flex gap-5 items-start group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-brand-blue/20 bg-white flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors duration-300">
                                            <span className="text-brand-blue font-bold text-sm group-hover:text-white transition-colors duration-300">
                                                {step.number}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-titillium font-bold text-gray-900 text-lg mb-1.5">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[460px]">

                            <div className="absolute top-10 left-6 z-30 w-15 h-15">
                                <Image
                                    src="/images/Vector.png"
                                    alt="asterisk"
                                    width={40}
                                    height={40}
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            <div className="relative w-full h-[460px] lg:h-[520px]">

                                {/* Blue blob */}
                                <div className="absolute left-[5%] top-[8%] w-[80%] h-[85%] z-0">
                                    <Image
                                        src="/images/How-it-works-bg.png"
                                        alt=""
                                        width={700}
                                        height={700}
                                        quality={100}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Books */}
                                <div className="absolute right-[-15%] top-[5%] w-[150%] z-10 animate-float">
                                    <Image
                                        src="/images/How-it-works.png"
                                        alt="Published Books"
                                        width={900}
                                        height={800}
                                        quality={100}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}