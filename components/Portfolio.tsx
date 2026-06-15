"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Action", "Faith", "Fiction", "Kids", "Mystery", "Non Fiction", "Sci-Fi"];

const books: Record<string, { src: string; alt: string }[]> = {
    Action: [
        { src: "/images/portfolio/01.jpg", alt: "Action Book 1" },
        { src: "/images/portfolio/02.jpg", alt: "Action Book 2" },
        { src: "/images/portfolio/03.jpg", alt: "Action Book 3" },
        { src: "/images/portfolio/04.jpg", alt: "Action Book 4" },
        { src: "/images/portfolio/05.jpg", alt: "Action Book 5" },
        { src: "/images/portfolio/06.jpg", alt: "Action Book 6" },
    ],
    Faith: [
        { src: "/images/portfolio/07.jpg", alt: "Faith Book 1" },
        { src: "/images/portfolio/08.jpg", alt: "Faith Book 2" },
        { src: "/images/portfolio/09.jpg", alt: "Faith Book 3" },
        { src: "/images/portfolio/10.jpg", alt: "Faith Book 4" },
        { src: "/images/portfolio/11.jpg", alt: "Faith Book 5" },
        { src: "/images/portfolio/12.jpg", alt: "Faith Book 6" },
    ],
    Fiction: [
        { src: "/images/portfolio/13.jpg", alt: "Fiction Book 1" },
        { src: "/images/portfolio/14.jpg", alt: "Fiction Book 2" },
        { src: "/images/portfolio/15.jpg", alt: "Fiction Book 3" },
        { src: "/images/portfolio/16.jpg", alt: "Fiction Book 4" },
        { src: "/images/portfolio/17.jpg", alt: "Fiction Book 5" },
        { src: "/images/portfolio/18.jpg", alt: "Fiction Book 6" },
    ],
    Kids: [
        { src: "/images/portfolio/19.jpg", alt: "Kids Book 1" },
        { src: "/images/portfolio/20.jpg", alt: "Kids Book 2" },
        { src: "/images/portfolio/21.jpg", alt: "Kids Book 3" },
        { src: "/images/portfolio/22.jpg", alt: "Kids Book 4" },
        { src: "/images/portfolio/23.jpg", alt: "Kids Book 5" },
        { src: "/images/portfolio/24.jpg", alt: "Kids Book 6" },
    ],
    Mystery: [
        { src: "/images/portfolio/25.jpg", alt: "Mystery Book 1" },
        { src: "/images/portfolio/26.jpg", alt: "Mystery Book 2" },
        { src: "/images/portfolio/27.jpg", alt: "Mystery Book 3" },
        { src: "/images/portfolio/28.jpg", alt: "Mystery Book 4" },
        { src: "/images/portfolio/29.jpg", alt: "Mystery Book 5" },
        { src: "/images/portfolio/30.jpg", alt: "Mystery Book 6" },
    ],
    "Non Fiction": [
        { src: "/images/portfolio/31.jpg", alt: "Non Fiction Book 1" },
        { src: "/images/portfolio/32.jpg", alt: "Non Fiction Book 2" },
        { src: "/images/portfolio/33.jpg", alt: "Non Fiction Book 3" },
        { src: "/images/portfolio/34.jpg", alt: "Non Fiction Book 4" },
        { src: "/images/portfolio/35.jpg", alt: "Non Fiction Book 5" },
        { src: "/images/portfolio/36.jpg", alt: "Non Fiction Book 6" },
    ],
    "Sci-Fi": [
        { src: "/images/portfolio/37.jpg", alt: "Sci-Fi Book 1" },
        { src: "/images/portfolio/38.jpg", alt: "Sci-Fi Book 2" },
        { src: "/images/portfolio/39.jpg", alt: "Sci-Fi Book 3" },
        { src: "/images/portfolio/40.jpg", alt: "Sci-Fi Book 4" },
        { src: "/images/portfolio/41.jpg", alt: "Sci-Fi Book 5" },
        { src: "/images/portfolio/42.jpg", alt: "Sci-Fi Book 6" },
    ],
};

const allBooks = Object.values(books).flatMap(arr => arr.slice(0, 2)).slice(0, 8);

export default function PortfolioSection() {
    const [active, setActive] = useState("All");

    const displayed = active === "All" ? allBooks : books[active] ?? [];

    return (
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-6xl mx-auto">

                <h2 className="font-titillium font-bold text-3xl sm:text-4xl text-center text-gray-900 leading-tight mb-8">
                    See What We've Created — And<br />
                    What We Can Create For You
                </h2>

                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2 rounded-[10px] text-sm font-medium transition-colors duration-200
                                ${active === cat
                                    ? "bg-brand-blue text-white shadow-md shadow-brand-blue/30"
                                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {displayed.map((book, i) => (
                        <div
                            key={`${active}-${i}`}
                            className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                        >
                            <Image
                                src={book.src}
                                alt={book.alt}
                                fill
                                quality={100}
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}