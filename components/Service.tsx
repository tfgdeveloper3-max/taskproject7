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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Industry's standard ever since 1966,",
        rotation: "rotate-3",
    },
    {
        icon: <ImageIcon size={22} className="text-brand-blue" />,
        title: "Book Cover Design",
        desc: "Aliquam hendrerit erat convallis nunc aliquet, eget euismod lectus consequat. Vestibulum sed neque orci.",
        rotation: "rotate-0",
    },
    {
        icon: <LayoutTemplate size={22} className="text-brand-blue" />,
        title: "Book Formatting",
        desc: "Aliquam hendrerit erat convallis nunc aliquet, eget euismod lectus consequat. Vestibulum sed neque orci.",
        rotation: "-rotate-3",
    },
    {
        icon: <BookOpen size={22} className="text-brand-blue" />,
        title: "Publishing Setup",
        desc: "Aliquam hendrerit erat convallis nunc aliquet, eget euismod lectus consequat. Vestibulum sed neque orci.",
        rotation: "rotate-3",
    },
    {
        icon: <Megaphone size={22} className="text-brand-blue" />,
        title: "Book Marketing",
        desc: "Aliquam hendrerit erat convallis nunc aliquet, eget euismod lectus consequat. Vestibulum sed neque orci.",
        rotation: "rotate-0",
    },
    {
        icon: <Monitor size={22} className="text-brand-blue" />,
        title: "Author Website Design",
        desc: "Aliquam hendrerit erat convallis nunc aliquet, eget euismod lectus consequat. Vestibulum sed neque orci.",
        rotation: "-rotate-3",
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-gray-100 py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="font-titillium font-bold text-3xl sm:text-[2.6rem] text-gray-900 mb-3">
                    Our Book Publishing Services
                </h2>
                <p className="text-gray-500 text-[1rem] max-w-lg mx-auto leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since 1966,
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, i) => (
                    <div
                        key={i}
                        /* Pin stays fixed — only the card rotates via inner wrapper */
                        className="relative pt-5"
                    >
                        {/* Pin — always centered at top, never moves */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-10 h-10">
                            <Image
                                src="/images/pin.png"
                                alt="pin"
                                width={40}
                                height={40}
                                className="w-full h-full object-contain drop-shadow-md"
                            />
                        </div>

                        {/* Card — rotates on hover, white bg goes up behind pin */}
                        <div
                            className={`${service.rotation} hover:rotate-0
                                transition-transform duration-500 ease-out
                                cursor-pointer bg-white rounded-2xl p-3 shadow-md
                                -mt-5 pt-8`}
                        >
                            <div className="bg-gray-100 rounded-xl px-5 pt-6 pb-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-white rounded-lg p-2 shadow-sm">
                                        {service.icon}
                                    </div>
                                    <h3 className="font-titillium font-bold text-gray-900 text-base">
                                        {service.title}
                                    </h3>
                                </div>

                                <p className="text-gray-500 text-[1rem] leading-relaxed mb-5">
                                    {service.desc}
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
    );
}