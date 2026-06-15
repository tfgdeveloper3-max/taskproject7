"use client";

import Image from "next/image";

export default function CTABannerSection() {
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
    );
}