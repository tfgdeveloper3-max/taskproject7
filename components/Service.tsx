"use client";

import Image from "next/image";
import {
    FileEdit,
    ImageIcon,
    LayoutTemplate,
    BookOpen,
    Megaphone,
    Monitor,
} from "lucide-react";

const services = [
    {
        icon: <FileEdit size={22} className="text-brand-blue" />,
        title: "Book Editing",
        desc: "Refine your manuscript with professional editing that enhances clarity, strengthens your voice, and ensures every page is polished to perfection.",
        rotation: "rotate-3",
    },
    {
        icon: <ImageIcon size={22} className="text-brand-blue" />,
        title: "Book Cover Design",
        desc: "Capture attention at first glance with custom cover designs that reflect your story and inspire readers to pick up your book.",
        rotation: "rotate-0",
    },
    {
        icon: <LayoutTemplate size={22} className="text-brand-blue" />,
        title: "Book Formatting",
        desc: "Deliver a seamless reading experience with professionally formatted print and eBook interiors that meet industry standards.",
        rotation: "-rotate-3",
    },
    {
        icon: <BookOpen size={22} className="text-brand-blue" />,
        title: "Global Publishing",
        desc: "From ISBN registration to worldwide distribution, we manage every publishing detail so your book launches smoothly and professionally.",
        rotation: "rotate-3",
    },
    {
        icon: <Megaphone size={22} className="text-brand-blue" />,
        title: "Book Marketing",
        desc: "Expand your reach with targeted marketing strategies that increase visibility, connect with readers, and help your book gain meaningful traction.",
        rotation: "rotate-0",
    },
    {
        icon: <Monitor size={22} className="text-brand-blue" />,
        title: "Author Website Design",
        desc: "Build a professional online presence with a custom author website that showcases your work, strengthens your brand, and helps you engage with readers.",
        rotation: "-rotate-3",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="bg-gray-100 py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="font-titillium font-bold text-3xl sm:text-[2.6rem] text-gray-900 mb-3">
                    Our Book Publishing Services <br /> That Leave a Lasting Impression
                </h2>
                <p className="text-gray-500 text-[1rem] max-w-lg mx-auto leading-relaxed">
                    We don't believe in one-size-fits-all publishing. Every book is crafted with intention, refined with precision, and launched with a strategy designed specifically for your story through our customized book publishing services.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {services.map((service, i) => (
                    <div key={i} className="relative pt-5 flex flex-col">

                        {/* Pin */}
                        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 w-10 h-10">
                            <Image
                                src="/images/pin.png"
                                alt="pin"
                                width={40}
                                height={40}
                                className="w-full h-full object-contain drop-shadow-md"
                            />
                        </div>

                        {/* Card — flex-1 so all cards in a row stretch to same height */}
                        <div
                            className={`
                                flex flex-col flex-1
                                ${service.rotation} hover:rotate-0
                                transition-transform duration-500 ease-out
                                cursor-pointer
                                bg-white rounded-2xl p-3 pt-12 shadow-md
                            `}
                            style={{ transformOrigin: "top center" }}
                        >
                            {/* Inner content — flex-col so button always sticks to bottom */}
                            <div className="bg-gray-100 rounded-xl px-5 pt-12 pb-5 flex flex-col flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-white rounded-lg p-2 shadow-sm shrink-0">
                                        {service.icon}
                                    </div>
                                    <h3 className="font-titillium font-bold text-gray-900 text-base">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description takes all available space */}
                                <p className="text-gray-500 text-[1rem] leading-relaxed mb-5 flex-1">
                                    {service.desc}
                                </p>

                                {/* Button always at bottom */}
                                <a
                                    href="#"
                                    className="block w-full text-center bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm py-2.5 rounded-lg transition-colors duration-200 mt-auto"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}