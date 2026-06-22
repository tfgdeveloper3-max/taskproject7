"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FreeQuoteModal from "./Freequotemodal";

const allServices = [
    "Book Writing", "Ghostwriting", "Children's Book Writing", "Sci-Fi Writing",
    "Memoir Writing", "Fiction Writing", "SEO Content Writing", "Mystery Writing",
    "Historical Writing", "Fantasy Writing", "Non-Fiction Writing", "Script Writing",
    "Horror Writing", "Book Proofreading", "Book Editing", "Ebook Creation",
    "Audiobook Narration", "Book Formatting", "Children's Book Editing", "Book Publishing",
    "Book Cover Design", "Author Website Design", "Book Printing", "Book Marketing",
];

export default function CTAFormSection() {
    const router = useRouter();

    const [form, setForm] = useState({
        name: "", email: "", phone: "", service: "", message: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const res = await fetch("https://leads.authorpublishers.us/api/lead/xk1hqvfUcEB9YZ5EGuKSJ1Jr8ibOtVy3", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    Name: form.name,
                    Email: form.email,
                    "Phone Number": form.phone,
                    "Service Name": form.service,
                    Message: form.message,
                }),
            });
            if (!res.ok) throw new Error();
            router.push("/thank-you");
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "bg-brand-blue-light flex-1 w-full rounded-[10px] px-5 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-blue/20 transition border-none shadow-sm";

    return (
        <section className="px-4 pb-12">
            <div className="flex justify-center pb-6">
                <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-base px-12 py-3.5 rounded-b-[15px] shadow-lg shadow-brand-blue/30 transition-colors duration-200"
                >
                    Start Your Journey Now
                </button>
            </div>

            <form
                onSubmit={handleSubmit}
                className="max-w-5xl mx-auto flex flex-col sm:flex-row flex-wrap gap-3 items-stretch"
            >
                {/* Name */}
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className={inputClass}
                />

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className={inputClass}
                />

                {/* Phone */}
                <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={inputClass}
                />

                {/* Services Dropdown */}
                <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    size={1}
                    style={{ maxHeight: "42px" }}
                    className={`${inputClass} appearance-none cursor-pointer`}
                >
                    <option value="" disabled>Select a Service</option>
                    <optgroup label="── Writing Services ──">
                        {allServices.slice(0, 13).map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </optgroup>
                    <optgroup label="── Editing & Publishing ──">
                        {allServices.slice(13, 20).map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </optgroup>
                    <optgroup label="── Design, Printing & Marketing ──">
                        {allServices.slice(20).map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </optgroup>
                </select>

                {/* Message */}
                <input
                    type="text"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className={inputClass}
                />

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm px-8 py-3 rounded-[10px] transition-colors duration-200 whitespace-nowrap shadow-lg shadow-brand-blue/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {loading ? "Submitting…" : "Submit Now"}
                </button>

                {/* Error */}
                {error && (
                    <p className="w-full text-center text-red-500 text-xs mt-1">{error}</p>
                )}
            </form>

            <FreeQuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </section>
    );
}