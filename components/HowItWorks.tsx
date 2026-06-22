"use client";

import Image from "next/image";

const steps = [
    {
        number: "01",
        title: "Envision",
        desc: "We uncover the heart of your story and create a publishing strategy tailored to your goals, audience, and long-term success.",
    },
    {
        number: "02",
        title: "Transform",
        desc: "Your manuscript is expertly refined through professional editing, exceptional design, and meticulous production, ready to captivate readers from the very first page.",
    },
    {
        number: "03",
        title: "Thrive",
        desc: "We don't just publish books, we build author brands. With strategic promotion and lasting visibility, we help your story continue making an impact long after launch.",
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
                            Three Steps. The Path to Publishing 
                            Excellence
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
                                        <p className="text-gray-500 text-[1rem] leading-relaxed max-w-sm">
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
    );
}