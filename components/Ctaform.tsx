"use client";

export default function CTAFormSection() {
    return (
        <section className=" px-4 pb-12">
            <div className="flex justify-center pb-6">
                <a
                    href="#"
                    className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-base px-12 py-3.5 rounded-b-[15px] shadow-lg shadow-brand-blue/30 transition-colors duration-200"
                >
                    Start Your Journey Now
                </a>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 items-center">
                <input
                    type="text"
                    placeholder="Name"
                    className="bg-brand-blue-light flex-1 w-full rounded-[10px] px-5 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-blue/20 transition border-none shadow-sm"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="bg-brand-blue-light flex-1 w-full rounded-[10px] px-5 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-blue/20 transition border-none shadow-sm"
                />
                <input
                    type="text"
                    placeholder="Message"
                    className="bg-brand-blue-light flex-1 w-full rounded-[10px] px-5 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-blue/20 transition border-none shadow-sm"
                />
                <button className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm px-8 py-3 rounded-[10px] transition-colors duration-200 whitespace-nowrap shadow-lg shadow-brand-blue/25">
                    Submit Now
                </button>
            </div>
        </section>
    );
}