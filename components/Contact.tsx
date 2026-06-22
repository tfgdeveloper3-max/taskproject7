"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

const allServices = [
    // Writing Services
    "Book Writing",
    "Ghostwriting",
    "Children's Book Writing",
    "Sci-Fi Writing",
    "Memoir Writing",
    "Fiction Writing",
    "SEO Content Writing",
    "Mystery Writing",
    "Historical Writing",
    "Fantasy Writing",
    "Non-Fiction Writing",
    "Script Writing",
    "Horror Writing",
    // Editing & Publishing
    "Book Proofreading",
    "Book Editing",
    "Ebook Creation",
    "Audiobook Narration",
    "Book Formatting",
    "Children's Book Editing",
    "Book Publishing",
    // Design, Printing & Marketing
    "Book Cover Design",
    "Author Website Design",
    "Book Printing",
    "Book Marketing",
];

export default function ContactPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

            if (!res.ok) throw new Error("Submission failed");

            router.push("/thank-you");
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="pt-12 pb-32 px-4 bg-gray-50 relative">
            <div className="max-w-6xl mx-auto">

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
                    <a
                        href="mailto:info@premiumbookwriter.com"
                        className="bg-white rounded-2xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center text-center border border-gray-100 cursor-pointer"
                    >
                        <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                            <Mail size={24} className="text-brand-blue" />
                        </div>
                        <h3 className="font-titillium font-bold text-lg text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-500 text-[1rem]">info@premiumbookwriter.com</p>
                    </a>

                    <button
                        className="bg-brand-blue rounded-2xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.45)] hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center text-center text-white border border-brand-blue-dark cursor-pointer"
                    >
                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                            <MapPin size={24} className="text-white" />
                        </div>
                        <h3 className="font-titillium font-bold text-lg mb-2">Location</h3>
                        <p className="text-white/80 text-[1rem]">
                            1001 Wilshire Boulevard<br />Los Angeles, CA 90017<br />United States
                        </p>
                    </button>

                    <a
                        href="tel:3239899924"
                        className="bg-white rounded-2xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center text-center border border-gray-100 cursor-pointer"
                    >
                        <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                            <Phone size={24} className="text-brand-blue" />
                        </div>
                        <h3 className="font-titillium font-bold text-lg text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-500 text-[1rem]">(323) 989-9924</p>
                    </a>
                </div>

                {/* Main Form Card */}
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden relative z-10 mt-12">
                    <div>
                        <h2 className="font-titillium font-bold text-2xl md:text-3xl text-gray-900 mb-2 leading-tight">
                            Let's Make Your Publishing Dream a Reality
                        </h2>
                        <p className="text-gray-400 text-sm mb-8">
                            Reach out to us today to discuss your project.
                        </p>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter Your Name"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-sm text-gray-800"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="email@example.com"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-sm text-gray-800"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (123) 456-7890"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-sm text-gray-800"
                                />
                            </div>

                            {/* ── Services Dropdown ── */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    required
                                    size={1}
                                    style={{ maxHeight: "48px" }}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-sm text-gray-800 appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Select a service…</option>
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
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Tell us about your book..."
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-sm text-gray-800 resize-none"
                                />
                            </div>

                            {error && (
                                <p className="text-red-500 text-sm">{error}</p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3.5 rounded-lg transition-colors duration-200 shadow-lg shadow-brand-blue/25 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Submitting…" : "Submit Now"}
                            </button>
                        </form>
                    </div>

                    <div className="hidden lg:block relative h-full min-h-[450px] w-full">
                        <Image
                            src="/images/map.png"
                            alt="North America Map"
                            fill
                            className="object-contain object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}