"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const categories = ["All", "Action", "Faith", "Fiction", "Kids", "Mystery", "Non Fiction", "Sci-Fi"];

const books: Record<string, { src: string; alt: string }[]> = {
    Action: [
        { src: "/images/Book-Cover/Action-Adventure/1.jpg", alt: "Action Book 1" },
        { src: "/images/Book-Cover/Action-Adventure/2.jpg", alt: "Action Book 2" },
        { src: "/images/Book-Cover/Action-Adventure/3.jpg", alt: "Action Book 3" },
        { src: "/images/Book-Cover/Action-Adventure/4.jpg", alt: "Action Book 4" },
        { src: "/images/Book-Cover/Action-Adventure/5.jpg", alt: "Action Book 5" },
        { src: "/images/Book-Cover/Action-Adventure/6.jpeg", alt: "Action Book 6" },
    ],
    Faith: [
        { src: "/images/Book-Cover/Faith-Spirituality/1.jpg", alt: "Faith Book 1" },
        { src: "/images/Book-Cover/Faith-Spirituality/2.jpg", alt: "Faith Book 2" },
        { src: "/images/Book-Cover/Faith-Spirituality/3.jpg", alt: "Faith Book 3" },
        { src: "/images/Book-Cover/Faith-Spirituality/4.jpg", alt: "Faith Book 4" },
        { src: "/images/Book-Cover/Faith-Spirituality/5.jpg", alt: "Faith Book 5" },
        { src: "/images/Book-Cover/Faith-Spirituality/6.jpg", alt: "Faith Book 6" },
    ],
    Fiction: [
        { src: "/images/Book-Cover/Fiction/1.jpg", alt: "Fiction Book 1" },
        { src: "/images/Book-Cover/Fiction/2.jpg", alt: "Fiction Book 2" },
        { src: "/images/Book-Cover/Fiction/3.jpg", alt: "Fiction Book 3" },
        { src: "/images/Book-Cover/Fiction/4.jpg", alt: "Fiction Book 4" },
        { src: "/images/Book-Cover/Fiction/5.jpg", alt: "Fiction Book 5" },
        { src: "/images/Book-Cover/Fiction/6.jpg", alt: "Fiction Book 6" },
    ],
    Kids: [
        { src: "/images/Book-Cover/Kids/1.jpg", alt: "Kids Book 1" },
        { src: "/images/Book-Cover/Kids/2.jpg", alt: "Kids Book 2" },
        { src: "/images/Book-Cover/Kids/3.png", alt: "Kids Book 3" },
        { src: "/images/Book-Cover/Kids/4.jpg", alt: "Kids Book 4" },
        { src: "/images/Book-Cover/Kids/5.jpg", alt: "Kids Book 5" },
        { src: "/images/Book-Cover/Kids/6.jpg", alt: "Kids Book 6" },
    ],
    Mystery: [
        { src: "/images/Book-Cover/Mystery-Crime/1.jpg", alt: "Mystery Book 1" },
        { src: "/images/Book-Cover/Mystery-Crime/2.jpg", alt: "Mystery Book 2" },
        { src: "/images/Book-Cover/Mystery-Crime/3.jpg", alt: "Mystery Book 3" },
        { src: "/images/Book-Cover/Mystery-Crime/4.jpg", alt: "Mystery Book 4" },
        { src: "/images/Book-Cover/Mystery-Crime/5.jpg", alt: "Mystery Book 5" },
        { src: "/images/Book-Cover/Mystery-Crime/6.jpg", alt: "Mystery Book 6" },
    ],
    "Non Fiction": [
        { src: "/images/Book-Cover/Non-Fiction/1.jpg", alt: "Non Fiction Book 1" },
        { src: "/images/Book-Cover/Non-Fiction/2.jpg", alt: "Non Fiction Book 2" },
        { src: "/images/Book-Cover/Non-Fiction/3.jpg", alt: "Non Fiction Book 3" },
        { src: "/images/Book-Cover/Non-Fiction/4.jpg", alt: "Non Fiction Book 4" },
        { src: "/images/Book-Cover/Non-Fiction/5.jpg", alt: "Non Fiction Book 5" },
        { src: "/images/Book-Cover/Non-Fiction/6.jpg", alt: "Non Fiction Book 6" },
    ],
    "Sci-Fi": [
        { src: "/images/Book-Cover/Sci-Fi/1.jpg", alt: "Sci-Fi Book 1" },
        { src: "/images/Book-Cover/Sci-Fi/2.jpg", alt: "Sci-Fi Book 2" },
        { src: "/images/Book-Cover/Sci-Fi/3.jpg", alt: "Sci-Fi Book 3" },
        { src: "/images/Book-Cover/Sci-Fi/4.jpg", alt: "Sci-Fi Book 4" },
        { src: "/images/Book-Cover/Sci-Fi/5.jpg", alt: "Sci-Fi Book 5" },
        { src: "/images/Book-Cover/Sci-Fi/6.jpg", alt: "Sci-Fi Book 6" },
    ],
};

const allBooks = Object.values(books).flatMap((arr) => arr.slice(0, 2)).slice(0, 8);

function usePreloadAll() {
    useEffect(() => {
        const allSrcs = Object.values(books).flatMap((arr) => arr.map((b) => b.src));
        allSrcs.forEach((src) => {
            const img = new window.Image();
            img.src = src;
        });
    }, []);
}

export default function PortfolioSection() {
    const [active, setActive] = useState("All");
    usePreloadAll();

    const displayed = active === "All" ? allBooks : books[active] ?? [];

    return (
        <section id="portfolio" className="bg-gray-100 py-16 px-4">
            <div className="max-w-6xl mx-auto">

                <h2 className="font-titillium font-bold text-3xl sm:text-4xl text-center text-gray-900 leading-tight mb-8">
                    Explore the Books Behind Our Success Stories<br />
                    Next Can Be Yours!
                </h2>

                {/* Category tabs */}
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

                <div
                    className={`grid gap-4 ${active === "All"
                            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                            : "grid-cols-2 sm:grid-cols-3"
                        }`}
                >
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
                                priority={i < 6}
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}