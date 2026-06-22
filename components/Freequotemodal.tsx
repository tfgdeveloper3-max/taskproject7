"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const allServices = [
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
    "Book Proofreading",
    "Book Editing",
    "Ebook Creation",
    "Audiobook Narration",
    "Book Formatting",
    "Children's Book Editing",
    "Book Publishing",
    "Book Cover Design",
    "Author Website Design",
    "Book Printing",
    "Book Marketing",
];

interface FreeQuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FreeQuoteModal({ isOpen, onClose }: FreeQuoteModalProps) {
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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

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

            onClose();
            router.push("/thank-you");
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Panel */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg pointer-events-auto relative overflow-hidden max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Top accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-blue" />

                            {/* Header */}
                            <div className="flex items-start justify-between px-8 pt-8 pb-4">
                                <div>
                                    <h2 className="font-titillium font-bold text-2xl text-gray-900 leading-tight">
                                        Get a Free Quote
                                    </h2>
                                    <p className="text-gray-400 text-sm mt-1">
                                        Tell us about your project — we'll get back to you shortly.
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="ml-4 mt-0.5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors shrink-0"
                                    aria-label="Close modal"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Form */}
                            <form className="px-8 pb-8 space-y-4" onSubmit={handleSubmit}>
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
                                        rows={3}
                                        placeholder="Tell us about your book…"
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
                                    {loading ? "Submitting…" : "Get My Free Quote"}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}