"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="bg-gray-100 py-16 overflow-hidden">
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
                            className="object-contain"
                        />

                        {/* Floating card */}
                        <Link
                            href="/contact"
                            className="
                                absolute top-15 left-0
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
                            <p className="text-gray-900 font-bold text-sm leading-snug mb-1.5">
                                Let's Take Your<br />
                                Your Book Publish To<br />
                                The Next Level
                            </p>
                            <p className="text-gray-400 text-xs mb-3">
                                Lorem ipsum dolor sit amet.
                            </p>
                            <div className="flex items-center gap-2 text-brand-blue font-semibold text-xs">
                                <div className="bg-brand-blue rounded-full p-1.5">
                                    <Phone size={9} className="text-white" />
                                </div>
                                Contact Us
                            </div>
                        </Link>

                    </div>

                    {/* RIGHT — Text */}
                    <div className="flex flex-col justify-center lg:pl-2">
                        <h2 className="font-titillium font-bold text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] leading-[1.1] text-gray-900 mb-5">
                            Who We Are &amp; Why We<br />
                            Do What We Do
                        </h2>

                        <p className="text-gray-500 text-[1rem] leading-relaxed mb-7 max-w-lg">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since 1966, when designers at Letraset
                            and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation
                            and scrambled it to make dummy text for Letraset's Body Type sheets.
                        </p>

                        <div className="grid grid-cols-2 gap-0 mb-8">
                            <div className="pr-8 border-r border-gray-600">
                                <h3 className="font-titillium font-bold text-base text-gray-900 mb-2">
                                    What We Do
                                </h3>
                                <p className="text-gray-500 text-[1rem] leading-relaxed">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's text ever since 1966,
                                </p>
                            </div>
                            <div className="pl-8">
                                <h3 className="font-titillium font-bold text-base text-gray-900 mb-2">
                                    Why We Do It
                                </h3>
                                <p className="text-gray-500 text-[1rem] leading-relaxed">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    text ever since 1966,
                                </p>
                            </div>
                        </div>

                        <div>
                            <a
                                href="/about"
                                className="inline-flex items-center bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg shadow-brand-blue/25"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}