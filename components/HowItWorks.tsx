"use client";

import Image from "next/image";

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

export default function HowItWorksSection() {
    return (
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

                            <div className="absolute left-[5%] top-[8%] w-[80%] h-[85%] z-0">
                                <Image
                                    src="/images/How-it-works-bg.png"
                                    alt=""
                                    width={360}
                                    height={360}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="absolute right-[-15%] top-[5%] w-[150%] z-10 animate-float">
                                <Image
                                    src="/images/How-it-works.png"
                                    alt="Published Books"
                                    width={320}
                                    height={400}
                                    className="w-full h-auto object-contain drop-shadow-2xl"
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}