"use client";

import Image from "next/image";

export default function PlatformsSection() {
    return (
        <section className="bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl px-10 py-10 text-center shadow-sm">
                    <p className="text-gray-900 font-semibold text-[1.8rem] sm:text-[1.8rem] leading-snug mb-8">
                        Get Ready to Take Your Book Across Top Digital <br />
                        Reading Channels
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
                        <Image
                            src="/images/amazon.png"
                            alt="Amazon"
                            width={110}
                            height={34}
                            className="h-8 w-auto object-contain"
                        />

                        <Image
                            src="/images/kobo.png"
                            alt="Kobo"
                            width={90}
                            height={34}
                            className="h-7 w-auto object-contain"
                        />

                        <Image
                            src="/images/ibooks.png"
                            alt="Apple iBooks"
                            width={110}
                            height={34}
                            className="h-7 w-auto object-contain"
                        />

                        <Image
                            src="/images/scribd.png"
                            alt="Scribd"
                            width={100}
                            height={34}
                            className="h-7 w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}