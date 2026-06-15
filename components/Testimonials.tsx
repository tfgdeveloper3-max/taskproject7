"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return { ref, inView };
}

export default function TestimonialsSection() {
    const headingRef = useRef<HTMLDivElement>(null);
    const [headingVisible, setHeadingVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setHeadingVisible(true); },
            { threshold: 0.2 }
        );
        if (headingRef.current) obs.observe(headingRef.current);
        return () => obs.disconnect();
    }, []);

    const card1 = useInView();
    const card2 = useInView();
    const card3 = useInView();
    const card4 = useInView();

    return (
        <section className="bg-gray-50 py-20 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div
                    ref={headingRef}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 transition-all duration-700 ease-out
                        ${headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <h2 className="font-titillium font-bold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.1] text-gray-900">
                        Discover How We've Helped<br />
                        Businesses Like Yours Achieve<br />
                        Extraordinary Results
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed self-start lg:pt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since 1966, when
                        designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took
                        a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body
                        Type sheets. It has survived not only many decades
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    <div className="flex flex-col gap-6">

                        <div
                            ref={card1.ref}
                            className={`relative bg-white rounded-2xl shadow-sm p-6 overflow-visible
                                transition-all duration-700 ease-out delay-[0ms]
                                ${card1.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}
                        >
                            <div className="text-center mb-2">
                                <span className="text-3xl font-bold text-gray-800 leading-none">"</span>
                            </div>
                            <div className="flex items-end gap-4">
                                <div className="flex-1">
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley.
                                    </p>
                                    <p className="text-brand-blue font-bold text-sm">Sarah L.</p>
                                    <p className="text-gray-400 text-xs">Marketing Director at Nova Cosmetics</p>
                                </div>
                                <div className="flex-shrink-0 -mr-10 -mb-6">
                                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                        <img
                                            src="/images/Sarah.png"
                                            alt="Sarah L."
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            ref={card2.ref}
                            className={`relative bg-white rounded-2xl shadow-sm p-6 overflow-visible
                                transition-all duration-700 ease-out delay-[200ms]
                                ${card2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
                        >
                            <div className="flex items-end gap-4">
                                <div className="flex-1">
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley.
                                    </p>
                                    <p className="text-brand-blue font-bold text-sm">James T.</p>
                                    <p className="text-gray-400 text-xs">CEO of MoveWell Fitness</p>
                                </div>
                                <div className="flex-shrink-0 -mr-10 -mb-6">
                                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                        <img src="/images/James.png" alt="James T." className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col gap-6 lg:mt-10">

                        <div
                            ref={card3.ref}
                            className={`relative bg-white rounded-2xl shadow-sm px-8 pt-14 pb-6 text-center overflow-visible
                                transition-all duration-700 ease-out delay-[100ms]
                                ${card3.inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"}`}
                        >
                            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-30 h-30 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img src="/images/Elena.png" alt="Elena K." className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley.
                            </p>
                            <p className="text-brand-blue font-bold text-sm">Elena K.</p>
                            <p className="text-gray-400 text-xs">Co-Founder of Elara Tech</p>
                        </div>

                        <div
                            ref={card4.ref}
                            className={`relative bg-white rounded-2xl shadow-sm px-8 py-6 text-center overflow-visible
                                transition-all duration-700 ease-out delay-[300ms]
                                ${card4.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
                        >
                            <p className="text-gray-500 text-sm leading-relaxed mb-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley.
                            </p>
                            <div className="flex items-center justify-center gap-3">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                                    <img src="/images/Daniel.png" alt="Daniel R." className="w-full h-full object-cover" />
                                </div>
                                <div className="text-left">
                                    <p className="text-brand-blue font-bold text-sm">Daniel R.</p>
                                    <p className="text-gray-400 text-xs">Owner of Lume Café</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}